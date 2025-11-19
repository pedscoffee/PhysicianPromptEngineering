import React, { useState } from 'react';
import { LayoutDashboard, Clock, FileText, Activity, Plus } from 'lucide-react';

import { useStore } from './store';
import { cn } from './lib/utils';
import TimelineView from './components/TimelineView';
import OrganSystemView from './components/OrganSystemView';
import NoteView from './components/NoteView';
import EventForm from './components/EventForm';

type ViewMode = 'dashboard' | 'timeline' | 'systems' | 'note';

export default function App() {
  const [view, setView] = useState<ViewMode>('dashboard');
  const [showEventForm, setShowEventForm] = useState(false);
  const { currentCase, setDemographics } = useStore();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Top Bar */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <div className="bg-blue-600 text-white p-2 rounded-lg">
            <Activity size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-800">{currentCase.title}</h1>
            <input
              type="text"
              placeholder="Enter Demographics (e.g. 55M)"
              className="text-sm text-slate-500 bg-transparent border-none focus:ring-0 p-0 w-64"
              value={currentCase.demographics}
              onChange={(e) => setDemographics(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowEventForm(true)}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors shadow-sm"
          >
            <Plus size={18} />
            <span>Add Event</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex h-[calc(100vh-80px)]">
        {/* Sidebar Navigation */}
        <nav className="w-20 bg-white border-r border-slate-200 flex flex-col items-center py-6 gap-6">
          <NavButton
            active={view === 'dashboard'}
            onClick={() => setView('dashboard')}
            icon={<LayoutDashboard size={24} />}
            label="Dash"
          />
          <NavButton
            active={view === 'timeline'}
            onClick={() => setView('timeline')}
            icon={<Clock size={24} />}
            label="Time"
          />
          <NavButton
            active={view === 'systems'}
            onClick={() => setView('systems')}
            icon={<Activity size={24} />}
            label="Systems"
          />
          <NavButton
            active={view === 'note'}
            onClick={() => setView('note')}
            icon={<FileText size={24} />}
            label="Note"
          />
        </nav>

        {/* View Area */}
        <div className="flex-1 overflow-auto p-6 bg-slate-50 relative">
          {view === 'dashboard' && <DashboardOverview />}
          {view === 'timeline' && <TimelineView />}
          {view === 'systems' && <OrganSystemView />}
          {view === 'note' && <NoteView />}
        </div>
      </main>

      {/* Modals */}
      {showEventForm && (
        <EventForm onClose={() => setShowEventForm(false)} />
      )}
    </div>
  );
}

function NavButton({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: React.ReactNode, label: string }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-col items-center gap-1 p-2 rounded-lg transition-all w-16",
        active ? "bg-blue-50 text-blue-600" : "text-slate-400 hover:text-slate-600 hover:bg-slate-100"
      )}
    >
      {icon}
      <span className="text-[10px] font-medium">{label}</span>
    </button>
  );
}

function DashboardOverview() {
  return (
    <div className="grid grid-cols-2 gap-6 h-full">
      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
        <h3 className="font-semibold text-slate-500 mb-4 flex items-center gap-2"><Clock size={16} /> Recent Timeline</h3>
        <div className="flex-1 relative">
          <div className="absolute inset-0 opacity-50 pointer-events-none">
            {/* Mini timeline preview placeholder */}
            <TimelineView mini />
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
        <h3 className="font-semibold text-slate-500 mb-4 flex items-center gap-2"><Activity size={16} /> Systems Overview</h3>
        <div className="flex-1">
          {/* Mini systems preview placeholder */}
          <OrganSystemView mini />
        </div>
      </div>
      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 col-span-2 flex flex-col">
        <h3 className="font-semibold text-slate-500 mb-4 flex items-center gap-2"><FileText size={16} /> Active Note</h3>
        <div className="flex-1 overflow-hidden">
          <NoteView mini />
        </div>
      </div>
    </div>
  )
}
