import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Expense} from '../_model/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
private expensesUrl = 'http://localhost:5000/api/expenses';
constructor(private http: HttpClient) { }

getExpenses(): Observable<Expense[]> {
  return this.http.get<Expense[]>(this.expensesUrl);
}
}
