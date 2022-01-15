const inquirer = require("inquirer");
const fs = require('fs');
const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const { type } = require("os");

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

        .then((employeeData) => {

            getType(employeeData)

        });

     

}

function getType(employeeData) {

    inquirer
        .prompt([
            {
                message: 'Enter employees role.',
                type: 'list',
                name: 'role',
                choices: ['Manager', 'Engineer', 'Intern'],

            }
        ])

        .then((data) => {

            if (data.role === 'Manager') {
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
                            
                            newEmployee = new Manager(employeeData.name, employeeData.id, employeeData.email, data.officeNum)
                            employees.push(newEmployee)
                            console.log(employees)
                            init()
                
                        })

                } getOffice()
            }
            else if (data.role === 'Engineer') {
                function getUsername() {
                    inquirer
                        .prompt([
                            {
                                type: 'input',
                                name: 'github',
                                message: 'Enter github Username.',
                            }
                        ]).then((data) => {

                            newEmployee = new Engineer(employeeData.name, employeeData.id, employeeData.email, data.github)
                            employees.push(newEmployee)
                            console.log(employees)
                            init()

                        })
                }
                getUsername()

            } else if (data.role === 'Intern') {
                function getEducation() {
                    inquirer
                        .prompt([
                            {
                                type: 'input',
                                name: 'school',
                                message: 'Enter school name.',
                            }
                        ]).then((data) => {

                            newEmployee = new Intern(employeeData.name, employeeData.id, employeeData.email, data.school)
                            employees.push(newEmployee)
                            console.log(employees)
                            init()

                        })
                } getEducation()

            } 

        })
}

function init(){

    inquirer
        .prompt([
            {
                message: 'Please make a selection.',
                type: 'list',
                name: 'choice',
                choices: ['Create', 'Finish'],

            }
        ])

     .then((data) => {

        
        if (data.choice === 'Create'){
            getEmployee()
        }else {

            console.log(employees)
        }


     })
   
}

init()