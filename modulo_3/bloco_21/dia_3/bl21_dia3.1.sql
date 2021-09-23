  SELECT CONCAT(A.first_name, ' ', A.last_name) AS NOME,
  (
    SELECT COUNT(film_id)  FROM sakila.film_actor
    WHERE actor_id = A.actor_id
  )AS 'TOTAL FILMES'
   FROM sakila.actor AS A;
  
USE sakila;
DELIMITER $$ 
CREATE PROCEDURE showActors()
BEGIN
    SELECT CONCAT(first_name, ' ', last_name), actor_id,
    (SELECT COUNT(film_id) FROM sakila.film_actor
    WHERE actor_id = A.actor_id
    ) AS 'total' FROM sakila.actor AS A
    ORDER BY total DESC 
    LIMIT 10 ;
END $$
DELIMITER ;

CALL showActors();
-- Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes. Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir o id do ator ou atriz e a quantidade de filmes em que atuaram.

DELIMITER $$
CREATE PROCEDURE showIdActors(IN categoria VARCHAR(300))
BEGIN 
    SELECT
    FA.film_id AS ID, F.title, C.category_id, C.name
    FROM sakila.film_actor AS FA
    INNER JOIN
    sakila.film AS F ON F.film_id =  FA.film_id
    INNER JOIN 
    sakila.film_category AS FC ON FC.film_id = FA.film_id
    INNER JOIN
    sakila.category AS C ON C.category_id = FC.category_id
    WHERE categoria = C.name;
END $$
DELIMITER ;

CALL showIdActors('Animation');
-- Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma string e que exiba o id do filme , seu titulo , o id de sua categoria e o nome da categoria selecionada. Use as tabelas film , film_category e category para montar essa procedure.

DELIMITER $$
CREATE PROCEDURE TestEmail(IN client_email VARCHAR(100), OUT client_status VARCHAR(50))
    BEGIN
        SET client_status = (SELECT active FROM sakila.customer WHERE email = client_email);
        IF client_status = 1 THEN
            SET client_status='sim';
        ELSE
            SET client_status='Não';
        END IF;
    END $$
DELIMITER ;

SELECT @statusClient;
CALL TestEmail('MARY.SMITH@sakilacustomer.org', @statusClient);
SELECT @statusClient;

-- =======================================================================

DELIMITER $$
CREATE PROCEDURE checkEmail(IN client_email VARCHAR(100), OUT client_status BOOL)
    BEGIN
        SET client_status =(
            SELECT active FROM sakila.customer WHERE email = client_email
        );
    END $$
DELIMITER ;

SELECT @statusClient;
CALL checkEmail('MARY.SMITH@sakilacustomer.org', @statusClient);
SELECT @statusClient;
-- Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o cliente está ou não ativo, através de um parâmetro de saída.

