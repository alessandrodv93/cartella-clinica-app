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
  templateUrl: './login.html', // Assicurati che i nomi coincidano
  styleUrl: './login.css',
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private router: Router) {}

accedi() {
    // Controllo credenziali (in futuro questo lo farà il backend Java)
    if (this.username === 'admin' && this.password === 'admin123') {
      console.log('Login successo!');
      this.router.navigate(['/dashboard']);
    } else {
      alert('Username o Password errati. Riprova.');
    }
  }

}
