import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necessario per usare il ciclo *ngFor nell'HTML
import { PazienteService } from '../../services/paziente';
import { Paziente } from '../../models/paziente'; // Importiamo il modello

// Import per la modifica dei componenti da Angular Material
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-lista-pazienti',
  standalone: true,
  imports: [CommonModule,MatTableModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule],
  templateUrl: './lista-pazienti.html',
  styleUrl: './lista-pazienti.css'
})

export class ListaPazienti implements OnInit {

  // 1. Non usiamo più un array semplice, ma un DataSource specifico di Material
  dataSource = new MatTableDataSource<Paziente>();

  displayedColumns: string[] = ['id', 'nome', 'cognome', 'dataIngresso', 'stato', 'idReparto', 'azioni'];

  constructor(private pazienteService: PazienteService) { }

  ngOnInit(): void {
    this.caricaPazienti();
  }

  caricaPazienti() {
    this.pazienteService.getAll().subscribe(data => {
      // 2. Quando arrivano i dati, li mettiamo dentro il DataSource
      this.dataSource.data = data;
    });
  }

  // 3. Funzione che viene chiamata ogni volta che scrivi una lettera nella barra di ricerca
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // Pulisce la stringa (toglie spazi vuoti e rende tutto minuscolo per la ricerca)
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // --- FUNZIONE PER ELIMINARE ---
  elimina(id: number) {
    if(confirm("Sei sicuro di voler eliminare questo paziente?")) {
      this.pazienteService.delete(id).subscribe(() => {
        // Dopo aver eliminato, ricarichiamo la lista per vedere che è sparito
        this.caricaPazienti();
        alert('Paziente eliminato!');
      });
    }
  }

}
