import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, MatRippleModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent {

  // Recuperiamo l'area scelta prima (es. "ASL BARI") per mostrarla nel titolo
  areaSelezionata = sessionStorage.getItem('areaSelezionata') || 'Area Sconosciuta';

  // Simuliamo l'utente loggato
  utente = 'Dr. Rossi';

  constructor(private router: Router) {}

  vaiAlReparto(reparto: string) {
    console.log('Reparto selezionato:', reparto);

    // Salviamo la scelta in memoria
    sessionStorage.setItem('repartoSelezionato', reparto);

    // Andiamo alla pagina con la tabella pazienti
    this.router.navigate(['/pazienti']);
  }

  logout() {
    // Puliamo la sessione e torniamo all'inizio
    sessionStorage.clear();
    this.router.navigate(['/']);
  }
}
