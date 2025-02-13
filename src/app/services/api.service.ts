import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:8080/api';  // L'URL de ton backend Spring Boot

  constructor(private http: HttpClient) { }

  // Exemple de méthode GET pour récupérer des utilisateurs
  getUsers(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/users`);
  }
}
