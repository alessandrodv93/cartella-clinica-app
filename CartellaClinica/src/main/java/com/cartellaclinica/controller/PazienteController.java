package com.cartellaclinica.controller;

import com.cartellaclinica.model.Paziente;
import com.cartellaclinica.repository.PazienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pazienti")
@CrossOrigin(origins = "http://localhost:4200") // FONDAMENTALE per far parlare Angular con Java
public class PazienteController {

    @Autowired
    private PazienteRepository pazienteRepository;

    // 1. LISTA DI TUTTI I PAZIENTI (GET)
    @GetMapping
    public List<Paziente> getPazienti() {
        return pazienteRepository.findAll();
    }

    // 2. AGGIUNGI UN NUOVO PAZIENTE (POST)
    @PostMapping
    public Paziente creaPaziente(@RequestBody Paziente nuovoPaziente) {
        
        // FIX 1: Ignora l'ID se arriva dal frontend (es. id: 0)
        nuovoPaziente.setId(null);

        // FIX 2: Se lo stato non è specificato, metti il default
        if (nuovoPaziente.getStato() == null || nuovoPaziente.getStato().isEmpty()) {
            nuovoPaziente.setStato("Ricoverato");
        }
        
        // FIX 3: Se il reparto è null, metti "Pronto Soccorso" per non rompere il DB
        if (nuovoPaziente.getReparto() == null) {
            nuovoPaziente.setReparto("Pronto Soccorso");
        }

        System.out.println("Sto salvando il paziente: " + nuovoPaziente.getCognome());
        return pazienteRepository.save(nuovoPaziente);
    }
}
