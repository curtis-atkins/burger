### Schema
DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers 
(
	id INTEGER NOT NULL auto_increment,
	burger_name VARCHAR(100) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	daytime TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);