/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/
--  DROP DATABASE contacts;
 CREATE DATABASE IF NOT EXISTS contacts;
 USE contacts;

DROP TABLE IF EXISTS contactlist;

 CREATE TABLE contactlist (
   id INT AUTO_INCREMENT PRIMARY KEY,
   firstName VARCHAR(40) NOT NULL,
   lastName VARCHAR(40) NOT NULL,
   email VARCHAR(60) NOT NULL, 
   phone BIGINT NOT NULL,
   homeaddress VARCHAR(60) NOT NULL
 )
