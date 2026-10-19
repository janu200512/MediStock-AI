export type RiskLevel = 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';

export interface InventoryRecord {
  date: string;
  medicine: string;
  form: string;
  dailyConsumption: number;
  receivedQty: number;
  stockOnHand: number;
  nearestExpiry: string;
}

export interface MedicineSummary {
  medicine: string;
  form: string;
  stockOnHand: number;
  avgDaily: number;
  daysCover: number;
  risk: RiskLevel;
  nearestExpiry: string;
  isExpiringSoon: boolean; // within 30 days of dataset latest date
}

export interface ForecastPoint {
  date: string;
  dayLabel: string;
  historical?: number;
  forecast?: number;
  upperBound?: number;
  lowerBound?: number;
}

export interface ReorderPlanItem {
  medicine: string;
  currentStock: number;
  avgDaily: number;
  demandWindow: number;
  suggestedReorder: number;
  risk: RiskLevel;
}
