const e = require("express")
const { TestWatcher } = require("jest")
const Employee = require("../lib/Employee.js")

test("testing this", () => {

    let name = "Bobby"

    const employee = new Employee(name)
    expect(employee.name).toBe("Bobby")

})
test("testing this", () => {

    let name = "Bobby"

    const employee = new Employee(name)
    expect(employee.getName()).toBe("Bobby")

})