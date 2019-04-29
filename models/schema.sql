DROP DATABASE IF EXISTS storytimedb;
CREATE DATABASE storytimedb;

USE storytimedb;

CREATE TABLE stories (
	id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    title VARCHAR(100),
    genre VARCHAR(100)
);