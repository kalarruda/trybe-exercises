SELECT * FROM sakila.film WHERE description LIKE '%china';
-- Mostre todos os detalhes dos filmes cujas descrições finalizam com china .

SELECT * FROM sakila.film WHERE description LIKE '%girl%' AND title LIKE '%lord';
-- Mostre todos os detalhes dos dois filmes cujas descrições contêm a palavra girl e o título finaliza com a palavra lord .

SELECT * FROM sakila.film WHERE title LIKE '___gon%';
-- Mostre os dois casos em que, a partir do 4° caractere no título do filme, tem-se a palavra gon

SELECT * FROM sakila.film WHERE title LIKE '___gon%' AND description LIKE '%documentary%';
-- Mostre o único caso em que, a partir do 4° caractere no título do filme, tem-se a palavra gon e a descrição contém a palavra Documentary .

SELECT * FROM sakila.film WHERE title LIKE '%academy' OR title LIKE 'mosquito%';
-- Mostre os dois filmes cujos títulos ou finalizam com academy ou iniciam com mosquito .

SELECT * FROM sakila.film WHERE description LIKE '%monkey%' AND description LIKE '%sumo%';
-- Mostre os seis filmes que contêm as palavras monkey e sumo em suas descrições.

SELECT * FROM sakila.payment WHERE customer_id IN (269, 239, 126, 399, 142);
-- retorna todos clientes com os ids acima

 SELECT * FROM sakila.address WHERE district IN ('QLD', 'Nagasaki', 'California', 'Attika', 'Mandalay', 'Nantou', 'Texas');
 
 SELECT * FROM sakila.language WHERE name BETWEEN 'Italian' AND 'Mandarin';
 -- retorna linguas entre Italian e Mandarin
 
 SELECT * FROM sakila.rental WHERE rental_date BETWEEN '2005-05-27' AND '2005-07-17';
 