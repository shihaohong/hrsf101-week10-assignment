/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

 CREATE DATABASE IF NOT EXISTS contactlist;

 USE contactlist;

 DROP TABLE IF EXISTS contacts;

 CREATE TABLE contacts (
   firstName varchar(20),
   lastName varchar(20),
   email varchar(20),
   phone int(10),
   address varchar(50)
 );
