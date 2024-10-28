export interface PriorityFormData {
    cbsName: string;
    method: "virtual" | "face-to-face";
    location: string;
    region: string;
    population: string;
    gender: "male" | "female" | "trans";
    drugUser: boolean;
    sexWorker: {
        direct: boolean;
        indirect: boolean;
    };
    lsl: boolean;
    trans: boolean;
    partnerType: {
        pwid: boolean;
        fsw: boolean;
        msm: boolean;
        odha: boolean;
    };
    clientType: "key-population" | "sexual-partner";
    date?: string;
}

export interface FormData {
    stepSatu: PriorityFormData | null;
    stepDua: Record<string, unknown> | null;
    stepTiga: Record<string, unknown> | null;
    stepEmpat: Record<string, unknown> | null;
    stepLima: Record<string, unknown> | null;
}