const Employee = require("./Employee.js");

class Intern extends Employee {

    constructor(name, id, email, school) {
        super(name,id,email)
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
        
    }

        
    getRole(){
        console.log(this);
        return 'Intern';
    }

    getSchool(){
        console.log(this.school);
        return this.school;
    }

}

module.exports = Intern