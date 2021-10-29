const Manager = require( "../lib/Manager" );
const Employee = require( "../lib/Employee" );

describe( "Manager", () => {
    const manager = new Manager();    
    describe( "Initialise", () => {
        test("Can set office number via constructor argument", () => {
            const phone = 99069906;
            const manager = new Manager("Mark", 1234, "mark@random_email.com", phone);
            expect( manager.officeNumber ).toBe( phone );
        });

        test('getRole() should return "Manager"', () => {
            const role = "Manager";
            const manager = new Manager( "Mark", 1234, "mark@random_email.com", 99069906 );
            expect(manager.getRole()).toBe( role );
        });

        test("Can get office number via getOffice()", () => {
            const phone = 99069906;
            const manager = new Manager("Mark", 1234, "mark@random_email.com", phone );
            expect( manager.getOfficeNumber() ).toBe( phone );
        });
    });
});