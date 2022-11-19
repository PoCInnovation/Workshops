CREATE DATABASE IF NOT EXISTS `flask-workshop-poc`;

USE `flask-workshop-poc`;

CREATE TABLE IF NOT EXISTS `user` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `email` varchar(250) UNIQUE NOT NULL,
    `password` varchar(250) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS `todo` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `user_id` int,
    `content` varchar(250) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES user(id)
);
