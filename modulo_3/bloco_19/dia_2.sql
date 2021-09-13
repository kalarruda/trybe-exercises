CREATE DATABASE `Escola`;
CREATE TABLE IF NOT EXISTS Escola.Alunos (
    `Nome` VARCHAR(7)CHARACTER SET UTF8,
    `Idade` INT
);

INSERT INTO Escola.Alunos VALUES
('Rafael', 25),
('Amanda', 30),
('Roberto', 45),
('Roberto', 45),
('Carol', 19),
('Amanda', 25);


select COUNT( DISTINCT Nome, Idade ) from Escola.Alunos;