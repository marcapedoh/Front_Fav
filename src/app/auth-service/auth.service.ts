import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs'; 
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // URL de l'API d'inscription 
  private apiUrl = 'http://localhost:8080/api/users'; 

  constructor(private http: HttpClient, private router: Router) {}
  goToLogin() {
    this.router.navigate(['/register']);
  }
  

  // Méthode d'inscription
  signUp(username: string, password: string, confirmPassword: string): Observable<any> {
    if (password !== confirmPassword) {
      throw new Error("Les mots de passe ne correspondent pas.");
    }
    // Envoi des données d'inscription au backend
    return this.http.post(this.apiUrl, { username, password });
  }
}
