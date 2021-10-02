CREATE VIEW film_with_categories AS
SELECT
F.title AS 'titulo',
C.category_id AS 'id categoria',
C.name AS 'categoria'
FROM sakila.film_category AS FC
INNER JOIN sakila.film AS F ON FC.film_id = F.film_id
INNER JOIN sakila.category AS C ON C.category_id = FC.category_id;
SELECT * FROM film_with_categories;
-- Crie uma view chamada film_with_categories utilizando as tabelas category , film_category e film do banco de dados sakila . Essa view deve exibir o título do filme, o id da categoria e o nome da categoria, conforme a imagem abaixo. Os resultados devem ser ordenados pelo título do filme.

CREATE VIEW film_info AS
SELECT FA.actor_id AS 'id ator/atriz', CONCAT(first_name, ' ', last_name) AS 'atriz/ator', F.title AS 'filme'
FROM sakila.actor AS A
INNER JOIN sakila.film_actor AS FA ON A.actor_id = FA.actor_id
INNER JOIN sakila.film AS F ON F.film_id = FA.film_id
ORDER BY `atriz/ator`;
SELECT * FROM film_info;
-- Crie uma view chamada film_info utilizando as tabelas actor , film_actor e film do banco de dados sakila . Sua view deve exibir o actor_id , o nome completo do ator ou da atriz em uma coluna com o ALIAS actor e o título dos filmes. Os resultados devem ser ordenados pelos nomes de atores e atrizes. Use a imagem a seguir como referência.

CREATE VIEW address_info AS
SELECT A.address_id AS 'id endereco',
A.address AS 'endereco',
A.district AS 'distrito',
C.city_id AS 'id cidade',
C.city AS 'cidade'
FROM sakila.address AS A
INNER JOIN sakila.city AS C ON C.city_id = A.city_id
ORDER BY cidade;
SELECT * FROM address_info;
-- Crie uma view chamada address_info que faça uso das tabelas address e city do banco de dados sakila . Sua view deve exibir o address_id , o address , o district , o city_id e a city . Os resultados devem ser ordenados pelo nome das cidades. Use a imagem abaixo como referência

-- CREATE VIEW movies_language AS 

SELECT * FROM film;
SELECT * FROM language;

SELECT F.title AS 'titulo',
L.language_id AS 'id idioma',
L.name AS 'idioma'
FROM sakila.film AS F
INNER JOIN sakila.language AS L ON L.language_id = F.language_id;
-- Crie uma view chamada movies_languages , usando as tabelas film e language do banco de dados sakila . Sua view deve exibir o título do filme , o id do idioma e o idioma do filme , como na imagem a seguir.

