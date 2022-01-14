const Employee = require("./Employee.js");

class Intern extends Employee {


    constructor(role, name, id, email, school) {
        super(role,name,id,email)
        this.role = role;
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
        
    }

        
    getRole(Intern){
        console.log(this)
    }

}

module.exports = Intern