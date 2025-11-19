
import { useStore } from '../store';
import type { EventCategory } from '../types';
import { cn } from '../lib/utils';

const CATEGORY_COLORS: Record<EventCategory, string> = {
    symptom: 'bg-red-100 text-red-700 border-red-200',
    lab: 'bg-blue-100 text-blue-700 border-blue-200',
    imaging: 'bg-purple-100 text-purple-700 border-purple-200',
    medication: 'bg-green-100 text-green-700 border-green-200',
    procedure: 'bg-orange-100 text-orange-700 border-orange-200',
    other: 'bg-slate-100 text-slate-700 border-slate-200',
};

export default function TimelineView({ mini = false }: { mini?: boolean }) {
    const { currentCase } = useStore();
    const events = [...currentCase.events].sort((a, b) => a.timestamp - b.timestamp);

    if (events.length === 0) {
        return (
            <div className="h-full flex items-center justify-center text-slate-400 text-sm italic">
                No events added yet.
            </div>
        );
    }

    return (
        <div className={cn("h-full flex flex-col", mini ? "overflow-hidden" : "overflow-auto")}>
            <div className="relative flex-1 min-h-[300px] p-4">
                {/* Vertical Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200" />

                <div className="space-y-6">
                    {events.map((event) => (
                        <div key={event.id} className="relative flex items-start gap-4 group">
                            {/* Dot */}
                            <div className={cn(
                                "absolute left-[29px] mt-1.5 w-3 h-3 rounded-full border-2 border-white shadow-sm z-10",
                                CATEGORY_COLORS[event.category].replace('bg-', 'bg-').replace('text-', 'bg-').split(' ')[1] // Hacky color mapping for dot
                            )} />

                            {/* Time */}
                            <div className="w-16 text-xs text-slate-500 text-right pt-1">
                                {new Date(event.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                <div className="text-[10px] opacity-75">
                                    {new Date(event.timestamp).toLocaleDateString([], { month: 'short', day: 'numeric' })}
                                </div>
                            </div>

                            {/* Content */}
                            <div className={cn(
                                "flex-1 p-3 rounded-lg border text-sm shadow-sm transition-all",
                                CATEGORY_COLORS[event.category],
                                mini ? "py-1 px-2 text-xs" : ""
                            )}>
                                <div className="flex justify-between items-start">
                                    <span className="font-semibold">{event.title}</span>
                                    <span className="text-[10px] uppercase tracking-wider opacity-75 border border-current px-1 rounded">
                                        {event.category}
                                    </span>
                                </div>
                                {!mini && event.description && (
                                    <p className="mt-1 opacity-90 text-xs">{event.description}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
