
# Employee Management System
## Description
This is a command-line application that allows a user to manage employees, departments, and roles within a company. It accepts user input to view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee's role.

## Installation
To use this application, you will need to have Node.js and MySQL installed on your computer.

Clone the repository to your local machine.
Run npm install to install the necessary dependencies.
Set up the MySQL database by running the schema.sql and seeds.sql files in the db folder.
Update the connection object in index.js with your MySQL username and password.
Usage
To start the application, run the following command in your terminal:

sql
## Copy code
npm start
You will be presented with a menu of options to choose from. Select an option by typing the corresponding number and pressing Enter.

View all departments: Displays a formatted table showing all department names and IDs.

View all roles: Displays a formatted table showing all job titles, role IDs, departments, and salaries.

View all employees: Displays a formatted table showing all employee data, including IDs, first names, last names, job titles, departments, salaries, and managers.

Add a department: Prompts you to enter the name of a new department and adds it to the database.

Add a role: Prompts you to enter the name, salary, and department of a new role and adds it to the database.

Add an employee: Prompts you to enter the first name, last name, role, and manager of a new employee and adds them to the database.

Update an employee role: Prompts you to select an employee and enter their new role, and updates the employee's role in the database.

## Credits
This application was created by Yasmin Sanchez.

## License
This project is licensed under the MIT License.
