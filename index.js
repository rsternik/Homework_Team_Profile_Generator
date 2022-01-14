const inquirer = require("inquirer");
const fs = require('fs');
const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const { type } = require("os");

let newEmployee
let employeeRole
let employees = []




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

            if (employeeRole === 'Manager'){
                newEmployee = new Manager(employeeRole, data.name, data.id, data.email, Manager.officeNumber)
            console.log(newEmployee)
            getRole()
            }
            else if (employeeRole === 'Engineer'){
                newEmployee = new Engineer(employeeRole, data.name, data.id, data.email, Engineer.github)
            console.log(newEmployee)
            getRole()
            }

            else if (employeeRole === 'Intern'){newEmployee = new Intern(employeeRole, data.name, data.id, data.email, Intern.school)
            console.log(newEmployee)
            getRole()
        }

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
                            Manager.officeNumber = data.officeNum
                            getEmployee()
                        })

                } getOffice()
            }
            else if (employeeRole === 'Engineer') {
                function getGithub() {
                    inquirer
                    .prompt([
                        {
                        type: 'input',
                        name:'gitHub',
                        message: 'Enter github Url.',
                    }
                ]).then((data) =>{

                    Engineer.github = data.gitHub
                    getEmployee()

                })
                }
                getGithub()
                
            }else if (employeeRole === 'Intern') {
                function getSchool() {
                    inquirer
                    .prompt([
                        {
                        type: 'input',
                        name:'school',
                        message: 'Enter school name.',
                    }
                ]).then((data) =>{

                    Intern.school = data.school
                    getEmployee()

                })
                }getSchool()
                
            }else if (employeeRole === 'Finish') {
                console.log()
            }

        })
}

getRole()