const Employee = require("./Employee.js");

class Manager extends Employee {

    constructor(name, id, email, officeNumber) {
        super(name,id,email)
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
        
    }

    getRole(){
        console.log(this);
        return "Manager";
    }

}

module.exports = Manager