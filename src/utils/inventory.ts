import { InventoryRecord, MedicineSummary, ReorderPlanItem, RiskLevel } from '../types';
import { RawInventoryRecord, INITIAL_INVENTORY_DATA } from '../data/rawInventory';
import { forecastMedicine } from './forecasting';

export function getInitialRecords(): InventoryRecord[] {
  return INITIAL_INVENTORY_DATA.map((r: RawInventoryRecord) => ({
    date: r.date,
    medicine: r.medicine,
    form: r.form,
    dailyConsumption: r.daily_consumption,
    receivedQty: r.received_qty,
    stockOnHand: r.stock_on_hand,
    nearestExpiry: r.nearest_expiry,
  }));
}

export function getRiskLabel(stock: number, avgDaily: number, leadDays: number = 7): RiskLevel {
  const daysCover = stock / Math.max(avgDaily, 0.1);
  if (daysCover < leadDays) return 'CRITICAL';
  if (daysCover < leadDays + 7) return 'HIGH';
  if (daysCover < leadDays + 14) return 'MEDIUM';
  return 'LOW';
}

export function getRiskBadgeClasses(risk: RiskLevel): {
  bg: string;
  text: string;
  border: string;
  dot: string;
} {
  switch (risk) {
    case 'CRITICAL':
      return {
        bg: 'bg-red-50 text-red-700',
        text: 'text-red-700',
        border: 'border-red-200',
        dot: 'bg-red-600',
      };
    case 'HIGH':
      return {
        bg: 'bg-orange-50 text-orange-700',
        text: 'text-orange-700',
        border: 'border-orange-200',
        dot: 'bg-orange-600',
      };
    case 'MEDIUM':
      return {
        bg: 'bg-amber-50 text-amber-700',
        text: 'text-amber-700',
        border: 'border-amber-200',
        dot: 'bg-amber-600',
      };
    case 'LOW':
      return {
        bg: 'bg-emerald-50 text-emerald-700',
        text: 'text-emerald-700',
        border: 'border-emerald-200',
        dot: 'bg-emerald-600',
      };
  }
}

/**
 * Computes the latest status snapshot for all medicines in the dataset
 */
export function computeMedicineSummaries(
  records: InventoryRecord[],
  leadDays: number = 7
): {
  latestDate: string;
  summaries: MedicineSummary[];
  totalStockUnits: number;
  criticalOrHighCount: number;
  expiringCount: number;
} {
  if (records.length === 0) {
    return {
      latestDate: '',
      summaries: [],
      totalStockUnits: 0,
      criticalOrHighCount: 0,
      expiringCount: 0,
    };
  }

  // Find max date
  let maxDateTimestamp = -Infinity;
  let maxDateStr = '';
  for (const r of records) {
    const t = new Date(r.date).getTime();
    if (t > maxDateTimestamp) {
      maxDateTimestamp = t;
      maxDateStr = r.date;
    }
  }

  const expiryCutoffDate = new Date(maxDateTimestamp);
  expiryCutoffDate.setDate(expiryCutoffDate.getDate() + 30);

  // Group by medicine
  const grouped = new Map<string, InventoryRecord[]>();
  for (const r of records) {
    if (!grouped.has(r.medicine)) {
      grouped.set(r.medicine, []);
    }
    grouped.get(r.medicine)!.push(r);
  }

  const summaries: MedicineSummary[] = [];

  for (const [medicine, medRecords] of grouped.entries()) {
    // Sort records by date ascending
    medRecords.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
    const lastRecord = medRecords[medRecords.length - 1];

    // 14-day rolling mean ending on last record
    const last14 = medRecords.slice(-14);
    const avgDaily =
      last14.reduce((sum, item) => sum + item.dailyConsumption, 0) /
      Math.max(1, last14.length);

    const daysCover = lastRecord.stockOnHand / Math.max(avgDaily, 0.1);
    const risk = getRiskLabel(lastRecord.stockOnHand, avgDaily, leadDays);
    const expiryDate = new Date(lastRecord.nearestExpiry);
    const isExpiringSoon = expiryDate.getTime() <= expiryCutoffDate.getTime();

    summaries.push({
      medicine,
      form: lastRecord.form,
      stockOnHand: lastRecord.stockOnHand,
      avgDaily,
      daysCover,
      risk,
      nearestExpiry: lastRecord.nearestExpiry,
      isExpiringSoon,
    });
  }

  // Sort by medicine name alphabetically
  summaries.sort((a, b) => a.medicine.localeCompare(b.medicine));

  const totalStockUnits = summaries.reduce((acc, s) => acc + s.stockOnHand, 0);
  const criticalOrHighCount = summaries.filter(
    s => s.risk === 'CRITICAL' || s.risk === 'HIGH'
  ).length;
  const expiringCount = summaries.filter(s => s.isExpiringSoon).length;

  return {
    latestDate: maxDateStr,
    summaries,
    totalStockUnits,
    criticalOrHighCount,
    expiringCount,
  };
}

/**
 * Generates the replenishment reorder plan matching Streamlit tab3:
 * p = forecast_medicine(hist, lead_days + 14)
 * demand_window = p.sum()
 * safety = max(10, 0.20 * demand_window)
 * target = demand_window + safety
 * reorder = max(0, int(np.ceil(target - stock_on_hand)))
 */
export function computeReorderPlan(
  records: InventoryRecord[],
  summaries: MedicineSummary[],
  leadDays: number = 7
): ReorderPlanItem[] {
  const grouped = new Map<string, InventoryRecord[]>();
  for (const r of records) {
    if (!grouped.has(r.medicine)) {
      grouped.set(r.medicine, []);
    }
    grouped.get(r.medicine)!.push(r);
  }

  const plan: ReorderPlanItem[] = [];

  for (const item of summaries) {
    const medHistory = grouped.get(item.medicine) || [];
    const preds = forecastMedicine(medHistory, leadDays + 14);
    const demandWindow = preds.reduce((acc, v) => acc + v, 0);
    const safety = Math.max(10, 0.2 * demandWindow);
    const target = demandWindow + safety;
    const suggestedReorder = Math.max(
      0,
      Math.ceil(target - item.stockOnHand)
    );

    plan.push({
      medicine: item.medicine,
      currentStock: item.stockOnHand,
      avgDaily: Number(item.avgDaily.toFixed(1)),
      demandWindow: Math.round(demandWindow),
      suggestedReorder,
      risk: item.risk,
    });
  }

  return plan;
}

/**
 * Generates CSV file content for Reorder Plan download
 */
export function generateReorderPlanCsv(plan: ReorderPlanItem[]): string {
  const headers = [
    'Medicine',
    'Current stock',
    'Avg/day',
    'Lead+14d demand',
    'Suggested reorder',
    'Risk',
  ];
  const rows = plan.map(row => [
    `"${row.medicine}"`,
    row.currentStock,
    row.avgDaily,
    row.demandWindow,
    row.suggestedReorder,
    `"${row.risk}"`,
  ]);

  return [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
}
