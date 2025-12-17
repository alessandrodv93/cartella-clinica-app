import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router'; // Import fondamentale per navigare

@Component({
  selector: 'app-scelta-area',
  standalone: true,
  imports: [MatButtonModule], // Importiamo i bottoni Material
  templateUrl: './scelta-area.html',
  styleUrl: './scelta-area.css'
})
export class SceltaAreaComponent {

  constructor(private router: Router) {}

  selezionaArea(area: string) {
    console.log('Area selezionata:', area);

    // Salviamo l'area in memoria temporanea (SessionStorage)
    // Così potremo recuperarla nella pagina dopo
    sessionStorage.setItem('areaSelezionata', area);

    // Navighiamo verso la pagina di Login
    this.router.navigate(['/login']);
  }
}
