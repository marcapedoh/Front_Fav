import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) {}

  signUp(username: string, password: string, confirmPassword: string): Observable<any> {
    return this.http.post(this.apiUrl, { username, password });
  }
}
