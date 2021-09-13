select concat(title, ' - ',rating) as 'CLASSIFICACAO'from sakila.film;

select COUNT(email) as 'Endereço' from sakila.staff;

SELECT * FROM sakila.rental LIMIT 10 OFFSET 4;

SELECT * FROM sakila.actor ORDER BY last_name;
SELECT * FROM sakila.actor ORDER BY last_name, first_name DESC;

SELECT * FROM sakila.language LIMIT 5 OFFSET 1;

SELECT title, release_year,length, rating, replacement_cost FROM sakila.film LIMIT 20;

 