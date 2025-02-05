import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { ApiService } from '../services/api.service'; // Correct the import to use ApiService
import { CommonModule } from '@angular/common'; // Import CommonModule for ngIf, ngFor, etc.

@Component({
  selector: 'app-login',
  standalone: true, // Mark the component as standalone
  imports: [FormsModule, CommonModule], // Add FormsModule and CommonModule here
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private apiService: ApiService) {} // Use ApiService instead of AuthService

  onLogin() {
    this.apiService.login(this.username, this.password).subscribe(
      (response: any) => {
        console.log('Login successful', response);
        // Handle successful login (e.g., redirect to another page)
      },
      (error: any) => {
        console.error('Login failed', error);
        // Handle login error (e.g., show an error message)
      }
    );
  }
}