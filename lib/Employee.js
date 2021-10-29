
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }   

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee"; 
    }

    printInfo() {
        console.log(`\nEmployee name = ${this.name} has ID: ${this.id}`);
        console.log(`${this.name} currently has the role ${this.getRole()}\n`);
    }
}

module.exports = Employee; 