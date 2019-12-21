//model retorno
export interface BvFaq {
    objectId: string;
    position: number;
    createdAt: Date;
    updatedAt: Date;
    answer: string;
    group: string;
    question: string;
    approved: boolean;
    visible: boolean;
}
