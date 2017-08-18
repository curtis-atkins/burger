DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
id INTEGER auto_increment,
burger_name VARCHAR(100) NOT NULL,
devoured BOOLEAN NOT NULL,
daytime TIMESTAMP NOT NULL,
PRIMARY KEY (id)
);