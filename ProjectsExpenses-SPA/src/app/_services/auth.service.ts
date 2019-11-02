import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';
import {environment} from '../../environments/environment';

const baseUrl = environment.apiUrl + 'auth/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


private jwtHelper = new JwtHelperService();
decodedToken: any;

constructor(private http: HttpClient) { }

login(model: any) {
  return this.http.post(baseUrl + 'login', model)
  .pipe(
    map((response: any) => {
      const user = response;
      if (user) {
        localStorage.setItem('token', user.token);
        this.decodeToken(user.token);
        console.log(this.decodedToken);
      }
    })
  );
}

loggedIn() {
  const token = localStorage.getItem('token');
  return !this.jwtHelper.isTokenExpired(token);
}

decodeToken(token: any) {
  this.decodedToken = this.jwtHelper.decodeToken(token);
}

}
