SELECT SQRT(16);
-- raiz quadrada

SELECT POW(2,4);
-- potencia de 2 à quarta

SELECT RAND();
-- números aleatórios de 0.0 ate 1.0

SELECT ROUND(RAND() * 10);
-- números aleatórios entre 0 e 10

SELECT ROUND(15 + RAND()*5); -- nesse caso ele é no mínimo 15 e soma com o valor aleatório de "RAND() * 5" que é entre 0 e 5
-- Monte uma query que gere um valor entre 15 e 20 .

SELECT ROUND(15.7515971, 5);
-- Monte uma query que exiba o valor arredondado de 15.7515971 com uma precisão de 5 casas decimais.

SELECT FLOOR(39.494);
-- Estamos com uma média de 39.494 de vendas de camisas por mês. Qual é o valor aproximado para baixo dessa média?

SELECT CEIL(85.234);
-- Temos uma taxa de inscrição de 85.234% no curso de fotografia para iniciantes. Qual é o valor aproximado para cima dessa média?
