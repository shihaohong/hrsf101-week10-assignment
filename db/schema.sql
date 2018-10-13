/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/
DROP DATABASE IF EXISTS contacts;
CREATE DATABASE IF NOT EXISTS contacts;

USE contacts;

CREATE TABLE IF NOT EXISTS contact (
  contactID INT AUTO_INCREMENT PRIMARY KEY,
  firstName VARCHAR(40) NOT NULL,
  lastName VARCHAR(40) NOT NULL,
  email VARCHAR(40) NOT NULL,
  phone VARCHAR(15) NOT NULL,
  contactAddress VARCHAR(40) NOT NULL
);