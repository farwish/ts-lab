/**
 * abstract method in abstract class must be implemented in derived classes.
 *
 */
abstract class Department {
    constructor(public name: string) {
    }

    printName(): void {
        console.log('department name is ' + this.name)
    }

    abstract printMeeting(): void
}

class AccountDepartment extends Department {
    constructor() {
        super('account department')
    }

    printMeeting(): void {
        console.log('the account department meeting') 
    }

    printAnother(): void {
        console.log('another') 
    }
}

// Declare a variable of Department instance type
let department: Department

department = new AccountDepartment()

department.printName()
department.printMeeting()

// error: method doesn't exist on declared abstract type
department.printAnother()
