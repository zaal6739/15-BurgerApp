drop database burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

drop table if exists burgers;

CREATE TABLE burgers
(
id int NOT NULL auto_increment,
burger_name varchar (255) NOT NULL,
devoured BOOL,
PRIMARY KEY (id)
);