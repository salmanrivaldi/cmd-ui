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
    step1: PriorityFormData | null;
    step2: Record<string, unknown> | null;
    step3: Record<string, unknown> | null;
    step4: Record<string, unknown> | null;
    step5: Record<string, unknown> | null;
}