// Jest
const { TestWatcher } = require("jest")
// Required Classes
const Employee = require("../lib/Employee.js")

test("testing this", () => {
    
    // Relevant class values for testing
    let name = "Bobby"
    let id = "1"
    let email = "bobby@bobby.com"

    const employee = new Employee(name,id,email);
    // Expected Results
    expect(employee.name).toBe("Bobby");
    expect(employee.id).toBe("1");
    expect(employee.email).toBe("bobby@bobby.com");
    expect(employee.getName()).toBe("Bobby");
    expect(employee.getRole()).toBe("Employee");


})
