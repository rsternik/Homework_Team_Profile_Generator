const e = require("express")
const { TestWatcher } = require("jest")
const Employee = require("../lib/Employee.js")
const Engineer = require("../lib/Engineer.js")

test("testing this", () => {

    let name = "Bobby"
    let id = "1"
    let email = "bobby@bobby.com"
    let github = "rsternik"

    const employee = new Engineer(name,id,email,github);
    expect(employee.name).toBe("Bobby");
    expect(employee.id).toBe("1");
    expect(employee.email).toBe("bobby@bobby.com");
    expect(employee.getName()).toBe("Bobby");
    expect(employee.getGithub()).toBe("rsternik");
    expect(employee.getRole()).toBe("Engineer");



})