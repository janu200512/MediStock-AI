import React, { useState, useMemo, useCallback } from 'react';
import Papa from 'papaparse';
import { InventoryRecord } from './types';
import { getInitialRecords, computeMedicineSummaries } from './utils/inventory';
import { Sidebar } from './components/Sidebar';
import { MetricCards } from './components/MetricCards';
import { CommandCenterTab } from './components/CommandCenterTab';
import { ForecastTab } from './components/ForecastTab';
import { ReorderPlanTab } from './components/ReorderPlanTab';
import { BarChart3, Sparkles, Package } from 'lucide-react';

export const App: React.FC = () => {
  const [records, setRecords] = useState<InventoryRecord[]>(() => getInitialRecords());
  const [horizon, setHorizon] = useState<number>(14);
  const [leadDays, setLeadDays] = useState<number>(7);
  const [activeTab, setActiveTab] = useState<'command' | 'forecast' | 'reorder'>('command');

  // Sorted list of unique medicines
  const medicines = useMemo(() => {
    const set = new Set<string>();
    records.forEach((r) => set.add(r.medicine));
    return Array.from(set).sort();
  }, [records]);

  // Selected medicine for forecast tab
  const [selectedMedicine, setSelectedMedicine] = useState<string>(() => {
    return medicines[0] || 'Amoxicillin 500mg';
  });

  // Keep selected medicine valid if medicines list changes
  React.useEffect(() => {
    if (medicines.length > 0 && !medicines.includes(selectedMedicine)) {
      setSelectedMedicine(medicines[0]);
    }
  }, [medicines, selectedMedicine]);

  // Compute latest status snapshot
  const { latestDate, summaries, totalStockUnits, criticalOrHighCount, expiringCount } =
    useMemo(() => {
      return computeMedicineSummaries(records, leadDays);
    }, [records, leadDays]);

  // Reset to default dataset
  const handleResetData = useCallback(() => {
    setRecords(getInitialRecords());
  }, []);

  // Upload custom CSV file
  const handleFileUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const parsedRows: InventoryRecord[] = [];
        for (const raw of results.data as any[]) {
          if (!raw.medicine || !raw.date) continue;
          parsedRows.push({
            date: String(raw.date).trim(),
            medicine: String(raw.medicine).trim(),
            form: String(raw.form || 'TABLET').trim(),
            dailyConsumption: Number(raw.daily_consumption ?? raw.dailyConsumption ?? 0),
            receivedQty: Number(raw.received_qty ?? raw.receivedQty ?? 0),
            stockOnHand: Number(raw.stock_on_hand ?? raw.stockOnHand ?? 0),
            nearestExpiry: String(raw.nearest_expiry ?? raw.nearestExpiry ?? raw.date).trim(),
          });
        }
        if (parsedRows.length > 0) {
          setRecords(parsedRows);
        } else {
          alert('Could not parse valid inventory records from the uploaded CSV.');
        }
      },
      error: (err) => {
        console.error('Error parsing CSV:', err);
      },
    });
  }, []);

  const handleSelectMedicineForForecast = useCallback((med: string) => {
    setSelectedMedicine(med);
    setActiveTab('forecast');
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 flex flex-col font-['Inter',sans-serif]">
      {/* App Shell with Sidebar */}
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Sidebar Controls */}
        <Sidebar
          medicines={medicines}
          selectedMedicine={selectedMedicine}
          onSelectMedicine={setSelectedMedicine}
          horizon={horizon}
          onHorizonChange={setHorizon}
          leadDays={leadDays}
          onLeadDaysChange={setLeadDays}
          onResetData={handleResetData}
          onFileUpload={handleFileUpload}
          latestDate={latestDate}
        />

        {/* Main Content Area */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full space-y-6">
          {/* Header matching st.title & st.caption */}
          <header className="space-y-1">
            <div className="flex items-center gap-3">
              <span className="text-3xl select-none">💊</span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                MediStock AI
              </h1>
            </div>
            <p className="text-sm text-slate-500 font-normal">
              AI-assisted medicine demand forecasting, stock-out risk detection and reorder planning
            </p>
          </header>

          {/* Top 4 KPI Metrics */}
          <MetricCards
            monitoredCount={summaries.length}
            criticalHighCount={criticalOrHighCount}
            totalStockUnits={totalStockUnits}
            potentialExpiryCount={expiringCount}
          />

          {/* Tabs matching st.tabs(["📊 Command Center","🔮 AI Forecast","📦 Reorder Plan"]) */}
          <div className="border-b border-slate-200">
            <nav className="flex space-x-2 sm:space-x-6 overflow-x-auto" aria-label="Tabs">
              <button
                type="button"
                onClick={() => setActiveTab('command')}
                className={`py-3 px-3 inline-flex items-center gap-2 border-b-2 text-sm font-semibold whitespace-nowrap transition cursor-pointer ${
                  activeTab === 'command'
                    ? 'border-indigo-600 text-indigo-700'
                    : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                }`}
              >
                <BarChart3 className="w-4 h-4" />
                <span>📊 Command Center</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('forecast')}
                className={`py-3 px-3 inline-flex items-center gap-2 border-b-2 text-sm font-semibold whitespace-nowrap transition cursor-pointer ${
                  activeTab === 'forecast'
                    ? 'border-indigo-600 text-indigo-700'
                    : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                }`}
              >
                <Sparkles className="w-4 h-4" />
                <span>🔮 AI Forecast</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('reorder')}
                className={`py-3 px-3 inline-flex items-center gap-2 border-b-2 text-sm font-semibold whitespace-nowrap transition cursor-pointer ${
                  activeTab === 'reorder'
                    ? 'border-indigo-600 text-indigo-700'
                    : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                }`}
              >
                <Package className="w-4 h-4" />
                <span>📦 Reorder Plan</span>
              </button>
            </nav>
          </div>

          {/* Tab Contents */}
          <div className="pt-2">
            {activeTab === 'command' && (
              <CommandCenterTab
                summaries={summaries}
                onSelectMedicineForForecast={handleSelectMedicineForForecast}
              />
            )}

            {activeTab === 'forecast' && (
              <ForecastTab
                medicine={selectedMedicine}
                records={records}
                horizon={horizon}
                leadDays={leadDays}
              />
            )}

            {activeTab === 'reorder' && (
              <ReorderPlanTab
                records={records}
                summaries={summaries}
                leadDays={leadDays}
              />
            )}
          </div>

          {/* Footer matching st.divider() and st.caption() */}
          <footer className="pt-8 pb-4">
            <div className="border-t border-slate-200 pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
              <p>
                Prototype uses synthetic data for demonstration. Forecasts are decision-support estimates, not medical advice.
              </p>
              <div className="flex items-center gap-2 font-mono text-[11px] text-slate-500">
                <span>MediStock AI v1.0</span>
                <span>•</span>
                <span>React + Vite</span>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default App;
