CREATE DATABASE IF NOT EXISTS albuns;

USE albuns;
CREATE TABLE artista(
    artista_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100)
);

CREATE TABLE estilo_musical(
    estilo_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50)
);

CREATE TABLE album(
    album_id INT PRIMARY KEY AUTO_INCREMENT,
    artista_id INT NOT NULL,
    estilo_id INT NOT NULL,
    titulo VARCHAR(50),
    preco DECIMAL(5,2) NOT NULL,
    FOREIGN KEY (estilo_id) REFERENCES estilo_musical(estilo_id),
    FOREIGN KEY (artista_id) REFERENCES artista(artista_id)
);