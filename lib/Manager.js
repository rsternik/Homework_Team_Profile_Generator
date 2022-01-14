const Employee = require("./Employee.js");

class Manager extends Employee {

    constructor(role, name, id, email, officeNumber) {
        super(role,name,id,email)
        this.role = role;
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
        
    }

    getRole(Manager){
        console.log(this)
    }

}

module.exports = Manager