import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Paziente } from '../../models/paziente';
import { PazienteService } from '../../services/paziente';

// Import per la modifica dei componenti da Angular Material
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-aggiungi-paziente',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './aggiungi-paziente.html',
  styleUrl: './aggiungi-paziente.css'
})
export class AggiungiPazienteComponent {
  paziente: Paziente = {
    id: 0,
    nome: '',
    cognome: '',
    dataIngresso: '',  // Lasciamo vuoto o mettiamo una data di default
    stato: '',         // Tipologia stato 'Ricoverato' - 'Dimesso' - 'In osservazione'
    idReparto: 0       // 0 o l'ID di un reparto di default
  };

  constructor(private pazienteService: PazienteService) {}

  salva() {
    this.pazienteService.insert(this.paziente).subscribe((data: Paziente) => {
      console.log('Paziente inserito:', data);
      alert('Paziente inserito con successo!');

      // Resetta il form con tutti i campi
      this.paziente = {
        id: 0,
        nome: '',
        cognome: '',
        dataIngresso: '',
        stato: '',
        idReparto: 0
      };
    });
  }
}
