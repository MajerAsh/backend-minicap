DROP TABLE IF EXISTS faculty;
DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL
);

CREATE TABLE departments (
  id serial PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  images TEXT NOT NULL,
  contactInfo TEXT NOT NULL
);

CREATE TABLE faculty (
  id serial PRIMARY KEY,
  name TEXT NOT NULL,
  bio TEXT NOT NULL,
  profileImage TEXT NOT NULL,
  contactInfo TEXT NOT NULL,
  department_id INTEGER REFERENCES departments(id) ON DELETE CASCADE
);
