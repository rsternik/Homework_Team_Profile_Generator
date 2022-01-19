class Employee {

    constructor(name, id, email) {

        this.name = name;
        this.id = id;
        this.email = email;
        
    }

    getName() {
        console.log(this.name);
        return this.name;
    }
    getId() {
        console.log(this.id);
        return this.id;
    }
    getEmail(){
        return this.email;
    }

    getRole() {
        console.log(this);
        return "Employee";
    }
}

module.exports = Employee
  