USE sakila;
SELECT * FROM sakila.customer;
DELIMITER $$
CREATE FUNCTION total_payments(id_user INT)
RETURNS INT READS SQL DATA
    BEGIN
        DECLARE total INT;
        SELECT COUNT(payment_id)
        FROM sakila.payment
        WHERE id_user = customer_id
        INTO total;
        RETURN total;
    END $$
DELIMITER ;

SET @pagamentos=2;
SELECT CONCAT(first_name, ' ', last_name) AS 'Nome', total_payments(@pagamentos) AS 'Total Pagamento' 
FROM sakila.customer
WHERE @pagamentos = customer_id;
-- Utilizando a tabela sakila.payment , monte uma function que retorna a quantidade total de pagamentos feitos até o momento por um determinado customer_id .
SELECT * FROM sakila.film WHERE film_id=2;
SELECT * FROM sakila.inventory;

DELIMITER $$
CREATE FUNCTION filmeNome(id INT)
RETURNS VARCHAR(500) READS SQL DATA
    BEGIN
        DECLARE nome VARCHAR(500);
        SELECT DISTINCT F.title FROM sakila.film AS F
        INNER JOIN 
        sakila.inventory AS I ON F.film_id = I.film_id
        WHERE F.film_id = id
        INTO nome;
        RETURN nome;
    END $$ 
DELIMITER ;

SELECT filmeNome(2);
-- Crie uma function que, dado o parâmetro de entrada inventory_id , retorna o nome do filme vinculado ao registro de inventário com esse id.

SELECT * FROM sakila.film_category;
SELECT * FROM sakila.category;

DELIMITER $$
CREATE FUNCTION total_category(categoria VARCHAR(300))
RETURNS INT READS SQL DATA
    BEGIN
        DECLARE total INT;
        SELECT COUNT(film_id) FROM sakila.film_category AS FC
        INNER JOIN
        sakila.category AS C ON C.category_id = FC.category_id
        WHERE C.name = categoria
        INTO total;
        RETURN total;
    END $$
DELIMITER ;

SELECT total_category('Action');
-- Crie uma function que receba uma determinada categoria de filme em formato de texto (ex: 'Action' , 'Horror' ) e retorna a 
-- quantidade total de filmes registrados nessa categoria.


