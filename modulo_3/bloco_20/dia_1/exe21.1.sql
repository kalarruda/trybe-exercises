SELECT * FROM hr.employees;
SELECT MAX(SALARY) FROM hr.employees; 
-- 1. Escreva uma query que exiba o maior salário da tabela.

SELECT MAX(SALARY) - MIN(SALARY) FROM hr.employees;
-- 2. Escreva uma query que exiba a diferença entre o maior e o menor salário.

SELECT AVG(SALARY) AS MEDIA_SALARIAL, JOB_ID 
FROM hr.employees 
GROUP BY JOB_ID 
ORDER BY MEDIA_SALARIAL DESC;
-- 3. Escreva uma query que exiba a média salarial de cada JOB_ID , ordenando pela média salarial em ordem decrescente.

SELECT SUM(SALARY) AS TOTAL_SALARY FROM hr.employees;
-- 4. Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.

SELECT ROUND(MAX(SALARY),2),
	ROUND(MIN(SALARY),2),
	ROUND(SUM(SALARY),2),
	ROUND(AVG(SALARY),2)
FROM hr.employees;
-- 5. Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e
-- a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.

SELECT COUNT(EMPLOYEE_ID) AS QTD_FUNCIONARIOS, JOB_ID
FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID='IT_PROG';
-- 6. Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras ( IT_PROG ).

SELECT SUM(SALARY), JOB_ID
FROM hr.employees
GROUP BY JOB_ID;
-- 7. Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão ( JOB_ID ).

SELECT * FROM hr.employees;
SELECT SUM(SALARY), JOB_ID
FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID='IT_PROG';
-- 8. Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para cobrir
-- a folha de pagamento das pessoas programadoras ( IT_PROG ).

SELECT ROUND(AVG(SALARY)) AS TOTAL_SALARY, JOB_ID
FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID <> 'IT_PROG'
ORDER BY TOTAL_SALARY DESC;
-- 9. Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras ( IT_PROG ).

SELECt * FROM hr.employees;
SELECT ROUND(AVG(SALARY)) AS MEDIA_SALARY, COUNT(JOB_ID) AS TOTAL_EMPLOYEES, DEPARTMENT_ID
FROM hr.employees
GROUP BY DEPARTMENT_ID
HAVING TOTAL_EMPLOYEES > 10;
-- 10. Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo department_id .

SELECT REPLACE(PHONE_NUMBER, 515, 777) FROM hr.employees;

UPDATE hr.employees
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%';
-- 11. Escreva uma query que atualize a coluna PHONE_NUMBER , de modo que todos os telefones iniciados por 515 agora devem iniciar com 777 .

SELECT first_name FROM hr.employees WHERE first_name LIKE '________%';
SELECT first_name FROM hr.employees WHERE LENGTH(first_name) >=8;
-- 12. Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.

SELECT * FROM hr.employees;
SELECT EMPLOYEE_ID AS 'ID_FUNCIONARIO', first_name AS 'NOME', YEAR(HIRE_DATE) AS 'DATA CONTRATAÇÃO' FROM hr.employees;
-- 13. Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e ano no qual foi contratado (exiba somente o ano).

SELECT employee_id as 'id_funcionario', first_name as 'nome', DAY(hire_date) as 'dia de contratacao' from hr.employees;
-- 14. Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e dia do mês no qual foi contratado (exiba somente o dia).

SELECT employee_id as 'id_funcionario', first_name as 'nome', MONTH(hire_date) as 'dia de contratacao' from hr.employees;
-- 15. Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e mês no qual foi contratado (exiba somente o mês).

SELECT UCASE(first_name) as 'nome' FROM hr.employees;
-- 16. Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.

SELECT first_name, last_name, hire_date as 'ano' FROM hr.employees WHERE Year(hire_date)=1987;
-- 17: Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987.
select * from hr.employees;

SELECT first_name, last_name, DATEDIFF(CURRENT_DATE(), hire_date) FROM hr.employees;
-- 18: Escreva uma query que exiba as seguintes informações de cada funcionário: nome , sobrenome , tempo que trabalha na empresa (em dias) .


