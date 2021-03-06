CREATE DATABASE IF NOT EXISTS zoologico;
USE zoologico;

CREATE TABLE gerente(
    gerente_id INT PRIMARY KEY,
    nome VARCHAR(200) NOT NULL
);

CREATE TABLE cuidador(
    cuidador_id INT PRIMARY KEY,
    nome VARCHAR(200) NOT NULL,
    gerente_id INT NOT NULL,
    FOREIGN KEY (gerente_id) REFERENCES gerente(gerente_id) 
);

CREATE TABLE cuidador_gerente(
    cuidador_id INT NOT NULL,
    gerente_id INT NOT NULL,
    PRIMARY KEY (cuidador_id, gerente_id),
    FOREIGN KEY (cuidador_id) REFERENCES cuidador(cuidador_id),
    FOREIGN KEY (gerente_id) REFERENCES gerente(gerente_id)
);

CREATE TABLE especie(
    especie_id INT PRIMARY KEY, 
    tipo VARCHAR(200) NOT NULL
);

CREATE TABLE localizacao(
    localizacao_id INT PRIMARY KEY,
    endereco VARCHAR(300)
);

CREATE TABLE animal(
    animal_id INT PRIMARY KEY,
    nome VARCHAR(200) NOT NULL,
    especie_id INT NOT NULL,
    sexo VARCHAR(50) NOT NULL,
    idade INT NOT NULL,
    localizacao_id INT NOT NULL,
    FOREIGN KEY (especie_id) REFERENCES especie(especie_id),
    FOREIGN KEY (localizacao_id) REFERENCES localizacao(localizacao_id)
);




