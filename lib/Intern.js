class Intern extends Employee {

    constructor(school) {
        this.school = school;
    }

    getSchool(){
        console.log(this.school)
    }
    
    getRole(Intern){
        console.log(this)
    }

}