CREATE DATABASE IF NOT EXISTS normalization;
USE normalization;

CREATE TABLE funcionario(
    funcionario_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    sobrenome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefone VARCHAR(100) NOT NULL,
    dataCadastro VARCHAR(100) NOT NULL
);

CREATE TABLE setor(
    setor_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE setor_funcionario(
    setor_id INT NOT NULL,
    funcionario_id INT NOT NULL,
    PRIMARY KEY(setor_id, funcionario_id),
    FOREIGN KEY(setor_id) REFERENCES setor(setor_id),
    FOREIGN KEY(funcionario_id) REFERENCES funcionario(funcionario_id)
);
-- =============================================================================

INSERT INTO funcionario VALUES
    (12, 'Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445', '2020-05-05 08:50:25'),
    (13, 'André', 'Freeman', 'andre1990@gmail.com', '(47)99522-4996', '55 de Fevereiro de 2020'),
    (14, 'Cíntial', 'Duval', 'cindy@outlook.com', '(33)99855-4669', '2020-05-05 10:55:35'),
    (15, 'Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556', '2020-05-05 11:45:40');

INSERT INTO setor(nome) VALUES
    ('Administração'),
    ('Operacional'),
    ('Estratégico'),
    ('Marketing'),
    ('Vendas');

SELECT * FROM setor;
-- DELETE FROM setor WHERE setor_id BETWEEN 5 AND 8; 
INSERT INTO setor_funcionario VALUES
    (1, 12),
    (2, 13),
    (3, 14),
    (4, 15);

SELECT S.nome AS 'Setor', F.nome AS 'Funcionario' FROM normalization.setor_funcionario AS SF
INNER JOIN normalization.setor AS S ON S.setor_id = SF.setor_id
INNER JOIN normalization.funcionario AS F ON F.funcionario_id = SF.funcionario_id  ;




