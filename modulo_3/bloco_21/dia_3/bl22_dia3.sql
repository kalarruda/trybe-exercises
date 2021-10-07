CREATE VIEW top_10_customers AS
    SELECT C.customer_id, C.first_name, SUM(P.amount) AS total_amount_spent
    FROM sakila.payment AS P
    INNER JOIN sakila.customer AS C ON P.customer_id = C.customer_id
    GROUP BY customer_id
    ORDER BY total_amount_spent DESC
    LIMIT 10;
    
    SELECT * FROM top_10_customers;