/**
 * Set attr directly
 *
 */
class Employee {
    fullName: string
}

let employee = new Employee()

employee.fullName = 'Bob'

if (employee.fullName) {
    console.log(employee.fullName)
}

/**
 * Use getter and setter, have more control over the object
 *
 * $ tsc -t es5 accessor.ts
 */
const fullNameMaxLength = 10

class EmployeeWithAccessor {
    private _fullName: string

    get fullName(): string {
        return this._fullName
    }

    // Do more thing
    set fullName(newName: string) {
        if (newName && newName.length > fullNameMaxLength) {
            throw new Error('fullName over the max length of ' + fullNameMaxLength)
        }

        this._fullName = newName
    }
}

let employeeWithAccessor = new EmployeeWithAccessor()

employeeWithAccessor.fullName = "Bob Smith Sir"

if (employeeWithAccessor.fullName) {
    console.log(employeeWithAccessor.fullName)
}


