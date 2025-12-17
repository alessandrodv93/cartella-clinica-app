import { Routes } from '@angular/router';
import { SceltaAreaComponent } from './components/scelta-area/scelta-area';
import { LoginComponent } from './components/login/login';
import { DashboardComponent } from './components/dashboard/dashboard';
import { ListaPazienti } from './components/lista-pazienti/lista-pazienti';

export const routes: Routes = [
  { path: '', component: SceltaAreaComponent },
  { path: 'login', component: LoginComponent },

  // Dopo il login si va qui:
  { path: 'dashboard', component: DashboardComponent },

  // Quando scegli il reparto si va qui:
  { path: 'pazienti', component: ListaPazienti },

  { path: '**', redirectTo: '' }
];
