DROP DATABASE IF EXISTS hmu73ykpml5lss96;
-- Create & Use Database --
CREATE DATABASE hmu73ykpml5lss96;
USE hmu73ykpml5lss96;

-- Create Table --
CREATE TABLE burgers
(
	id INT NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);