CREATE DATABASE IF NOT EXISTS users_crud;

USE users_crud;

CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(30) NOT NULL,
	last_name VARCHAR(30) NOT NULL,
	email VARCHAR(30) NOT NULL,
	password VARCHAR(100) NOT NULL,
	PRIMARY KEY(id)
);

INSERT INTO users (first_name, last_name, email, password)
VALUES
	('Jhon', 'Travolta', 'jhon@jhon.com', 123456);