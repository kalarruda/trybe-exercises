SELECT first_name, COUNT(*) AS nomes_cadastrados
FROM sakila.actor
GROUP BY first_name
HAVING nomes_cadastrados > 2;
-- quando for usar o GROUP BY não pode usar o WHERE, só o HAVING

SELECT AVG(length) AS 'tamanho', rating FROM sakila.film
GROUP BY length, rating
HAVING tamanho BETWEEN 115.0 AND 121.50
ORDER BY tamanho DESC;
-- Usando a query a seguir, exiba apenas as durações médias que estão entre 115.0 a 121.50. 
-- Além disso, dê um alias (apelido) à coluna gerada por AVG(length) , 
-- de forma que deixe a query mais legível. Finalize ordenando os resultados de forma decrescente.

SET @valor = 3950.50;
SELECT SUM(replacement_cost) AS TOTAL, rating
FROM sakila.film
GROUP BY rating
HAVING TOTAL > @valor  ORDER BY TOTAL;
-- Usando a query a seguir, exiba apenas os valores de custo de substituição que estão acima de $3950.50. 
-- Dê um alias que faça sentido para SUM(replacement_cost) , 
-- de forma que deixe a query mais legível. Finalize ordenando os resultados de forma crescente.
