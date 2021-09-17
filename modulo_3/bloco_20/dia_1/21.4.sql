SELECT CURRENT_DATE();
-- data atual

SELECT NOW();
-- hora e data atuais

-- 30, ou seja, a primeira data é 30 dias depois da segunda
SELECT DATEDIFF('2020-01-31', '2020-01-01');

-- -01:00:00, ou seja, há 1 hora de diferença entre os horários
SELECT TIMEDIFF('08:30:10', '09:30:10');

-- -239:00:00, ou seja, há uma diferença de 239 horas entre as datas
SELECT TIMEDIFF('2021-08-11 08:30:10', '2021-08-01 09:30:10');

SELECT YEAR(CURRENT_DATE()); -- retorna o ano atual
SELECT HOUR(NOW()); -- retorna a hora atual

SELECT DATEDIFF('2030-01-20', CURRENT_DATE());
-- Monte uma query que exiba a diferença de dias entre '2030-01-20' e hoje.

SELECT TIMEDIFF('10:25:45', '11:00:00');
-- Monte uma query exiba a diferença de horas entre '10:25:45' e '11:00:00' .



