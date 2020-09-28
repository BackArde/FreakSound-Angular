import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl: string;

  constructor(private httpClient: HttpClient, private cookies: CookieService, private router: Router) {
    this.baseUrl = 'http://localhost:3000/api/register';

  }

  login(user: any): Observable<any> {
    return this.httpClient.post('http://localhost:3000/api/register', user);
  };

  sendRegister(pFormValue) {
    return this.httpClient.post(`${this.baseUrl}/register`, pFormValue).toPromise();
  }
  setToken(token: string) {
    this.cookies.set('token', token);
  };

  getToken() {
    return this.cookies.get('token');
  };

  deleteToken() {
    return this.cookies.delete('token');
  }

}
