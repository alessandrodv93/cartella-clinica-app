import { Injectable, EventEmitter } from '@angular/core'; // Ho unito gli import di Angular
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Paziente {
  id: number;
  nome: string;
  cognome: string;
  dataIngresso: string | null;
  stato: string;
  idReparto: number;
}

@Injectable({
  providedIn: 'root'
})
export class PazienteService {

  private apiUrl = 'http://localhost:8080/api/pazienti';

  // Canale per comunicare tra componenti (va bene per ora)
  pazienteDaModificare = new EventEmitter<Paziente>();

  constructor(private http: HttpClient) { }

  getAll(): Observable<Paziente[]> {
    return this.http.get<Paziente[]>(this.apiUrl);
  }

  insert(paziente: Paziente): Observable<Paziente> {
    return this.http.post<Paziente>(this.apiUrl, paziente);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  update(paziente: Paziente): Observable<Paziente> {
    return this.http.put<Paziente>(`${this.apiUrl}/${paziente.id}`, paziente);
  }
}
