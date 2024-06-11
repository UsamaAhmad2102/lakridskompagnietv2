import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

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
    this.authService.login(this.username, this.password).subscribe(
      response => {
        if (response.token) {
          const userRole = this.authService.getUserRole();
          if (userRole === 'Admin') {
            this.router.navigate(['/admin']);  // Navigate to admin page
          } else {
            this.router.navigate(['/']);  // Navigate to home page
          }
        }
      },
      error => {
        this.errorMessage = error;
      }
    );
  }
}
