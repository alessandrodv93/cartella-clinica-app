import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Paziente } from '../../models/paziente';
import { PazienteService } from '../../services/paziente';
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
    dataIngresso: '',  // Lasciamo vuoto o mettiamo una data di default
    stato: '',         // Tipologia stato 'Ricoverato' - 'Dimesso' - 'In osservazione'
    idReparto: 0       // 0 o l'ID di un reparto di default
  };

  // Variabile per capire se stiamo modificando o creando
  isModifica = false;

  constructor(private pazienteService: PazienteService) {}

  ngOnInit(): void {
    // Ci mettiamo in ascolto: se qualcuno clicca "modifica" nella lista, riceviamo i dati qui
    this.pazienteService.pazienteDaModificare.subscribe((p: Paziente) => {
      // Copiamo i dati nel form (usiamo {...p} per creare una copia e non modificare direttamente la tabella mentre scrivi)
      this.paziente = { ...p };
      this.isModifica = true;
    });
  }

salva() {
    if (this.isModifica) {
      // CASO MODIFICA
      this.pazienteService.update(this.paziente).subscribe(() => {
        alert('Modifica salvata!');
        this.resetForm();
      });
    } else {
      // CASO INSERIMENTO NUOVO
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
