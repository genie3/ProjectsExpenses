import { Customer } from './customer';

export interface Project {
    id: number;
    name: string;
    customer: Customer;
}
