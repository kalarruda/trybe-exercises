USE sakila;
DELIMITER $$ 
CREATE PROCEDURE ShowAllActors()
BEGIN
	SELECT * FROM sakila.actor;
END $$
DELIMITER ;

CALL ShowAllActors;
-- ================================

DELIMITER $$ 
CREATE PROCEDURE
	periodoDoDia(IN hora DATETIME)
    BEGIN 
		SET @horario = TIME(hora);
        SELECT 
        (CASE
			WHEN @horario BETWEEN '00:00:00' AND '05:59:59' THEN 'Madrugada'
            WHEN @horario BETWEEN '06:00:00' AND '11:59:59' THEN 'Manhã'
            WHEN @horario BETWEEN '12:00:00' AND '17:59:59' THEN 'Tarde'
            ELSE 'Noite'
		END) AS 'Periodo_do_dia';
	END
    $$    
	DELIMITER ;
    
    CALL periodoDoDia('2021-05-10 23:00:00');
    
    -- =====================================
DROP PROCEDURE IF EXISTS ActorsName;
USE sakila;

DELIMITER $$ 
CREATE PROCEDURE ActorsName(IN syllable VARCHAR(100))

BEGIN
	SELECT * 
    FROM sakila.actor
    WHERE first_name LIKE CONCAT('%', syllable, '%');
END $$
DELIMITER ; 

CALL ActorsName('lope');

DROP PROCEDURE IF EXISTS showAverageRental;

DELIMITER $$
CREATE PROCEDURE showAverageRental(IN film_name VARCHAR(300), OUT media_aluguel DOUBLE)
BEGIN 
	SELECT AVG(rental_duration) INTO media_aluguel FROM sakila.film
	WHERE film_name LIKE CONCAT(title);
END $$
DELIMITER ;

CALL showAverageRental('ACE GOLDFINGER', @media_de_dias);
SELECT @media_de_dias;

DELIMITER $$
CREATE PROCEDURE NameGenerator(INOUT film_name VARCHAR(300))
BEGIN
	SELECT CONCAT('O FILME ', film_name, ' É O MELHOR FILME DO ANO')
    INTO film_name;
END $$
DELIMITER ;

SELECT 'VELOZES E MORTOS' INTO @filme_titulo;
CALL NameGenerator(@filme_titulo);
SELECT @filme_titulo;





    
    

