import { Routes } from '@angular/router';
import { SceltaAreaComponent } from './components/scelta-area/scelta-area';
import { LoginComponent } from './components/login/login';
import { ListaPazienti } from './components/lista-pazienti/lista-pazienti';

export const routes: Routes = [
  // 1. Appena apri il sito (path vuoto), vai alla Scelta Area
  { path: '', component: SceltaAreaComponent },

  // 2. Pagina di Login
  { path: 'login', component: LoginComponent },

  // 3. Pagina Dashboard (per ora usiamo la lista pazienti come dashboard provvisoria)
  { path: 'dashboard', component: ListaPazienti },

  // Se l'utente scrive un indirizzo a caso, riportalo all'inizio
  { path: '**', redirectTo: '' }
];
