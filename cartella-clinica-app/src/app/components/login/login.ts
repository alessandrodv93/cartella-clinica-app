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
  // 1. Controllo solo se i campi sono compilati (non vuoti)
  // Non mi interessa COSA c'è scritto, basta che non siano vuoti.
  const isUsernameValid = this.username && this.username.trim().length > 0;
  const isPasswordValid = this.password && this.password.trim().length > 0;

  if (isUsernameValid && isPasswordValid) {

    // 2. Simulazione di passaggio
    // Qui, in futuro, ci sarà la chiamata al server.
    // Per ora, accettiamo QUALSIASI credenziale pur di far testare l'app.
    // VANTAGGIO: Non c'è nessuna password scritta in chiaro nel codice!

    console.log('Invio al server:', this.username); // Log di debug

    sessionStorage.setItem('utente', 'Utente Demo');
    this.router.navigate(['/dashboard']);

  } else {
    // 3. Errore solo se non scrivi nulla
    alert('Per favore, inserisci username e password per procedere.');
  }
}

}
