import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Serve per *ngIf
import { FormsModule } from '@angular/forms';   // Serve per [(ngModel)]

// Import per la grafica (Angular Material)
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

// I tuoi modelli e servizi
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
    this.pazienteService.pazienteDaModificare.subscribe((p: Paziente) => {
      this.paziente = { ...p };
      this.isModifica = true;
    });
  }

  salva() {
    if (this.isModifica) {
      // LOGICA MODIFICA
      this.pazienteService.update(this.paziente).subscribe({
        next: () => {
          alert('Modifica salvata con successo!');
          this.resetForm();
        },
        error: (err) => {
          console.error('Errore durante la modifica:', err);
          alert('Errore! Controlla la console (F12) per i dettagli.');
        }
      });
    } else {
      // LOGICA NUOVO INSERIMENTO
      this.pazienteService.insert(this.paziente).subscribe({
        next: () => {
          alert('Paziente inserito con successo!');
          this.resetForm();
        },
        error: (err) => {
          console.error('Errore durante l\'inserimento:', err);
          alert('Errore! Controlla la console (F12). Probabilmente la data o i dati non sono validi per il Backend.');
        }
      });
    }
  }

  resetForm() {
    this.paziente = {
      id: 0,
      nome: '',
      cognome: '',
      dataIngresso: '',
      stato: '',
      idReparto: 0
    };
    this.isModifica = false;
  }
}
