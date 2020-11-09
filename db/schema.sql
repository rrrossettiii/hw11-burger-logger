-- Create & Use Database --
CREATE DATABASE IF NOT EXISTS burger_db;
USE burger_db;

-- Create Table --
CREATE TABLE burgers
(
	id int AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

-- View Table --
SELECT * FROM burgers;