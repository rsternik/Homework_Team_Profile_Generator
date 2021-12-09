const inquirer = require("inquirer");
const fs = require('fs');
const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const { type } = require("os");
let newEmployee
let newManager
let managers = []
let newEngineer
let employeeRole
let officeNumber


function getEmployee() {
    inquirer
        .prompt([

            {
                message: 'Enter employees full name.',
                type: 'input',
                name: 'name',

            },
            {
                message: 'Enter in the employee ID.',
                type: 'input',
                name: 'id',

            },
            {
                message: 'Enter in employee email address.',
                type: 'input',
                name: 'email',
            },

        ])

        .then((data) => {

            newEmployee = new Manager(employeeRole, data.name, data.id, data.email, officeLoc)
            console.log(newEmployee)

        });


}

function getRole() {

    inquirer
        .prompt([
            {
                message: 'Enter employees role.',
                type: 'list',
                name: 'role',
                choices: ['Manager', 'Engineer', 'Intern', 'Finish'],

            }
        ])

        .then((data) => {

            employeeRole = data.role

            if (employeeRole === 'Manager') {
                function getOffice() {
                    inquirer
                        .prompt([
                            {
                                type: 'input',
                                name: 'officeNum',
                                message: 'Enter office number.',

                            }
                        ])
                        .then((data) => {
                            officeNumber = data.officeNum
                            getEmployee()
                        })

                } getOffice()
            }
            else if (employeeRole === 'Engineer') {
                function getGithub() {
                    inquirer
                    .prompt([{
                        type: 'input',
                        name:'gitHub',
                        message: 'Enter github Url.',
                    }])
                }
                getGithub()
                console.log('Engineer!')
            } else if (employeeRole === 'Intern') {
                console.log('Intern!')
            } else if (employeeRole === 'Finish') {

            }

        })
}


getRole()