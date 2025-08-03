DROP TABLE IF EXISTS faculty;
DROP TABLE IF EXISTS departments;

CREATE TABLE departments (
  id serial PRIMARY KEY,
  name text not null,
  description text not null,
  contactInfo text not null
);

CREATE TABLE faculty (
  id serial PRIMARY KEY,
  name text not null,
  description text not null,
  contactInfo text not null,
  department_id int not null REFERENCES departments(id) ON DELETE CASCADE
);

