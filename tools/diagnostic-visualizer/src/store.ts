import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';
import type { PatientCase, ClinicalEvent, SOAP } from './types';

interface AppState {
    currentCase: PatientCase;

    // Actions
    setDemographics: (text: string) => void;
    updateSOAP: (section: keyof SOAP, value: string) => void;
    addEvent: (event: Omit<ClinicalEvent, 'id'>) => void;
    updateEvent: (id: string, updates: Partial<ClinicalEvent>) => void;
    deleteEvent: (id: string) => void;
    addProblem: (title: string) => void;

    // Import/Export
    loadCase: (data: PatientCase) => void;
    resetCase: () => void;
}

const initialSOAP: SOAP = {
    subjective: '',
    objective: '',
    assessment: '',
    plan: ''
};

const initialCase: PatientCase = {
    id: uuidv4(),
    title: 'New Case',
    demographics: '',
    soap: initialSOAP,
    events: [],
    problems: [],
    lastModified: Date.now(),
};

export const useStore = create<AppState>()(
    persist(
        (set) => ({
            currentCase: initialCase,

            setDemographics: (text) => set((state) => ({
                currentCase: { ...state.currentCase, demographics: text, lastModified: Date.now() }
            })),

            updateSOAP: (section, value) => set((state) => ({
                currentCase: {
                    ...state.currentCase,
                    soap: { ...state.currentCase.soap, [section]: value },
                    lastModified: Date.now()
                }
            })),

            addEvent: (event) => set((state) => ({
                currentCase: {
                    ...state.currentCase,
                    events: [...state.currentCase.events, { ...event, id: uuidv4() }],
                    lastModified: Date.now()
                }
            })),

            updateEvent: (id, updates) => set((state) => ({
                currentCase: {
                    ...state.currentCase,
                    events: state.currentCase.events.map((e) =>
                        e.id === id ? { ...e, ...updates } : e
                    ),
                    lastModified: Date.now()
                }
            })),

            deleteEvent: (id) => set((state) => ({
                currentCase: {
                    ...state.currentCase,
                    events: state.currentCase.events.filter((e) => e.id !== id),
                    lastModified: Date.now()
                }
            })),

            addProblem: (title) => set((state) => ({
                currentCase: {
                    ...state.currentCase,
                    problems: [...state.currentCase.problems, { id: uuidv4(), title, status: 'active' }],
                    lastModified: Date.now()
                }
            })),

            loadCase: (data) => set({ currentCase: data }),

            resetCase: () => set({ currentCase: { ...initialCase, id: uuidv4() } })
        }),
        {
            name: 'diagnostic-case-storage',
        }
    )
);
