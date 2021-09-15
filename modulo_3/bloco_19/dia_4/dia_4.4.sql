SELECT * FROM Pixar.Movies;

INSERT INTO Pixar.Movies (title, director, year, length_minutes)
VALUES 
('Monstros SA', 'Pete Docter', 2001, 92),
('Procurando Nemo', 'John Lasseter', 2003, 107),
('Os Incríveis', 'Brad Bird', 2004, 116),
('WALL-E', 'Pete Docter', 2008, 104);
-- Exercício 1 : Insira as produções da Pixar abaixo na tabela Movies :
-- Monstros SA, de Pete Docter, lançado em 2001, com 92 minutos de duração.
-- Procurando Nemo, de John Lasseter, lançado em 2003, com 107 minutos de duração.
-- Os Incríveis, de Brad Bird, lançado em 2004, com 116 minutos de duração.
-- WALL-E, de Pete Docter, lançada em 2008, com 104 minutos de duração.

INSERT INTO Pixar.BoxOffice (movie_id, rating, domestic_sales, international_sales)
VALUES (9, 6.8, 450000000, 3700000000);
--  Procurando Nemo foi aclamado pela crítica! Foi classificado em 6.8, fez 450 milhões 
--  no mercado interno e 370 milhões no mercado internacional. Adicione as informações à tabela BoxOffice .

UPDATE Pixar.Movies
SET director='Andrew Staton'
WHERE id=9;
-- Exercício 3 : O diretor do filme "Procurando Nemo" está incorreto, na verdade ele foi dirigido por Andrew Staton. Corrija esse dado utilizando o UPDATE .

SELECT * FROM Pixar.Movies;
UPDATE Pixar.Movies
SET title='Ratatouille'
WHERE id=3;
-- Exercício 4 : O título do filme "Ratatouille" esta escrito de forma incorreta na tabela Movies , além disso, o filme foi lançado em 2007 e não em 2010. 
-- Corrija esses dados utilizando o UPDATE .

SELECT * FROM Pixar.BoxOffice;
INSERT INTO Pixar.BoxOffice
(movie_id, rating, domestic_sales, international_sales)
VALUES
(8, 8.5, 30000000, 25000000),
(10, 7.4, 46000000, 51000000),
(11, 9.9, 29000000, 28000000);

UPDATE Pixar.BoxOffice
SET domestic_sales=300000000, international_sales=250000000
WHERE movie_id=8;

UPDATE Pixar.BoxOffice
SET domestic_sales=290000000, international_sales=280000000
WHERE movie_id=11;

UPDATE Pixar.BoxOffice
SET domestic_sales=460000000, international_sales=510000000
WHERE movie_id=10;

-- Exercício 5 : Insira as novas classificações abaixo na tabela BoxOffice , lembre-se que a coluna movie_id é uma foreign key 
-- referente a coluna id da tabela Movies :
-- Monsters SA, classificado em 8.5, lucrou 300 milhões no mercado interno e 250 milhões no mercado internacional. 8
-- Os Incríveis, classificado em 7.4, lucrou 460 milhões no mercado interno e 510 milhões no mercado internacional. 10
-- WALL-E, classificado em 9.9, lucrou 290 milhões no mercado interno e 280 milhões no mercado internacional. 11

DELETE FROM Pixar.BoxOffice
WHERE movie_id=11;

DELETE FROM Pixar.Movies
WHERE id=11;
-- Exercício 6 : Exclua da tabela Movies o filme "WALL-E".

SELECT * FROM Pixar.Movies WHERE director='Andrew Staton';
DELETE FROM Pixar.BoxOffice
WHERE movie_id IN (2, 9);

SET SQL_SAFE_UPDATES=0;
DELETE FROM Pixar.Movies
WHERE director='Andrew Staton';
-- Exercício 7 : Exclua da tabela Movies todos os filmes dirigidos por "Andrew Staton".

