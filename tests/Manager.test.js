const e = require("express")
const { TestWatcher } = require("jest")
const Employee = require("../lib/Employee.js")
const Manager = require("../lib/Manager.js")

test("testing this", () => {

    let name = "Bobby"
    let id = "1"
    let email = "bobby@bobby.com"
    let officeNumber = "1"

    const employee = new Manager(name,id,email,officeNumber);
    expect(employee.name).toBe("Bobby");
    expect(employee.id).toBe("1");
    expect(employee.email).toBe("bobby@bobby.com");
    expect(employee.getName()).toBe("Bobby");
    expect(employee.getOfficeNumber()).toBe("1");
    expect(employee.getRole()).toBe("Manager");



})