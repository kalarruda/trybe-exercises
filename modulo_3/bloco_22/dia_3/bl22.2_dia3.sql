SELECT * FROM sakila.actor;
-- para criar um index em first_name na tabela actor
CREATE INDEX index_first_name ON sakila.actor(first_name);

-- para deletar o index que foi criado na tabela actor
DROP INDEX index_first_name ON sakila.actor;

-- para testar a velocidade de pesquisa do index
SELECT * FROM sakila.actor WHERE first_name='RITA';

-- para criar um FULLTEXT index na tabela address
-- para CRIAR UM FULLTEXT INDEX E ACHAR O TEXT MAIS RÁPIDO
CREATE FULLTEXT INDEX index_address ON sakila.address(address);

-- COMO USAR A BUSCA DO FULLTEXT INDEX
SELECT * FROM sakila.address WHERE MATCH(address) AGAINST('drive');

SELECT * FROM sakila.address WHERE address LIKE '%drive%'; 

DROP INDEX index_address ON sakila.address;

SHOW INDEX  FROM sakila.actor;

CREATE UNIQUE INDEX unique_name_index ON sakila.language(name);

SELECT * FROM sakila.language WHERE name='Mandarin';

DROP INDEX unique_name_index ON sakila.language;
