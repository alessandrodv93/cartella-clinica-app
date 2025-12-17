import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Serve per navigare tra le pagine
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatButtonModule, MatFormFieldModule],
  templateUrl: './login.html', // Assicurati che i nomi coincidano
  styleUrl: './login.css',
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private router: Router) {}

  accedi() {
    //Controllo credenziali (per ora statico)
    if (this.username === 'admin' && this.password === 'admin123') {
      console.log('Login successo!');

      // Requisito Analisi: dopo il login si va alla scelta reparti (che faremo dopo)
      this.router.navigate(['/dashboard']);
    } else {
      alert('Credenziali errate! Password richiesta: admin123');
    }
  }

}
