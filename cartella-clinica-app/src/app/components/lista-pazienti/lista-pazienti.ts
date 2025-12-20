import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

// Moduli Material
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip'; // <--- Aggiunto per il tooltip dei bottoni

// Servizi
import { PazienteService, Paziente } from '../../services/paziente.service';

// Import del componente AggiungiPaziente
import { AggiungiPazienteComponent } from '../aggiungi-paziente/aggiungi-paziente';

@Component({
  selector: 'app-lista-pazienti',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatExpansionModule,
    MatTooltipModule,
    AggiungiPazienteComponent
  ],
  templateUrl: './lista-pazienti.html',
  styleUrl: './lista-pazienti.css'
})
export class ListaPazienti implements OnInit {

  dataSource = new MatTableDataSource<Paziente>();
  displayedColumns: string[] = ['id', 'nome', 'cognome', 'dataIngresso', 'stato', 'idReparto', 'azioni'];

  repartoCorrente = sessionStorage.getItem('repartoSelezionato') || 'Generale';

  constructor(
    private pazienteService: PazienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.caricaPazienti();
  }

  caricaPazienti() {
    this.pazienteService.getAll().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  elimina(id: number) {
    if(confirm("Sei sicuro di voler eliminare questo paziente?")) {
      this.pazienteService.delete(id).subscribe(() => {
        this.caricaPazienti();
        alert('Paziente eliminato!');
      });
    }
  }

  modifica(paziente: Paziente) {
    this.pazienteService.pazienteDaModificare.emit(paziente);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  tornaIndietro() {
    this.router.navigate(['/dashboard']);
  }
}
