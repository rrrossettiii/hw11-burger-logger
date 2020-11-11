-- Burger Schema
-- =============:
DROP DATABASE IF EXISTS burger_db;
-- Create & Use Database --
CREATE DATABASE burger_db;
USE burger_db;

-- Create Table --
CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);