CREATE DATABASE IF NOT EXISTS rede_social;

USE rede_social;

CREATE TABLE perfil(
    perfil_id INT PRIMARY KEY auto_increment,
    saldo DECIMAL(10, 2) NOT NULL DEFAULT 0,
    ultima_atualizacao DATETIME,
    acao VARCHAR(50),
    ativo BOOLEAN DEFAULT 1
) engine = InnoDB;

CREATE TABLE log_perfil(
    acao_id INT PRIMARY KEY AUTO_INCREMENT,
    acao VARCHAR(300),
    data_acao DATE
) engine = InnoDB;

USE rede_social;

DELIMITER $$
CREATE TRIGGER trigger_perfil_insert
    BEFORE INSERT ON perfil
    FOR EACH ROW
BEGIN
    SET NEW.ultima_atualizacao = NOW(),
        NEW.acao = 'INSERT';
END $$
DELIMITER ;
INSERT INTO perfil(saldo) VALUES (2500);

DELIMITER $$
CREATE TRIGGER trigger_perfil_update
    BEFORE UPDATE ON perfil
    FOR EACH ROW
BEGIN 
    SET NEW.ultima_atualizacao = NOW(), NEW.acao = 'UPDATE';
END $$
DELIMITER ;

UPDATE perfil SET saldo =3000 WHERE perfil_id=1;
SELECT * FROM rede_social.perfil;
SELECT * FROM rede_social.log_perfil;

DELIMITER $$
CREATE TRIGGER trigger_delete
    BEFORE DELETE ON perfil
    FOR EACH ROW
BEGIN 
    INSERT INTO log_perfil (acao, data_acao) VALUES ('EXCUIDO', NOW());
END $$
DELIMITER ;

DELETE FROM rede_social.perfil WHERE perfil_id=1;






