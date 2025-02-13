import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  usernameError: boolean = false;
  passwordError: boolean = false;

  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['/login']);
  }

  onSubmit(event: Event) {
    event.preventDefault();
    
    // Validation logic for required fields
    this.usernameError = !this.username;
    this.passwordError = !this.password;

    if (!this.usernameError && !this.passwordError) {
      console.log("Form Submitted!");
      console.log('Username:', this.username);
      console.log('Password:', this.password);
      // Add any further login logic or routing here
    }
  }
}
