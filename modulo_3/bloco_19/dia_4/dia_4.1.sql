SELECT * FROM sakila.staff;

INSERT INTO sakila.staff (staff_id, first_name, last_name, address_id, store_id, active, username, last_update)
VALUES (3,'José', 'Arruda',5, 3, 0, 'kal','2014-05-08 10:20:00');

INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, active, username) 
VALUES ('José', 'Arruda',4, 'joselito@hotmail.com',1, 0, 'seila');	
-- Insira um novo funcionário na tabela sakila.staff .
-- Para saber quais campos são obrigatórios, clique com o botão direito na tabela sakila.staff 
-- e selecione "Table Inspector". Clique na aba "columns" e verifique quais campos aceitam nulos 
-- para te guiar. Lembre-se de que valores que são gerados automaticamente não precisam ser inseridos manualmente.

INSERT INTO sakila.staff(first_name, last_name, address_id, store_id, username)
	VALUES
    ('Shirra', 'Guerreira', 3, 1, 'Trabuco'),
	('He-man','Maneco', 4, 2, 'Cabelim');
-- Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query .

INSERT INTO sakila.actor (first_name, last_name) 
	SELECT sakila.customer.first_name, last_name
    FROM sakila.customer
    WHERE sakila.customer.customer_id < 6;
-- Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor .

INSERT INTO sakila.category (name)
	VALUES 
    ('Porradaria'),
    ('Estranhos'),
    ('Carrinhos');
-- Cadastre três categorias de uma vez só na tabela sakila.category .

INSERT INTO sakila.store (store_id, manager_staff_id, address_id)
	VALUES (3, 3, 4);
-- Cadastre uma nova loja na tabela sakila.store .

UPDATE sakila.staff 
SET first_name = 'Juvenal', last_name='Ferreira' WHERE staff_id=4;

UPDATE sakila.actor
SET first_name='JOE' WHERE actor_id IN (1, 2 ,3);

SELECT * FROM sakila.actor;

UPDATE sakila.actor
SET first_name =(
CASE actor_id WHEN 1 THEN 'MININI' -- se actor_id=1 então first_name recebe 'JOE'
			  WHEN 2 THEN 'RABITO'
              WHEN 3 THEN 'MEME'
              ELSE first_name -- nos outros casos se mantém os nomes originais
              END
);

SELECT * FROM sakila.staff;

UPDATE sakila.staff
SET password='novaSenhadoUsuario'
WHERE active=1
ORDER BY last_name
LIMIT 2;
-- altera a senha de no máximo 2 pessoas que tenham ordem do nome inversa 
