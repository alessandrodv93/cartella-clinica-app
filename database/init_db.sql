-- 1. CREAZIONE TABELLE
CREATE TABLE aree (
    id SERIAL PRIMARY KEY,
    citta VARCHAR(100) NOT NULL
);

CREATE TABLE reparti (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    id_area INTEGER NOT NULL,
    FOREIGN KEY (id_area) REFERENCES aree(id)
);

CREATE TABLE utenti (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    ruolo VARCHAR(20) NOT NULL CHECK (ruolo IN ('MEDICO', 'INFERMIERE')),
    id_area INTEGER NOT NULL,
    FOREIGN KEY (id_area) REFERENCES aree(id)
);

CREATE TABLE pazienti (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cognome VARCHAR(100) NOT NULL,
    data_ingresso DATE DEFAULT CURRENT_DATE,
    stato VARCHAR(20) NOT NULL CHECK (stato IN ('ATTESA', 'RICOVERATO', 'DIMESSO')),
    id_reparto INTEGER NOT NULL,
    FOREIGN KEY (id_reparto) REFERENCES reparti(id)
);

-- 2. INSERIMENTO DATI
INSERT INTO aree (citta) VALUES ('Bari'), ('Lecce'), ('Foggia');

INSERT INTO reparti (nome, id_area) VALUES 
('Cardiologia', 1), ('Ortopedia', 1), -- Bari
('Urologia', 2),    -- Lecce
('Chirurgia', 3);   -- Foggia

INSERT INTO utenti (username, password, ruolo, id_area) VALUES 
('dottor_rossi', 'pass123', 'MEDICO', 1),
('inf_anna', 'pass123', 'INFERMIERE', 1);

INSERT INTO pazienti (nome, cognome, stato, id_reparto) VALUES 
('Mario', 'Bianchi', 'ATTESA', 1),
('Luigi', 'Verdi', 'RICOVERATO', 1),
('Giovanni', 'Neri', 'DIMESSO', 1);