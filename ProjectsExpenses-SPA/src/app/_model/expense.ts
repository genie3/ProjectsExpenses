import { Project } from './project';

export class Expense {
    id: number;
    name: string;
    expenseDate: Date;
    amount: number;
    description?: string;
    projectId: number;
    project?: Project;

    public constructor(init?: Partial<Expense>) {
        Object.assign(this, init);
    }
}
