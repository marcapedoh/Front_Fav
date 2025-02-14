import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export enum UserType {
  USER = 'USER',
  ADMIN = 'ADMIN'
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/v1/auth';

  constructor(private http: HttpClient) {}

  signUp(username: string, password: string, confirmPassword: string, userType: UserType = UserType.USER): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { username, password, confirmPassword, userType });
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/authenticate`, { username, password });
  }
}
