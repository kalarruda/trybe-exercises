SELECT M.Title, BO.domestic_sales, BO.international_sales
FROM Pixar.BoxOffice AS BO
INNER JOIN Pixar.Movies AS M
ON M.id = BO.movie_id;
-- Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais ( international_sales ) de cada filme.

SELECT  M.Title ,BO.domestic_sales, BO.international_sales
FROM Pixar.BoxOffice AS BO
INNER JOIN Pixar.Movies AS M
ON M.id = BO.movie_id
WHERE BO.domestic_sales < BO.international_sales;
-- Exercício 2: Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para cada filme que possui um número maior 
-- de vendas internacionais ( international_sales ) do que vendas nacionais ( domestic_sales ).

SELECT M.Title, BO.rating
FROM Pixar.BoxOffice AS BO
INNER JOIN Pixar.Movies AS M
ON M.id = BO.movie_id
ORDER BY BO.rating DESC;
-- Exercício 3: Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação ( rating ) em ordem decrescente.

SELECT T.*, M.*
FROM Pixar.Theater AS T
LEFT JOIN Pixar.Movies AS M
ON T.id = M.theater_id
ORDER BY T.name;
-- Exercício 4: Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, 
-- adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.

SELECT M.*, T.*
FROM Pixar.Theater AS T
RIGHT JOIN Pixar.Movies AS M
ON M.theater_id = T.id
ORDER BY T.name;
-- Exercício 5: Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, 
-- os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.

SELECT M.Title, BO.rating
FROM Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS BO
ON M.id = BO.movie_id
WHERE BO.rating > 7.5;

SELECT Title FROM Pixar.Movies
WHERE id IN (
	SELECT movie_id FROM Pixar.BoxOffice
		WHERE rating > 7.5
);
-- Exercício 6: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem os títulos dos filmes que possuem avaliação maior que 7.5.

SELECT BO.rating
FROM Pixar.BoxOffice AS BO
INNER JOIN Pixar.Movies AS M
ON M.id = BO.movie_id
WHERE M.year > 2009;

SELECT rating FROM Pixar.BoxOffice
WHERE movie_id IN(
	SELECT id FROM Pixar.Movies
		WHERE year > 2009
);
-- Exercício 7: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem as avaliações dos filmes lançados depois de 2009.

SELECT T.name, T.location FROM Pixar.Theater AS T
	WHERE EXISTS(
		SELECT * FROM Pixar.Movies
			WHERE T.id = theater_id
);
-- Exercício 8: Utilizando o EXISTS , selecione o nome e localização dos cinemas que possuem filmes em cartaz.

SELECT T.name, T.location FROM Pixar.Theater AS T
	WHERE NOT EXISTS(
		SELECT * FROM Pixar.Movies
		WHERE T.id = theater_id
);
-- Exercício 9: Utilizando o EXISTS , selecione o nome e localização dos cinemas que não possuem filmes em cartaz.

SELECT * FROM Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS BO
ON M.id = BO.movie_id
WHERE BO.rating > 8 AND M.theater_id IS NOT NUll;
-- Exercício 10: Utilizando o INNER JOIN , selecione todas as informações dos filmes com avaliação maior que 8 e que estejam em cartaz.

SELECT t1.title, t1.length_minutes, t1.director
FROM Pixar.Movies AS t1, Pixar.Movies AS t2
WHERE t1.director = t2.director AND t1.title <> t2.title;

SELECT t1.title, t1.length_minutes, t1.director
FROM Pixar.Movies AS t1, Pixar.Movies AS t2
WHERE t1.director = t2.director; -- NÃO ENTENDI ===================================
-- Exercício 11: Utilizando o SELF JOIN , selecione os títulos e duração dos filmes que possuem o mesmo diretor.

SELECT * FROM Pixar.BoxOffice;
SELECT M.title FROM Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS BO
ON BO.movie_id = M.id
WHERE BO.international_sales > 500000000 AND M.length_minutes > 110;

SELECT M.title FROM Pixar.Movies AS M
WHERE M.id IN(
	SELECT movie_id FROM Pixar.BoxOffice
	WHERE international_sales > 500000000 AND length_minutes > 110
);
-- Exercício 12: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem o título dos filmes que 
-- arrecadaram 500 milhões ou mais, e que possuem duração maior que 110 minutos.


