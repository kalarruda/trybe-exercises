SELECT rental_duration - rental_rate FROM sakila.film LIMIT 10;

SELECT 10 MOD 2;

SELECT 10 MOD 4;
SELECT 10 / 4;

SELECT IF(15 MOD 2=0, 'PAR', 'ÍMPAR') AS 'PAR OU IMPAR'; 
-- Monte uma query usando o MOD juntamente com o IF para descobrir se o valor 15 é par ou ímpar. 
-- Chame essa coluna de 'Par ou Ímpar' , onde ela pode dizer 'Par' ou 'Ímpar'.

SELECT 220 DIV 12;
-- Temos uma sala de cinema que comporta 220 pessoas. Quantos grupos completos de 12 pessoas podemos levar ao cinema sem que ninguém fique de fora?

SELECT 220 MOD 12;
-- Utilizando o resultado anterior, responda à seguinte pergunta: temos lugares sobrando? Se sim, quantos?