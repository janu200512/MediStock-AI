import React, { useMemo } from 'react';
import { InventoryRecord, MedicineSummary } from '../types';
import { computeReorderPlan, generateReorderPlanCsv, getRiskBadgeClasses } from '../utils/inventory';
import { Download, ShoppingCart, Info, AlertOctagon, CheckCircle2 } from 'lucide-react';

interface ReorderPlanTabProps {
  records: InventoryRecord[];
  summaries: MedicineSummary[];
  leadDays: number;
}

export const ReorderPlanTab: React.FC<ReorderPlanTabProps> = ({
  records,
  summaries,
  leadDays,
}) => {
  const plan = useMemo(() => {
    return computeReorderPlan(records, summaries, leadDays);
  }, [records, summaries, leadDays]);

  const totalReorderUnits = useMemo(() => {
    return plan.reduce((acc, item) => acc + item.suggestedReorder, 0);
  }, [plan]);

  const medicinesNeedingReorder = useMemo(() => {
    return plan.filter((item) => item.suggestedReorder > 0);
  }, [plan]);

  const handleDownloadCsv = () => {
    const csvContent = generateReorderPlanCsv(plan);
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'reorder_plan.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Overview Card */}
      <div className="bg-white rounded-xl border border-slate-200/90 shadow-xs p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-1.5 bg-indigo-50 text-indigo-600 rounded-md">
                <ShoppingCart className="w-4 h-4" />
              </span>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                Recommended replenishment
              </h3>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Dynamic replenishment based on {leadDays}-day supplier lead time + 14-day safety buffer
            </p>
          </div>

          {/* Download button matching st.download_button */}
          <button
            type="button"
            onClick={handleDownloadCsv}
            className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs px-4 py-2.5 rounded-lg shadow-xs transition cursor-pointer shrink-0"
          >
            <Download className="w-4 h-4" />
            <span>⬇️ Download reorder plan</span>
          </button>
        </div>

        {/* Quick Summary Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
          <div className="bg-slate-50/80 p-3 rounded-lg border border-slate-200/60">
            <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">
              Total Recommended Reorder
            </span>
            <p className="text-xl font-bold font-mono text-indigo-700 mt-0.5">
              {totalReorderUnits.toLocaleString()} units
            </p>
          </div>
          <div className="bg-slate-50/80 p-3 rounded-lg border border-slate-200/60">
            <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">
              Medicines Requiring Order
            </span>
            <p className="text-xl font-bold font-mono text-slate-800 mt-0.5">
              {medicinesNeedingReorder.length} of {plan.length}
            </p>
          </div>
          <div className="bg-slate-50/80 p-3 rounded-lg border border-slate-200/60">
            <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">
              Procurement Lead Window
            </span>
            <p className="text-xl font-bold font-mono text-slate-800 mt-0.5">
              {leadDays + 14} days total
            </p>
          </div>
        </div>

        {/* Main Reorder Table */}
        <div className="overflow-x-auto rounded-lg border border-slate-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50/90 text-[11px] font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-200">
              <tr>
                <th className="px-5 py-3">Medicine</th>
                <th className="px-5 py-3 font-mono">Current stock</th>
                <th className="px-5 py-3 font-mono">Avg/day</th>
                <th className="px-5 py-3 font-mono">Lead+14d demand</th>
                <th className="px-5 py-3 font-mono">Suggested reorder</th>
                <th className="px-5 py-3">Risk</th>
                <th className="px-5 py-3 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {plan.map((row) => {
                const badge = getRiskBadgeClasses(row.risk);
                const needsOrder = row.suggestedReorder > 0;

                return (
                  <tr
                    key={row.medicine}
                    className={`hover:bg-slate-50/80 transition ${
                      needsOrder ? 'bg-indigo-50/20' : ''
                    }`}
                  >
                    <td className="px-5 py-3.5 font-medium text-slate-900">
                      {row.medicine}
                    </td>
                    <td className="px-5 py-3.5 font-mono text-slate-800">
                      {row.currentStock.toLocaleString()}
                    </td>
                    <td className="px-5 py-3.5 font-mono text-slate-600">
                      {row.avgDaily.toFixed(1)}
                    </td>
                    <td className="px-5 py-3.5 font-mono text-slate-800">
                      {row.demandWindow.toLocaleString()}
                    </td>
                    <td className="px-5 py-3.5 font-mono font-bold">
                      {needsOrder ? (
                        <span className="text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                          +{row.suggestedReorder.toLocaleString()}
                        </span>
                      ) : (
                        <span className="text-slate-400">0</span>
                      )}
                    </td>
                    <td className="px-5 py-3.5">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${badge.bg} ${badge.border}`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${badge.dot}`} />
                        {row.risk}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-right">
                      {needsOrder ? (
                        <span className="inline-flex items-center gap-1 text-xs text-amber-700 font-semibold bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                          <AlertOctagon className="w-3 h-3" />
                          Order Needed
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-xs text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          <CheckCircle2 className="w-3 h-3" />
                          Stock Healthy
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Methodology explanation card */}
        <div className="mt-5 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
          <div className="flex items-center gap-1.5 font-semibold text-slate-800">
            <Info className="w-4 h-4 text-slate-500" />
            <span>Replenishment Calculation Methodology</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-[11px] pt-1">
            <div className="bg-white p-2.5 rounded border border-slate-200/80">
              <span className="font-semibold text-slate-700 block">1. Demand Window:</span>
              <span className="text-slate-500">
                Sum of ML demand forecast over (Lead Time {leadDays}d + 14d) = {leadDays + 14} days.
              </span>
            </div>
            <div className="bg-white p-2.5 rounded border border-slate-200/80">
              <span className="font-semibold text-slate-700 block">2. Safety Buffer:</span>
              <span className="text-slate-500">
                Max(10 units, 20% of forecasted demand window) to prevent stock-outs during demand spikes.
              </span>
            </div>
            <div className="bg-white p-2.5 rounded border border-slate-200/80">
              <span className="font-semibold text-slate-700 block">3. Suggested Reorder:</span>
              <span className="text-slate-500">
                Max(0, ⌈(Demand Window + Safety Buffer) - Current Stock⌉).
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
