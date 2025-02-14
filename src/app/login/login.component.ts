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
        if (response && response.token) {
          console.log("✅ Connexion réussie", response);
          localStorage.setItem('token', response.token); // Stocker le token JWT

          this.router.navigate(['/dashboard']); // Redirection vers le dashboard
        } else {
          this.errorMessage = "Réponse invalide du serveur.";
        }
      },
      error: (error) => {
        console.error("❌ Erreur de connexion", error);
        
        if (error.status === 401) {
          this.errorMessage = "Nom d'utilisateur ou mot de passe incorrect.";
        } else if (error.status === 0) {
          this.errorMessage = "Impossible de contacter le serveur. Vérifiez votre connexion.";
        } else {
          this.errorMessage = error.error?.message || "Une erreur s'est produite.";
        }
      }
    });
  }
}
