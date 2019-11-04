import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../_model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private baseUrl = environment.apiUrl + 'projects/';
constructor(private http: HttpClient) { }

getProjects(): Observable<Project[]> {
  return this.http.get<Project[]>(this.baseUrl);
}

getProject(id): Observable<Project> {
  return this.http.get<Project>(this.baseUrl + id);
}

getCustomerProjects(customerId: number): Observable<Project[]> {
  return this.http.get<Project[]>(this.baseUrl + '?customerId=' + customerId);
}
}
