-- PARA COPIAR AS COLUNAS DE UMA TABELA E CRIAR OUTRA 
CREATE TABLE actor_copy LIKE sakila.actor;

SHOW COLUMNS FROM sakila.actor_copy;

INSERT INTO sakila.actor_copy SELECT * FROM sakila.actor;

SELECT * FROM sakila.actor_copy;
SELECT * FROM sakila.actor;

SHOW COLUMNS FROM actor;
SHOW INDEX FROM actor;