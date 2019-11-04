import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../_model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl = environment.apiUrl + 'customers/';

constructor(private http: HttpClient) { }

getCustomers(): Observable<Customer[]> {
  return this.http.get<Customer[]>(this.baseUrl);
}

getCustomer(id): Observable<Customer> {
  return this.http.get<Customer>(this.baseUrl + id);
}
}
