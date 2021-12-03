class Employee {

    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        console.log(this.name);
        return this;
    }
    getId() {
        console.log(this.id);
        return this;
    }
    getRole() {
        console.log(this);
        return this;
    }



}
