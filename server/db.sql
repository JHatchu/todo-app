CREATE DATABASE project2;

CREATE TABLE emp_details(
    eid SERIAL PRIMARY KEY,
    emp_name VARCHAR(255) NOT NULL,
    emp_id VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    gender VARCHAR(255) NOT NULL,
    qualification VARCHAR(255) NOT NULL 
    
);