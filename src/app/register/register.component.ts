import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = ''; // Tilføj denne linje
  email: string = ''; // Tilføj denne linje
  password: string = ''; // Tilføj denne linje

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.register(this.username, this.email, this.password).subscribe(response => {
      console.log('User registered successfully', response);
      this.router.navigate(['/login']);
    }, error => {
      console.error('Registration failed', error);
    });
  }
}
