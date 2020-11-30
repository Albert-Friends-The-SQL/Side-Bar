DROP DATABASE IF EXISTS Sizes;

CREATE DATABASE Sizes;

USE Sizes;

CREATE TABLE Shoes (
  id int NOT NULL AUTO_INCREMENT,
  color varchar(255) NOT NULL,
  size varchar(255) NOT NULL,
  price int NOT NULL,
  quantity int NOT NULL,
  name varchar(255) NOT NULL,
  PRIMARY KEY(ID)
);