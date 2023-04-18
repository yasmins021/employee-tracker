
 

USE work_db;

INSERT INTO department (name)
VALUES ("Marketing");
INSERT INTO department (name)
VALUES ("Finance");
INSERT INTO department (name)
VALUES ("Tech");
INSERT INTO department (name)
VALUES ("HR");

INSERT INTO role (title, salary, department_id)
VALUES ("Marketing VP", 100000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Engineer", 120000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Financial Manager", 120000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Product Manager", 120000, 4);
INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 150000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Chris", "O", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Kelly", "C", 1, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Alex", "W", 4, 7);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jay", "B", 3, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("My", "Boss", 2, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jane", "Doe", 5, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("T", "J", 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1, 2);