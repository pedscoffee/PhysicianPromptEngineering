
import { useStore } from '../store';
import type { OrganSystem } from '../types';
import { cn } from '../lib/utils';

const SYSTEMS: OrganSystem[] = ['Neuro', 'CV', 'Resp', 'GI', 'Renal', 'Heme', 'Endo', 'ID', 'MSK', 'General'];

export default function OrganSystemView({ mini = false }: { mini?: boolean }) {
    const { currentCase } = useStore();

    const getSystemEvents = (system: OrganSystem) =>
        currentCase.events.filter(e => e.organSystem === system);

    return (
        <div className={cn(
            "grid gap-4",
            mini ? "grid-cols-2 gap-2" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        )}>
            {SYSTEMS.map((system) => {
                const events = getSystemEvents(system);
                if (mini && events.length === 0) return null;

                return (
                    <div key={system} className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                        <div className="bg-slate-50 px-3 py-2 border-b border-slate-100 font-semibold text-slate-700 text-sm flex justify-between items-center">
                            {system}
                            <span className="bg-slate-200 text-slate-600 text-[10px] px-1.5 py-0.5 rounded-full">
                                {events.length}
                            </span>
                        </div>
                        <div className="p-3 space-y-2 flex-1 min-h-[100px]">
                            {events.length === 0 ? (
                                <div className="text-slate-300 text-xs text-center italic py-4">No data</div>
                            ) : (
                                events.map(e => (
                                    <div key={e.id} className="text-xs border-l-2 border-blue-400 pl-2 py-0.5">
                                        <div className="font-medium text-slate-800">{e.title}</div>
                                        {!mini && <div className="text-slate-500 truncate">{e.description}</div>}
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
