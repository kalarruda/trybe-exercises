SELECT f.title, f.rating
FROM (
    SELECT *
    FROM sakila.film
    WHERE rating = 'R'
) AS f;

SELECT
    address,
    district,
    (
        SELECT city
        FROM sakila.city
        WHERE city.city_id = sakila.address.city_id
    ) AS cidade
FROM sakila.address;

-- =========================
SELECT city_id
    FROM sakila.city
    WHERE city in ('Sasebo', 'San Bernardino', 'Athenai', 'Myingyan');
    
SELECT address, district
FROM sakila.address;

SELECT address, district
FROM sakila.address 
	WHERE city_id IN
		(SELECT city_id FROM sakila.city 
			WHERE city IN('Sasebo', 'San Bernardino', 'Athenai', 'Myingyan'));
-- ===========================

SELECT first_name as nome,
	(
    SELECT address
    FROM sakila.address
    WHERE address_id = C.address_id
    ) AS endereco
FROM sakila.customer AS C;
-- achar o nome do cliente que tenham endereço com id igual à tabela de endereço
-- MESMA COISA COM INNER JOIN

SELECT c.first_name, ad.address
FROM sakila.customer c
INNER JOIN sakila.address ad ON c.address_id = ad.address_id;

-- MESMA COISA QUE FAZER O EXISTS ABAIXO =============================
SELECT B.id, B.Title FROM hotel.Books AS B
Inner JOIN hotel.Books_Lent AS HB
ON HB.book_id = B.id
WHERE HB.book_id = B.id
GROUP BY B.id;

SELECT id, Title FROM hotel.Books AS H
WHERE EXISTS (
	SELECT * FROM hotel.Books_Lent
    WHERE book_id = H.Id
    );
-- Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros que ainda não foram emprestados.

SELECT id, Title FROM hotel.Books AS H
WHERE EXISTS(
	SELECT * FROM hotel.Books_Lent
    WHERE book_id = H.id AND returned = 0 AND H.Title LIKE '%lost%'
);
-- Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros estão atualmente emprestados e que contêm a palavra "lost" no título.

SELECT `Name` FROM hotel.Customers AS C
WHERE EXISTS(
	SELECT * FROM hotel.CarSales
    WHERE CustomerID = C.CustomerId
);
-- Usando a tabela carsales e customers , exiba apenas o nome dos clientes que ainda não compraram um carro.

SELECT H.Name, C.Name
FROM hotel.Customers AS H
INNER JOIN 
hotel.Cars AS C
WHERE EXISTS(
	SELECT * FROM hotel.CarSales
    WHERE CarID = C.Id AND CustomerID = H.Customerid
);
-- Usando o comando EXISTS em conjunto com JOIN e as tabelas cars , customers e carsales , exiba o nome do cliente e 
-- o modelo do carro de todos os clientes que fizeram compras de carros.
    
    
    