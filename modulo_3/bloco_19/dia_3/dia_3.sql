SELECT * FROM sakila.customer WHERE email='LEONARD.SCHOFIELD@sakilacustomer.org';

SELECT * FROM sakila.customer WHERE store_id=2 AND active=0 AND first_name <> 'KENNETH' ORDER BY first_name;

SELECT title, description, release_year, replacement_cost FROM sakila.film WHERE rating <> 'NC-17' AND replacement_cost >= 18.00 ORDER BY replacement_cost DESC, title LIMIT 100;

SELECT COUNT(*) AS 'CLIENTES ATIVOS'FROM sakila.customer WHERE active=1 AND store_id=1;

SELECT * FROM sakila.customer WHERE active=0 AND store_id=1;

SELECT * FROM sakila.film WHERE rating='NC-17' ORDER BY rental_rate, title LIMIT 50;

SELECT * FROM sakila.film WHERE title LIKE '%ace%';
-- retorna qualquer nome com 'ace' no meio do nome

SELECT * FROM sakila.film WHERE title like 'plu%';
-- retorna nome de filmes com 'plu' no inicio

SELECT * FROM sakila.film WHERE title LIKE 'p%r';
-- retorna titulo com 'p' no inicio e 'r' no fim

SELECT * FROM sakila.film WHERE title LIKE '_c%';
-- retorna titulo com a segunda letra sendo 'c'

SELECT * FROM sakila.film WHERE title LIKE '________';
-- retorna titulo com 8 letras (qualquer que sejam)

SELECT * FROM sakila.film WHERE title LIKE 'E__%';
-- retorna titulo com primeira letra E, no mínimo 3 letras
