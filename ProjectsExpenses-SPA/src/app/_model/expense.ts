import { Project } from './project';

export interface Expense {
    id: number;
    expenseDate: Date;
    amount: number;
    project: Project;
}
