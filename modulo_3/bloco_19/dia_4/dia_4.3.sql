DELETE FROM sakila.film_text
WHERE title='ACademy DInosaur';

SET SQL_SAFE_UPDATES = 0;

SELECT * FROM sakila.film_actor;

DELETE FROM sakila.actor
WHERE first_name='GRACE';
-- não dá para deletar uma informação na tabela PAI se alguma outra tabela (FILHA) está usando essa informação

SELECT * FROM sakila.actor;
DELETE FROM sakila.film_actor
WHERE actor_id=12;

DELETE FROM sakila.actor
WHERE first_name='KARL';
-- Exclua do banco de dados o ator com o nome de "KARL".

SELECT * FROM sakila.film_actor;
SELECT * FROM sakila.actor WHERE first_name='matthew';

DELETE FROM sakila.film_actor
WHERE actor_id IN (8, 103, 181);

DELETE FROM sakila.actor
WHERE first_name='MATTHEW';
-- Exclua do banco de dados os atores com o nome de "MATTHEW".

SELECT * FROM sakila.film_text WHERE description LIKE '%saga%';

DELETE FROM sakila.film_text
WHERE description LIKE '%saga%';
-- Exclua da tabela film_text todos os registros que possuem a palavra "saga" em suas descrições.

SELECT * FROM sakila.film_actor;
TRUNCATE sakila.film_actor;
TRUNCATE sakila.film_category;
-- Apague da maneira mais performática possível todos os registros das tabelas film_actor e film_category .


-- Inspecione todas as tabelas do banco de dados sakila e analise quais restrições ON DELETE foram 
-- impostas em cada uma. Use o Table Inspector para fazer isso (aba DDL).

-- Exclua o banco de dados e o recrie (use as instruções no início desta aula).

SET SQL_SAFE_UPDATES=1
-- para não permitir updates nem deletes
