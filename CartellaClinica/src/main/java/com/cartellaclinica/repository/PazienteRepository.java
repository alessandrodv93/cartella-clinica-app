package com.cartellaclinica.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.cartellaclinica.model.Paziente;

@Repository
public interface PazienteRepository extends JpaRepository<Paziente, Long> {
    // Non serve scrivere codice qui, fa tutto Spring!
}
