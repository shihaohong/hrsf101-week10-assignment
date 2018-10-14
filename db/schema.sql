/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

DROP DATABASE IF EXISTS contact_list;

CREATE DATABASE contact_list;

USE contact_list; 

CREATE TABLE IF NOT EXISTS contacts (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
firstName VARCHAR(240),
lastName VARCHAR(240),
email VARCHAR(240),
phone BIGINT, 
address VARCHAR(240)
); 

INSERT INTO contacts (firstName, lastName, email, phone, address) VALUES ('John', 'Appleseed', 'john@appleseed.com', 1234567890, '944 Market St.');
INSERT INTO contacts (firstName, lastName, email, phone, address) VALUES ('Jane', 'Doe', 'jane@doe.org', 9807654321, '44 Tehama St.');