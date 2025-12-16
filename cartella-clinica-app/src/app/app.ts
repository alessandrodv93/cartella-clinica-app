import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaPazienti } from './components/lista-pazienti/lista-pazienti';
import { AggiungiPazienteComponent } from './components/aggiungi-paziente/aggiungi-paziente';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaPazienti,AggiungiPazienteComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'cartella-clinica-app';
}
