import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Paziente } from '../../models/paziente';
import { PazienteService } from '../../services/paziente.service';
import { OnInit } from '@angular/core';

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

export class AggiungiPazienteComponent implements OnInit {
  paziente: Paziente = {
    id: 0,
    nome: '',
    cognome: '',
    dataIngresso: '',
    stato: '',         // Tipologia stato 'Ricoverato' - 'Dimesso' - 'In osservazione'
    idReparto: 0       // ID del reparto associato al paziente
  };

  // Variabile per capire se stiamo modificando o creando un paziente
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
      //MODIFICA PAZIENTE ESISTENTE
      this.pazienteService.update(this.paziente).subscribe(() => {
        alert('Modifica salvata!');
        this.resetForm();
      });
    } else {
      //INSERIMENTO NUOVO PAZIENTE
      this.pazienteService.insert(this.paziente).subscribe(() => {
        alert('Paziente inserito!');
        this.resetForm();
      });
    }
  }

  resetForm() {
    this.paziente = { id: 0, nome: '', cognome: '', dataIngresso: '', stato: '', idReparto: 0 };
    this.isModifica = false;
  }

}
