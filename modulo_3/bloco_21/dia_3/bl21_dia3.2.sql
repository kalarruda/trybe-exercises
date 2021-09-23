SELECT * FROM sakila.film_actor;
SELECT * FROM sakila.actor;

DELIMITER $$
CREATE FUNCTION FilmesDosAtores(id_ator INT)
RETURNS INT READS SQL DATA
BEGIN
    DECLARE total_filmes INT;
    SELECT COUNT(*)
    FROM sakila.film_actor AS FA
    WHERE id_ator = FA.actor_id
    INTO total_filmes;
    RETURN total_filmes;
END $$
DELIMITER ;

SET @filmes_ator = 1;
SELECT CONCAT(first_name, ' ', last_name) AS 'Nome', FilmesDosAtores(@filmes_ator) AS 'Total de filmes' FROM sakila.actor WHERE @filmes_ator = actor_id;
-- Exemplo: Uma stored function que exibe a quantidade de filmes em que um determinado ator ou atriz atuou:

USE sakila;
DELIMITER $$

CREATE FUNCTION GetFullName(id INT)
RETURNS VARCHAR(200) READS SQL DATA
BEGIN
    DECLARE full_name VARCHAR(200);
    SELECT concat(first_name, ' ', last_name)
    FROM sakila.actor
    WHERE actor_id = id
    LIMIT 1 -- PRA QUE????
    INTO full_name ;
    RETURN full_name;
END $$

DELIMITER ;

SELECT GetFullName(51);
-- Exemplo: Uma stored function que exibe o nome completo de um ator ou de uma atriz, dado seu id como parâmetro:




