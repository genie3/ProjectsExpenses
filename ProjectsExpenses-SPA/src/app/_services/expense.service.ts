import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Expense } from '../_model/expense';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class ExpenseService {
private baseUrl = environment.apiUrl + 'expenses/';
constructor(private http: HttpClient) { }

getExpenses(): Observable<Expense[]> {
  return this.http.get<Expense[]>(this.baseUrl);
}

getExpense(id): Observable<Expense> {
  return this.http.get<Expense>(this.baseUrl + id);
}

}
