import { Project } from './project';

export interface Expense {
    id: number;
    name: string;
    expenseDate: Date;
    amount: number;
    description?: string;
    project: Project;
}
