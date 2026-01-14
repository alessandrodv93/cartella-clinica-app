package com.cartellaclinica.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "paziente")
public class Paziente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String cognome;
    private String codiceFiscale;
    private LocalDate dataNascita;
    
    // Per ora trattiamo il reparto come una stringa semplice per evitare errori di relazioni
    private String reparto; 
    
    private String stato; // Es: "Ricoverato", "Dimesso"

    // --- COSTRUTTORI ---
    public Paziente() {}

    public Paziente(String nome, String cognome, String reparto) {
        this.nome = nome;
        this.cognome = cognome;
        this.reparto = reparto;
        this.stato = "Ricoverato"; // Default
    }

    // --- GETTERS E SETTERS (Obbligatori!) ---
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public String getCognome() { return cognome; }
    public void setCognome(String cognome) { this.cognome = cognome; }

    public String getCodiceFiscale() { return codiceFiscale; }
    public void setCodiceFiscale(String codiceFiscale) { this.codiceFiscale = codiceFiscale; }

    public LocalDate getDataNascita() { return dataNascita; }
    public void setDataNascita(LocalDate dataNascita) { this.dataNascita = dataNascita; }

    public String getReparto() { return reparto; }
    public void setReparto(String reparto) { this.reparto = reparto; }

    public String getStato() { return stato; }
    public void setStato(String stato) { this.stato = stato; }
}
