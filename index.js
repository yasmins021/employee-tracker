
 

//import packages
const mysql = require('mysql2');
const inquirer = require("inquirer");
const table = require("console.table");

// connect to db
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "work_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected as id " + connection.threadId + "\n");
    promptQuestions();
});

// use inquirer to prompt questions
function promptQuestions() {
    inquirer.prompt({
        message: "What would you like to do?",
        type: "list",
        choices: [
            "Add an employee",
            "Add a department",
            "Add a role",
            "Update employee role",
            "View all employees",
            "View all departments",
            "Quit"
        ],
        name: "choice",
    }).then(answers => {
        console.log(answers.choice);
        switch (answers.choice) {
            case "Add an employee":
                addEmployee()
                break;
            case "Add a department":
                addDepartment()
                break;
            case "Add a role":
                addRole()
                break;
            case "Update employee role":
                updateRole();
                break;
            case "View all employees":
                viewEmployees()
                break;
            case "View all departments":
                viewDepartments()
                break;
            default:
                connection.end()
                break;
        }
    })
}

// query add a new employee role
function addRole() {
    inquirer.prompt([
        {
            message: "Enter role title:",
            type: "input",
            name: "title"
        }, {
            message: "Enter role salary:",
            type: "number",
            name: "salary"
        }, {
            message: "Enter role's department ID:",
            type: "number",
            name: "department_id"
        }
    ]).then(function (response) {
        connection.query("INSERT INTO roles (title, salary, department_id) values (?, ?, ?)", [response.title, response.salary, response.department_id], function (err, data) {
            console.table(data);
        })
        promptQuestions();
    })

}

// query add a department
function addDepartment() {
    inquirer.prompt([{
        type: "input",
        name: "department",
        message: "What is the department that you want to add?"
    }, ]).then(function(res) {
        connection.query('INSERT INTO department (name) VALUES (?)', [res.department], function(err, data) {
            if (err) throw err;
            console.table("successfully inserted");
            promptQuestions();
        })
    })
}

// query add a new employee
function addEmployee() {
    inquirer.prompt([{
            type: "input",
            name: "firstName",
            message: "What is employee's first name?"
        },
        {
            type: "input",
            name: "lastName",
            message: "What is employee's last name?"
        },
        {
            type: "number",
            name: "roleId",
            message: "What is their role ID?"
        },
        {
            type: "number",
            name: "managerId",
            message: "What is employee's manager's ID?"
        }
    ]).then(function(res) {
        connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [res.firstName, res.lastName, res.roleId, res.managerId], function(err, data) {
            if (err) throw err;
            console.table("successfully inserted");
            promptQuestions();
        })
    })
}

// query update an employee role
function updateRole() {
    inquirer.prompt([
        {
            message: "Which employee would you like to update? (use first name only for now)",
            type: "input",
            name: "name"
        }, {
            message: "Enter the new role ID:",
            type: "number",
            name: "role_id"
        }
    ]).then(function (response) {
        connection.query("UPDATE employee SET role_id = ? WHERE first_name = ?", [response.role_id, response.name], function (err, data) {
            console.table(data);
        })
        promptQuestions();
    })

}

// print table of all employees
function viewEmployees() {
    connection.query("SELECT * FROM employee", function (err, data) {
        console.table(data);
        promptQuestions();
    })
}

// print all departments
function viewDepartments() {
    connection.query("SELECT * FROM department", function (err, data) {
        console.table(data);
        promptQuestions();
    })
}