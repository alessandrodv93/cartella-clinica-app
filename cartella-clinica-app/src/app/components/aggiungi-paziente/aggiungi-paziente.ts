import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importante per *ngIf
import { FormsModule } from '@angular/forms';   // Importante per [(ngModel)]

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import { Paziente } from '../../models/paziente';
import { PazienteService } from '../../services/paziente.service';

@Component({
  selector: 'app-aggiungi-paziente',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  // Assicurati che questi nomi corrispondano ai tuoi file reali
  templateUrl: './aggiungi-paziente.html',
  styleUrl: './aggiungi-paziente.css'
})
export class AggiungiPazienteComponent implements OnInit {

  paziente: Paziente = {
    id: 0,
    nome: '',
    cognome: '',
    dataIngresso: '',
    stato: '',
    idReparto: 0
  };

  isModifica = false;

  constructor(private pazienteService: PazienteService) {}

  ngOnInit(): void {
    // Ascoltiamo se arriva una richiesta di modifica
    this.pazienteService.pazienteDaModificare.subscribe((p: Paziente) => {
      this.paziente = { ...p };
      this.isModifica = true;
    });
  }

  salva() {
    // 1. VALIDAZIONE: Blocchiamo se mancano i dati essenziali
    if (!this.paziente.nome || this.paziente.nome.trim() === '') {
      alert('Attenzione: Il nome è obbligatorio!');
      return;
    }
    if (!this.paziente.cognome || this.paziente.cognome.trim() === '') {
      alert('Attenzione: Il cognome è obbligatorio!');
      return;
    }

    // 2. PULIZIA: Creiamo una copia per sistemare la data per Java
    const datiDaInviare = { ...this.paziente };

    // Se la data è vuota, la mandiamo come NULL per evitare errori nel backend
    if (datiDaInviare.dataIngresso === '') {
      // @ts-ignore
      datiDaInviare.dataIngresso = null;
    }

    // 3. INVIO AL BACKEND
    if (this.isModifica) {
      this.pazienteService.update(datiDaInviare).subscribe({
        next: () => {
          alert('Modifica salvata con successo!');
          this.resetForm();
        },
        error: (err) => {
          console.error('Errore modifica:', err);
          alert('Errore durante il salvataggio. Controlla la console.');
        }
      });
    } else {
      this.pazienteService.insert(datiDaInviare).subscribe({
        next: () => {
          alert('Paziente inserito con successo!');
          this.resetForm();
        },
        error: (err) => {
          console.error('Errore inserimento:', err);
          alert('Errore durante l\'inserimento. Controlla la console.');
        }
      });
    }
  }

  // Questa è la funzione che mancava o era fuori posto!
  resetForm() {
    this.paziente = {
      id: 0, nome: '', cognome: '', dataIngresso: '',
      stato: '', idReparto: 0
    };
    this.isModifica = false;
  }

} // <--- Questa parentesi chiude la Classe. Era probabilmente quella mancante.
