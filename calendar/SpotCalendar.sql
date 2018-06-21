--Database for Calendar app


-- drops the current db
DROP DATABASE IF EXISTS SpotCalendar;

-- Creates the db and uses it
CREATE DATABASE SpotCalendar;
USE SpotCalendar;

CREATE TABLE event(
    id INT PRIMARY KEY AUTO_INCREMENT,
    month INT NOT NULL,
    day INT NOT NULL,
    title VARCHAR(100) NOT NULL,
    description VARCHAR(100) NOT NULL,
    startTime VARCHAR(100),
    endTime VARCHAR(100)
);
