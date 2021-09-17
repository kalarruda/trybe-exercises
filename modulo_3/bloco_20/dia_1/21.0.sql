SELECT UCASE('Olá tudo bem?');

SELECT LCASE('OLÁ TUDO BEM?');

SELECT left('Olá tudo bem?', 5);

SELECT Right('Olá tudo bem?', 5);

SELECT REPLACE('Oi, eu sou uma string', 'string', 'cadeia de caracteres');

SELECT CHAR_LENGTH('Olá tudo bem?');

SELECT SUBSTRING('Olá tudo bem?', 5, 3);
-- a partir do index 5 ele mostra 3 letras

SELECT SUBSTRING('Olá tudo bem ou não? ', 5);
-- a partir do index 5 ele mostra tudo

SELECT UCASE(title) FROM sakila.film LIMIT 10;
SELECT LCASE(title) FROM sakila.film LIMIT 10;
SELECT REPLACE(title, 'ACADEMY', 'HAHAHAHAHAHAHA') FROM sakila.film LIMIT 10;

SELECT UCASE('trybe');
-- Faça uma query que exiba a palavra 'trybe' em CAIXA ALTA.

SELECT REPLACE('Você já ouviu falar do DuckDuckGo?','DuckDuckGo', 'Google');
-- Faça uma query que transforme a frase 'Você já ouviu falar do DuckDuckGo?' em 'Você já ouviu falar do Google?' .

SELECT LENGTH('Uma frase qualquer');
-- Utilizando uma query , encontre quantos caracteres temos em 'Uma frase qualquer' .

SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13, 10);
-- Extraia e retorne a palavra "JavaScript" da frase 'A linguagem JavaScript está entre as mais usadas' .

SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');
-- Por fim, padronize a string 'RUA NORTE 1500, SÃO PAULO, BRASIL' para que suas informações estejam todas em caixa baixa.
