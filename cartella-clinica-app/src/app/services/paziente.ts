import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paziente } from '../models/paziente';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PazienteService {

  // Assicurati che l'URL sia corretto per il tuo backend
  private apiUrl = 'http://localhost:8080/api/pazienti';

  // Canale per avvisare che qualcuno vuole modificare un paziente
  pazienteDaModificare = new EventEmitter<Paziente>();

  constructor(private http: HttpClient) { }

  // Metodo per ottenere la lista di tutti i pazienti
  getAll(): Observable<Paziente[]> {
    return this.http.get<Paziente[]>(this.apiUrl);
  }

  // --- METODO PER INSERIRE UN NUOVO PAZIENTE---
  // Invia un oggetto Paziente al backend tramite una chiamata POST
  insert(paziente: Paziente): Observable<Paziente> {
    return this.http.post<Paziente>(this.apiUrl, paziente);
  }

  // --- METODO PER ELIMINARE UN PAZIENTE ---
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // METODO PER MODIFICARE I DATI DEL PAZIENTE (PUT)
  update(paziente: Paziente): Observable<Paziente> {
    return this.http.put<Paziente>(`${this.apiUrl}/${paziente.id}`, paziente);
  }

}
