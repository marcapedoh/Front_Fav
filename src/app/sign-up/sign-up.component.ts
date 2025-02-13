import { Component } from '@angular/core';
import { AuthService, UserType } from '../auth-service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  userType: UserType = UserType.USER;
  passwordMismatch: boolean = false; // Define the property here

  constructor(private authService: AuthService) {}

  onSubmit() {
    if (this.password !== this.confirmPassword) {
      this.passwordMismatch = true;
      return;
    }
    this.passwordMismatch = false; // Reset mismatch error if passwords match

    this.authService.signUp(this.username, this.password, this.confirmPassword, this.userType).subscribe({
      next: (response) => console.log("Inscription réussie", response),
      error: (error) => console.error("Erreur d'inscription", error)
    });
  }
}
