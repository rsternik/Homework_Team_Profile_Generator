// Required NPM software
const inquirer = require("inquirer");
const fs = require('fs');
const { type } = require("os");

// Required Classes
const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

//HTML Generation Template 
const pageTemplate = require("./template.js")

let employees = []

// Gather Standard employee information
function getEmployee() {

    // Questions
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
        // Output 
        .then((employeeData) => {
            // Run getType function with employeeData included to determine role.
            getType(employeeData)

        });



}
// Gather Employee Role then output info collection to employees array
function getType(employeeData) {

    // Questions, after information is collected for each choice each function will call getEmployee() function
    inquirer
        .prompt([
            {
                message: 'Enter employees role.',
                type: 'list',
                name: 'role',
                choices: ['Manager', 'Engineer', 'Intern'],

            }
        ])

        // Condition to check which role was selected 
        .then((data) => {
            // Manager Choice
            if (data.role === 'Manager') {
                // Queries user for office number
                function getOffice() {

                    inquirer
                        .prompt([
                            {
                                type: 'input',
                                name: 'officeNum',
                                message: 'Enter office number.',

                            }
                        ])
                        // Combine all collected user input and push the newEmployee into the employees array
                        .then((data) => {

                            newEmployee = new Manager(employeeData.name, employeeData.id, employeeData.email, data.officeNum)
                            employees.push(newEmployee)
                            console.log(employees)
                            init()

                        })

                } getOffice()
            }
            // Engineer Choice
            else if (data.role === 'Engineer') {
                // Queries user for guthub username
                function getUsername() {
                    inquirer
                        .prompt([
                            {
                                type: 'input',
                                name: 'github',
                                message: 'Enter github Username.',
                            }
                        ])
                        // Combine all collected user input and push the newEmployee into the employees array
                        .then((data) => {

                            newEmployee = new Engineer(employeeData.name, employeeData.id, employeeData.email, data.github)
                            employees.push(newEmployee)
                            console.log(employees)
                            init()

                        })
                }
                getUsername()

            }
            // Intern Choice
            else if (data.role === 'Intern') {
                // Queries user for school name
                function getEducation() {
                    inquirer
                        .prompt([
                            {
                                type: 'input',
                                name: 'school',
                                message: 'Enter school name.',
                            }
                        ])
                        // Combine all collected user input and push the newEmployee into the employees array
                        .then((data) => {

                            newEmployee = new Intern(employeeData.name, employeeData.id, employeeData.email, data.school)
                            employees.push(newEmployee)
                            console.log(employees)
                            init()

                        })
                } getEducation()

            }

        })
}
// Choices to create employees or finish and generate employee html file. 
function init() {
    // Questions
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

            // Runs getEmployee Function
            if (data.choice === 'Create') {
                getEmployee()
            } 
            // Writes teamGenerated.html using pageTemplate passing data from employees array
            else {


                fs.writeFileSync("teamGenerated.html", pageTemplate(employees))


            }


        })

}

init()

