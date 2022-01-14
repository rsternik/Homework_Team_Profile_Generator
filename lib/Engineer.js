const Employee = require("./Employee.js");

class Engineer extends Employee {

    constructor(role, name, id, email, github) {
        super(role,name,id,email)
        this.role = role;
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
        
    }

    getRole(Engineer){
        console.log(this)
    }

}

module.exports = Engineer