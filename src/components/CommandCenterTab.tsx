import React, { useState } from 'react';
import { MedicineSummary } from '../types';
import { getRiskBadgeClasses } from '../utils/inventory';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { Search, AlertCircle, ArrowUpDown } from 'lucide-react';

interface CommandCenterTabProps {
  summaries: MedicineSummary[];
  onSelectMedicineForForecast: (med: string) => void;
}

export const CommandCenterTab: React.FC<CommandCenterTabProps> = ({
  summaries,
  onSelectMedicineForForecast,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<keyof MedicineSummary>('medicine');
  const [sortAsc, setSortAsc] = useState(true);

  const handleSort = (field: keyof MedicineSummary) => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(true);
    }
  };

  const filteredSummaries = summaries
    .filter(item =>
      item.medicine.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.form.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.risk.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const valA = a[sortField];
      const valB = b[sortField];
      if (typeof valA === 'string' && typeof valB === 'string') {
        return sortAsc ? valA.localeCompare(valB) : valB.localeCompare(valA);
      }
      return sortAsc
        ? Number(valA) - Number(valB)
        : Number(valB) - Number(valA);
    });

  const chartData = summaries.map(s => ({
    name: s.medicine.split(' ')[0],
    fullName: s.medicine,
    stock: s.stockOnHand,
    risk: s.risk,
  }));

  const getBarColor = (risk: string) => {
    switch (risk) {
      case 'CRITICAL':
        return '#ef4444';
      case 'HIGH':
        return '#f97316';
      case 'MEDIUM':
        return '#f59e0b';
      case 'LOW':
      default:
        return '#3b82f6';
    }
  };

  return (
    <div className="space-y-8">
      {/* Section 1: Inventory risk overview */}
      <div className="bg-white rounded-xl border border-slate-200/90 shadow-xs overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-slate-900 tracking-tight">
              Inventory risk overview
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Current stock levels, consumption rates, days of cover, and estimated stock-out vulnerability
            </p>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Filter medicine..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Streamlit-compatible Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50/80 text-[11px] font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-200/80">
              <tr>
                <th
                  onClick={() => handleSort('medicine')}
                  className="px-5 py-3.5 cursor-pointer hover:text-slate-800 select-none transition"
                >
                  <div className="flex items-center gap-1.5">
                    <span>Medicine</span>
                    <ArrowUpDown className="w-3 h-3 text-slate-400" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('stockOnHand')}
                  className="px-5 py-3.5 cursor-pointer hover:text-slate-800 select-none transition"
                >
                  <div className="flex items-center gap-1.5">
                    <span>Stock</span>
                    <ArrowUpDown className="w-3 h-3 text-slate-400" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('avgDaily')}
                  className="px-5 py-3.5 cursor-pointer hover:text-slate-800 select-none transition"
                >
                  <div className="flex items-center gap-1.5">
                    <span>Avg/day</span>
                    <ArrowUpDown className="w-3 h-3 text-slate-400" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('daysCover')}
                  className="px-5 py-3.5 cursor-pointer hover:text-slate-800 select-none transition"
                >
                  <div className="flex items-center gap-1.5">
                    <span>Days cover</span>
                    <ArrowUpDown className="w-3 h-3 text-slate-400" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('risk')}
                  className="px-5 py-3.5 cursor-pointer hover:text-slate-800 select-none transition"
                >
                  <div className="flex items-center gap-1.5">
                    <span>Risk</span>
                    <ArrowUpDown className="w-3 h-3 text-slate-400" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('nearestExpiry')}
                  className="px-5 py-3.5 cursor-pointer hover:text-slate-800 select-none transition"
                >
                  <div className="flex items-center gap-1.5">
                    <span>Nearest expiry</span>
                    <ArrowUpDown className="w-3 h-3 text-slate-400" />
                  </div>
                </th>
                <th className="px-5 py-3.5 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filteredSummaries.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-5 py-8 text-center text-slate-400 text-sm">
                    No medicines match your search.
                  </td>
                </tr>
              ) : (
                filteredSummaries.map((item) => {
                  const badge = getRiskBadgeClasses(item.risk);
                  return (
                    <tr
                      key={item.medicine}
                      className="hover:bg-slate-50/70 transition-colors cursor-pointer group"
                      onClick={() => onSelectMedicineForForecast(item.medicine)}
                    >
                      <td className="px-5 py-3.5 font-medium text-slate-900 flex items-center gap-2">
                        <span>{item.medicine}</span>
                        <span className="text-[10px] font-mono uppercase bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">
                          {item.form}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 font-mono font-medium text-slate-800">
                        {item.stockOnHand.toLocaleString()}
                      </td>
                      <td className="px-5 py-3.5 font-mono text-slate-600">
                        {item.avgDaily.toFixed(1)}
                      </td>
                      <td className="px-5 py-3.5 font-mono text-slate-800">
                        {item.daysCover.toFixed(1)} d
                      </td>
                      <td className="px-5 py-3.5">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${badge.bg} ${badge.border}`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${badge.dot}`} />
                          {item.risk}
                        </span>
                      </td>
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-1.5 font-mono text-xs">
                          <span className={item.isExpiringSoon ? 'text-amber-700 font-semibold' : 'text-slate-600'}>
                            {item.nearestExpiry}
                          </span>
                          {item.isExpiringSoon && (
                            <span className="inline-flex items-center text-[10px] text-amber-800 bg-amber-100 px-1.5 py-0.5 rounded font-sans font-medium" title="Expires within 30 days">
                              <AlertCircle className="w-2.5 h-2.5 mr-0.5" />
                              &lt;30d
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-5 py-3.5 text-right">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectMedicineForForecast(item.medicine);
                          }}
                          className="text-xs text-indigo-600 hover:text-indigo-800 font-medium group-hover:underline cursor-pointer"
                        >
                          View Forecast &rarr;
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Section 2: Current stock chart */}
      <div className="bg-white rounded-xl border border-slate-200/90 shadow-xs p-5 space-y-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900 tracking-tight">
            Current stock
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            On-hand inventory units per monitored pharmaceutical item
          </p>
        </div>

        <div className="h-72 w-full pt-2">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 10, right: 20, left: 0, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis
                dataKey="fullName"
                tick={{ fontSize: 11, fill: '#475569' }}
                interval={0}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 11, fill: '#475569' }}
                tickFormatter={(v) => Number(v).toLocaleString()}
                tickLine={false}
              />
              <Tooltip
                formatter={(value: any, _name: any, item: any) => [
                  `${Number(value).toLocaleString()} units (Risk: ${item.payload.risk})`,
                  'Stock on Hand',
                ]}
                labelStyle={{ fontWeight: 600, color: '#0f172a' }}
                contentStyle={{
                  backgroundColor: '#ffffff',
                  borderRadius: '8px',
                  border: '1px solid #cbd5e1',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                  fontSize: '12px',
                }}
              />
              <Bar dataKey="stock" radius={[4, 4, 0, 0]} maxBarSize={56}>
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={getBarColor(entry.risk)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-wrap items-center justify-end gap-4 pt-1 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-red-500" />
            <span>Critical risk</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-orange-500" />
            <span>High risk</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-amber-500" />
            <span>Medium risk</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-blue-500" />
            <span>Low risk</span>
          </div>
        </div>
      </div>
    </div>
  );
};
