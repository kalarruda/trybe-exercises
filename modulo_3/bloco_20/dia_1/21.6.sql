SELECT COUNT(*), first_name FROM sakila.actor GROUP BY first_name;

-- Média de duração de filmes agrupados por classificação indicativa
SELECT rating, AVG(length) AS 'média de duração'
FROM sakila.film
GROUP BY rating;

-- Valor mínimo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MIN(replacement_cost) AS 'Mínimo Custo de substituição'
FROM sakila.film
GROUP BY rating;

-- Valor máximo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MAX(replacement_cost) AS 'Max custo subtituição'
FROM sakila.film
GROUP BY rating;

-- Custo total de substituição de filmes agrupados por classificação indicativa
SELECT rating, SUM(replacement_cost) AS 'Soma custo de subtituição'
FROM sakila.film
GROUP by rating;

SELECT * FROM sakila.address;
SELECT COUNT(*) AS 'Total', active AS 'Ativos' FROM sakila.customer GROUP BY active; 
-- Monte uma query que exiba a quantidade de clientes cadastrados na tabela sakila.customer que estão ativos e a quantidade que estão inativos.

SELECT COUNT(*) AS 'Total CLientes', active AS 'Ativos', store_id AS 'Loja' FROM sakila.customer GROUP BY active, store_id;
-- Monte uma query para a tabela sakila.customer que exiba a quantidade de clientes ativos e inativos por loja. Os resultados devem conter o ID 
-- da loja , o status dos clientes (ativos ou inativos) e a quantidade de clientes por status .

SELECT AVG(rental_duration) AS 'média de aluguel', rating FROM sakila.film GROUP BY rating ORDER BY 'média de aluguel' DESC;
-- Monte uma query que exiba a média de duração de locação por classificação indicativa ( rating ) dos filmes cadastrados na tabela sakila.film . 
-- Os resultados devem ser agrupados pela classificação indicativa e ordenados da maior média para a menor.

SELECT district AS 'Distritos', COUNT(address) AS 'QTD Endereços' FROM sakila.address GROUP BY district ORDER BY COUNT(address) DESC;
-- Monte uma query para a tabela sakila.address que exiba o nome do distrito e a quantidade de endereços registrados nele. Os resultados devem
--  ser ordenados da maior quantidade para a menor.

