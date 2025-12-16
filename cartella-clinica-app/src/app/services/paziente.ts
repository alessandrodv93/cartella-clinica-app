import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paziente } from '../models/paziente';

@Injectable({
  providedIn: 'root'
})
export class PazienteService {

  // Assicurati che l'URL sia corretto per il tuo backend
  private apiUrl = 'http://localhost:8080/api/pazienti';

  constructor(private http: HttpClient) { }

  // Metodo per LEGGERE (già fatto)
  getAll(): Observable<Paziente[]> {
    return this.http.get<Paziente[]>(this.apiUrl);
  }

  // --- METODO PER INSERIRE UN NUOVO PAZIENTE---
  // Invia un oggetto Paziente al backend tramite una chiamata POST
  insert(paziente: Paziente): Observable<Paziente> {
    return this.http.post<Paziente>(this.apiUrl, paziente);
  }
}
