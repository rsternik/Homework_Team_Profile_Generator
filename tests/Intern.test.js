// Jest
const { TestWatcher } = require("jest")
// Required Classes
const Employee = require("../lib/Employee.js")
const Intern = require("../lib/Intern.js")

test("testing this", () => {
    // Relevant class values for testing
    let name = "Bobby"
    let id = "1"
    let email = "bobby@bobby.com"
    let school = "Expensive University"

    const employee = new Intern(name,id,email,school);
    // Expected Results
    expect(employee.name).toBe("Bobby");
    expect(employee.id).toBe("1");
    expect(employee.email).toBe("bobby@bobby.com");
    expect(employee.getName()).toBe("Bobby");
    expect(employee.getSchool()).toBe("Expensive University");
    expect(employee.getRole()).toBe("Intern");



})