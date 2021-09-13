SELECT first_name, last_name, email FROM sakila.customer WHERE last_name IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy') ORDER BY first_name;
-- Mostre o nome, sobrenome e e-mail dos clientes com os seguintes sobrenomes: hicks, crawford, henry, boyd, mason, morales e kennedy , ordenados por nome em ordem alfabética.

SELECT email FROM sakila.customer WHERE address_id BETWEEN 172 AND 176 ORDER BY email;
-- Mostre o e-mail dos clientes com os address_id 172, 173, 174, 175 e 176 , ordenados em ordem alfabética.

SELECT COUNT(*) as `total pagantes` FROM sakila.payment WHERE payment_date BETWEEN '2005-05-01' AND '2005-08-01';
-- Descubra quantos pagamentos foram feitos entre 01/05/2005 e 01/08/2005 

SELECT title, release_year, rental_duration FROM sakila.film WHERE rental_duration BETWEEN 3 AND 6 ORDER BY rental_duration DESC, title;
-- Mostre o título, ano de lançamento e duração do empréstimo de todos os filmes com a duração de empréstimo de 3 a 6 . Os resultados devem ser classificados em filmes com maior duração de empréstimo primeiro. Em caso de empate, ordene em ordem alfabética pelo título.

SELECT title, rating FROM sakila.film WHERE rating IN ('G', 'PG', 'PG-13') ORDER BY title LIMIT 500;
-- Monte um relatório que exiba o título e classificação dos 500 primeiros filmes direcionados para as classificações indicativas G, PG e PG-13 . Os resultados devem estar ordenados por título.

SELECT * FROM sakila.payment WHERE DATE(payment_date) = '2005-07-31%';

SELECT * FROM sakila.payment WHERE payment_date LIKE '2005-08-20 00:30:52';
-- seleciona com os dias e horas exatos

SELECT YEAR(payment_date) FROM sakila.payment;
SELECT DAY(payment_date) FROM sakila.payment; -- Dia
SELECT HOUR(payment_date) FROM sakila.payment; -- Hora
SELECT MINUTE(payment_date) FROM sakila.payment; -- Minuto
SELECT SECOND(payment_date) FROM sakila.payment;

SELECT COUNT(*) FROM sakila.payment WHERE payment_date BETWEEN '2005-07-01' AND '2005-08-22';

SELECT 
	DATE(rental_date) as `data`,
	DAY(rental_date) as `dia`,
    MONTH(rental_date) as 'Mês',
    YEAR(rental_date) AS 'Ano',
    HOUR(rental_date) AS 'Hora',
    MINUTE(rental_date) AS 'minuto',
    SECOND(rental_date) AS 'segundo'
FROM sakila.rental WHERE rental_id=10330;

SELECT * FROM sakila.rental WHERE DATE(rental_date)='2005-07-28' AND HOUR(rental_date) >= 22;
