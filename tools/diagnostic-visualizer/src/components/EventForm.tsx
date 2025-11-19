import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useStore } from '../store';
import type { EventCategory, OrganSystem } from '../types';

const CATEGORIES: EventCategory[] = ['symptom', 'lab', 'imaging', 'medication', 'procedure', 'other'];
const SYSTEMS: OrganSystem[] = ['General', 'Neuro', 'CV', 'Resp', 'GI', 'Renal', 'Heme', 'Endo', 'ID', 'MSK'];

export default function EventForm({ onClose }: { onClose: () => void }) {
    const { addEvent } = useStore();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState<EventCategory>('symptom');
    const [organSystem, setOrganSystem] = useState<OrganSystem>('General');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [time, setTime] = useState(new Date().toTimeString().split(' ')[0].slice(0, 5));

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const timestamp = new Date(`${date}T${time}`).getTime();

        addEvent({
            title,
            description,
            category,
            organSystem,
            timestamp,
        });
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
                <div className="flex items-center justify-between p-4 border-b border-slate-100">
                    <h2 className="font-semibold text-lg">Add Event</h2>
                    <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
                        <X size={20} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-4 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
                        <input
                            required
                            type="text"
                            className="w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            placeholder="e.g. Chest Pain, Troponin, CXR"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
                            <select
                                className="w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 capitalize"
                                value={category}
                                onChange={(e) => setCategory(e.target.value as EventCategory)}
                            >
                                {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">System</label>
                            <select
                                className="w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                value={organSystem}
                                onChange={(e) => setOrganSystem(e.target.value as OrganSystem)}
                            >
                                {SYSTEMS.map(s => <option key={s} value={s}>{s}</option>)}
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Date</label>
                            <input
                                type="date"
                                className="w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Time</label>
                            <input
                                type="time"
                                className="w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Description / Result</label>
                        <textarea
                            className="w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            rows={3}
                            placeholder="Details..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    <div className="pt-2 flex justify-end gap-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-md"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-sm"
                        >
                            Add Event
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
