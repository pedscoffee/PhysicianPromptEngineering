
import { useStore } from '../store';
import type { SOAP } from '../types';
import { cn } from '../lib/utils';

export default function NoteView({ mini = false }: { mini?: boolean }) {
    const { currentCase, updateSOAP } = useStore();

    const sections: (keyof SOAP)[] = ['subjective', 'objective', 'assessment', 'plan'];

    return (
        <div className={cn("grid gap-6", mini ? "grid-cols-1 gap-2" : "grid-cols-1")}>
            {sections.map((section) => (
                <div key={section} className="flex flex-col gap-2">
                    <h3 className="font-bold text-slate-700 uppercase text-sm tracking-wide">
                        {section}
                    </h3>
                    {mini ? (
                        <div className="text-xs text-slate-600 line-clamp-3 bg-slate-50 p-2 rounded border border-slate-100">
                            {currentCase.soap[section] || <span className="italic text-slate-400">Empty</span>}
                        </div>
                    ) : (
                        <textarea
                            className="w-full min-h-[150px] p-4 rounded-lg border border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm leading-relaxed"
                            placeholder={`Enter ${section}...`}
                            value={currentCase.soap[section]}
                            onChange={(e) => updateSOAP(section, e.target.value)}
                        />
                    )}
                </div>
            ))}
        </div>
    );
}
