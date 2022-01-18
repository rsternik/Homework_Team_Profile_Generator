const e = require("express")
const { TestWatcher } = require("jest")
const Employee = require("../lib/Employee.js")

test("testing this", () => {

    let name = "Bobby"
    let id = "1"
    let email = "bobby@bobby.com"

    const employee = new Employee(name,id,email);
    expect(employee.name).toBe("Bobby");
    expect(employee.id).toBe("1");
    expect(employee.email).toBe("bobby@bobby.com");
    expect(employee.getName()).toBe("Bobby");
    expect(employee.getRole()).toBe("Employee");


})
