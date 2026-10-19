import React from 'react';
import { Sliders, RefreshCw, Upload, ShieldAlert, Calendar } from 'lucide-react';

interface SidebarProps {
  medicines: string[];
  selectedMedicine: string;
  onSelectMedicine: (med: string) => void;
  horizon: number;
  onHorizonChange: (val: number) => void;
  leadDays: number;
  onLeadDaysChange: (val: number) => void;
  onResetData: () => void;
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  latestDate: string;
}

export const Sidebar: React.FC<SidebarProps> = ({
  medicines,
  selectedMedicine,
  onSelectMedicine,
  horizon,
  onHorizonChange,
  leadDays,
  onLeadDaysChange,
  onResetData,
  onFileUpload,
  latestDate,
}) => {
  return (
    <aside className="w-full lg:w-72 bg-white border-b lg:border-b-0 lg:border-r border-slate-200 p-5 shrink-0 flex flex-col justify-between">
      <div className="space-y-6">
        {/* Sidebar Header */}
        <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
          <Sliders className="w-5 h-5 text-indigo-600" />
          <h2 className="text-base font-semibold text-slate-800 tracking-tight">Controls</h2>
        </div>

        {/* Medicine Selector */}
        <div className="space-y-2">
          <label htmlFor="medicine-select" className="text-xs font-medium uppercase tracking-wider text-slate-500">
            Select medicine
          </label>
          <div className="relative">
            <select
              id="medicine-select"
              value={selectedMedicine}
              onChange={(e) => onSelectMedicine(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800 font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all shadow-xs cursor-pointer"
            >
              {medicines.map((med) => (
                <option key={med} value={med}>
                  {med}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Forecast Horizon Slider */}
        <div className="space-y-2 bg-slate-50/70 p-3.5 rounded-xl border border-slate-200/80">
          <div className="flex justify-between items-center text-xs">
            <span className="font-medium text-slate-700">Forecast horizon</span>
            <span className="font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded text-[12px]">
              {horizon} days
            </span>
          </div>
          <input
            type="range"
            min={7}
            max={30}
            step={1}
            value={horizon}
            onChange={(e) => onHorizonChange(Number(e.target.value))}
            className="w-full accent-indigo-600 cursor-pointer h-1.5 bg-slate-200 rounded-lg"
          />
          <div className="flex justify-between text-[10px] text-slate-400">
            <span>7 days</span>
            <span>14 days</span>
            <span>30 days</span>
          </div>
        </div>

        {/* Supplier Lead Time Slider */}
        <div className="space-y-2 bg-slate-50/70 p-3.5 rounded-xl border border-slate-200/80">
          <div className="flex justify-between items-center text-xs">
            <span className="font-medium text-slate-700">Supplier lead time</span>
            <span className="font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded text-[12px]">
              {leadDays} days
            </span>
          </div>
          <input
            type="range"
            min={2}
            max={21}
            step={1}
            value={leadDays}
            onChange={(e) => onLeadDaysChange(Number(e.target.value))}
            className="w-full accent-indigo-600 cursor-pointer h-1.5 bg-slate-200 rounded-lg"
          />
          <div className="flex justify-between text-[10px] text-slate-400">
            <span>2 days</span>
            <span>7 days</span>
            <span>21 days</span>
          </div>
        </div>

        {/* Dataset metadata */}
        <div className="text-xs text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-100 space-y-1.5">
          <div className="flex items-center gap-1.5 text-slate-600 font-medium">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>Active dataset as of:</span>
          </div>
          <div className="font-mono text-slate-700 font-semibold pl-5">
            {latestDate || '2026-08-28'}
          </div>
        </div>

        {/* Data options */}
        <div className="pt-2 space-y-2">
          <label className="text-[11px] font-medium text-slate-500 uppercase tracking-wider block">
            Data Source
          </label>
          <label className="flex items-center justify-center gap-2 w-full py-2 px-3 text-xs font-medium text-slate-600 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg cursor-pointer transition shadow-xs">
            <Upload className="w-3.5 h-3.5 text-slate-500" />
            <span>Upload custom CSV</span>
            <input
              type="file"
              accept=".csv"
              onChange={onFileUpload}
              className="hidden"
            />
          </label>
          <button
            onClick={onResetData}
            type="button"
            className="flex items-center justify-center gap-2 w-full py-2 px-3 text-xs font-medium text-slate-600 hover:text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg transition shadow-xs cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5 text-slate-400" />
            <span>Reset to default dataset</span>
          </button>
        </div>
      </div>

      {/* Sidebar Footer info */}
      <div className="pt-6 border-t border-slate-100 text-[11px] text-slate-400 flex items-center gap-2">
        <ShieldAlert className="w-3.5 h-3.5 shrink-0 text-slate-400" />
        <span>Clinical decision support preview</span>
      </div>
    </aside>
  );
};
