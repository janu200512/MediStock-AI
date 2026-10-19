import React from 'react';
import { Pill, AlertTriangle, Layers, Clock } from 'lucide-react';

interface MetricCardsProps {
  monitoredCount: number;
  criticalHighCount: number;
  totalStockUnits: number;
  potentialExpiryCount: number;
}

export const MetricCards: React.FC<MetricCardsProps> = ({
  monitoredCount,
  criticalHighCount,
  totalStockUnits,
  potentialExpiryCount,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* 1: Medicines Monitored */}
      <div className="bg-white border border-slate-200/90 rounded-xl p-4 shadow-xs hover:border-slate-300 transition flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
            Medicines monitored
          </p>
          <p className="text-2xl font-bold text-slate-900 mt-1">
            {monitoredCount}
          </p>
          <p className="text-[11px] text-slate-400 mt-0.5">Active inventory items</p>
        </div>
        <div className="p-2.5 bg-blue-50 text-blue-600 rounded-lg">
          <Pill className="w-5 h-5" />
        </div>
      </div>

      {/* 2: Critical / High Risk */}
      <div className={`bg-white border rounded-xl p-4 shadow-xs transition flex items-start justify-between ${
        criticalHighCount > 0 ? 'border-red-200 ring-1 ring-red-100' : 'border-slate-200/90'
      }`}>
        <div>
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
            Critical / High risk
          </p>
          <p className={`text-2xl font-bold mt-1 ${criticalHighCount > 0 ? 'text-red-600' : 'text-slate-900'}`}>
            {criticalHighCount}
          </p>
          <p className="text-[11px] text-slate-400 mt-0.5">Below lead-time thresholds</p>
        </div>
        <div className={`p-2.5 rounded-lg ${criticalHighCount > 0 ? 'bg-red-50 text-red-600' : 'bg-slate-100 text-slate-500'}`}>
          <AlertTriangle className="w-5 h-5" />
        </div>
      </div>

      {/* 3: Units in Stock */}
      <div className="bg-white border border-slate-200/90 rounded-xl p-4 shadow-xs hover:border-slate-300 transition flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
            Units in stock
          </p>
          <p className="text-2xl font-bold text-slate-900 mt-1">
            {totalStockUnits.toLocaleString()}
          </p>
          <p className="text-[11px] text-slate-400 mt-0.5">Current on-hand count</p>
        </div>
        <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-lg">
          <Layers className="w-5 h-5" />
        </div>
      </div>

      {/* 4: Potential Expiry Batches */}
      <div className={`bg-white border rounded-xl p-4 shadow-xs transition flex items-start justify-between ${
        potentialExpiryCount > 0 ? 'border-amber-200 ring-1 ring-amber-100' : 'border-slate-200/90'
      }`}>
        <div>
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
            Potential expiry batches
          </p>
          <p className={`text-2xl font-bold mt-1 ${potentialExpiryCount > 0 ? 'text-amber-600' : 'text-slate-900'}`}>
            {potentialExpiryCount}
          </p>
          <p className="text-[11px] text-slate-400 mt-0.5">Expiring within 30 days</p>
        </div>
        <div className={`p-2.5 rounded-lg ${potentialExpiryCount > 0 ? 'bg-amber-50 text-amber-600' : 'bg-slate-100 text-slate-500'}`}>
          <Clock className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};
