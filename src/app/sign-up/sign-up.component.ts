import { Component } from '@angular/core';
import { AuthService } from '../auth-service/auth.service'; 


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private authService: AuthService) {}

  onSubmit() {
    if (this.password !== this.confirmPassword) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }

    this.authService.signUp(this.username, this.password, this.confirmPassword)
      .subscribe(
        response => {
          alert("Inscription réussie !");
        },
        error => {
          console.error("Erreur lors de l'inscription", error);
          alert("Erreur lors de l'inscription");
        }
      );
  }
}


