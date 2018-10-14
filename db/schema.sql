/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

 create database contact_list;

 create table contacts 
 (
     firstName varchar(150), 
     lastName varchar(150), 
     email varchar(150), 
     phone int,
     address varchar(150)
 );

 insert into contacts values ('karin', 'hsu', 'this@gmail.com', 3000, 'san francisco');
 insert into contacts values ('elizabeth', 'hsu', 'is@gmail.com', 1992, 'new york');
 insert into contacts values ('la', 'femme', 'this@gmail.com', 1778, 'hawaii');
 insert into contacts values ('apples', 'oranges', 'this@gmail.com', 2000, 'jordan');
 insert into contacts values ('banana', 'grapes', 'this@gmail.com', 1800, 'buenos aires');