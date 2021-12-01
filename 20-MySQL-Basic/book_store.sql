SHOW DATABASES;

CREATE DATABASE bookstore;

USE bookstore;

SHOW TABLES;

CREATE TABLE `books` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,  
    `author1` VARCHAR(100) NOT NULL ,  
    `author2` VARCHAR(100) , 
    `author3` VARCHAR(100) ,
    `title` VARCHAR(100) ,
    `description` VARCHAR(1000),
    `place_sell` CHAR(3) ,
    `stock` INT DEFAULT 0 ,
    `creation_date`	DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL
);

SELECT * FROM books;

ALTER TABLE books
	ADD price INT DEFAULT 0,
	ADD `status` ENUM('available', 'out of stock', 'limited'),
	DROP place_sell;

SELECT * FROM books;
    
INSERT INTO books VALUE
	(NULL, 'aku', 'ganteng', 'sekali', 'cara membuat kue', 
	'ini buku tentang kue', 10, DEFAULT, 10000, 'available'),
	(NULL, 'i', 'love', 'you', 'all about love', 
	'untuk orang orang bucin di luar sana', 3, DEFAULT, 69420, 'limited'),
	(NULL, 'ini', 'dummy', 'data', 'lorem ipsum', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 
	0, DEFAULT, 1500, 'out of stock');
    
SELECT * FROM books;

SELECT id AS ID, author1 AS A1, author2 AS A2, author3 AS A3 FROM books;

SELECT * FROM books 
	WHERE id = 2;

SELECT * FROM books 
	WHERE id = 2 AND status = 'limited';

SELECT * FROM books 
	WHERE id = 2 OR status = 'available';
    
SELECT * FROM books 
	WHERE NOT id = 2;
    
SELECT * FROM books 
	ORDER BY id;
    
SELECT * FROM books
	LIMIT 2;
    
UPDATE books
	SET author1 = 'me', price = 6969
    WHERE id = 1;
    
DELETE FROM books
	WHERE id=1;
