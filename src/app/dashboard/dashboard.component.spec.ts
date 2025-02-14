import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.errorMessage = ''; // Réinitialiser le message d'erreur

    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        console.log("Connexion réussie", response);
        localStorage.setItem('token', response.token); // Stocker le token JWT

        // Redirection vers le tableau de bord
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.error("Erreur de connexion", error);
        this.errorMessage = error.error?.message || "Identifiants incorrects.";
      }
    });
  }
}
