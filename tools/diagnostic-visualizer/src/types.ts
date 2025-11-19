export type EventCategory = 'symptom' | 'lab' | 'imaging' | 'medication' | 'procedure' | 'other';
export type OrganSystem = 'General' | 'Neuro' | 'CV' | 'Resp' | 'GI' | 'Renal' | 'Heme' | 'Endo' | 'ID' | 'MSK';

export interface ClinicalEvent {
    id: string;
    title: string;
    description: string;
    timestamp: number; // Unix timestamp
    category: EventCategory;
    organSystem: OrganSystem;
    linkedProblemId?: string;
}

export interface Problem {
    id: string;
    title: string;
    status: 'active' | 'resolved' | 'ruled_out';
}

export interface SOAP {
    subjective: string;
    objective: string;
    assessment: string;
    plan: string;
}

export interface PatientCase {
    id: string;
    title: string;
    demographics: string; // e.g., "55M"
    soap: SOAP;
    events: ClinicalEvent[];
    problems: Problem[];
    lastModified: number;
}
