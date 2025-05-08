CREATE DATABASE IF VOT EXISTS MyDataBase;

USE MyDataBase;

CREATE TABLE IF NOT EXISRS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    UserName VARCHAR(50) NOT NULL,
    Password VARCHAR(100) NOT NULL
);

INSERT INTO users (UserName, Password) VALUES ('testuser', 'testpasswoed');