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


-- Crie uma function que, dado o parâmetro de entrada inventory_id , retorna o nome do filme vinculado ao registro de inventário com esse id.


-- Crie uma function que receba uma determinada categoria de filme em formato de texto (ex: 'Action' , 'Horror' ) e retorna a 
-- quantidade total de filmes registrados nessa categoria.


