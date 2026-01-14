import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Serve per navigare tra le pagine

// Import per la modifica dei componenti da Angular Material
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatButtonModule, MatFormFieldModule, MatCardModule, MatIconModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private router: Router) {}

accedi() {
  const isUsernameValid = this.username && this.username.trim().length > 0;
  const isPasswordValid = this.password && this.password.trim().length > 0;

  if (isUsernameValid && isPasswordValid) {
    console.log('Invio al server:', this.username);

    sessionStorage.setItem('utente', 'Utente Demo');
    this.router.navigate(['/dashboard']);

  } else {
    alert('Per favore, inserisci username e password per procedere.');
  }
}

}
