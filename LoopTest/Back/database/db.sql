create database CountryVoteDB

use CountryVoteDB

CREATE TABLE Users (
    Id int identity Primary Key,              
    name VarChar(30) NOT NULL,         
    Email VarChar(50) Unique NOT NULL,
    Country VarChar(30) NOT NULL,      
);

INSERT INTO Users(name, Email, Country) VALUES 
('John Doe', 'jhondoe@gmail.com', 'Italy'),
('Juan Pérez', 'juanperez@email.com', 'Argentina'),
('María García', 'mariagarcia@email.com', 'Spain'),
('Carlos López', 'carloslopez@email.com', 'Mexico'),
('Ana Martínez', 'anamartinez@email.com', 'Argentina'),
('Pedro Rodríguez', 'pedrorodriguez@email.com', 'Colombia'),
('Laura Sánchez', 'laurasanchez@email.com', 'Spain'),
('Miguel Torres', 'migueltorres@email.com', 'Argentina'),
('Isabel Ramírez', 'isabelramirez@email.com', 'Peru'),
('José Fernández', 'josefernandez@email.com', 'Colombia'),
('Carmen Ruiz', 'carmenruiz@email.com', 'Uruguay');