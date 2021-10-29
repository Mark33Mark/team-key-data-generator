/* Notes:
    Jest documents runs test using the 'test' keyword, not 'it'.  Jest will work
    with 'it' as per our unit activities.  I've decided to adopt the Jest keyword 
    'test'.
    https://jestjs.io/docs/using-matchers
*/

const Employee = require( "../lib/Employee" );
// const employee = new Employee("Mark", 12345678, "mark@random_email.com")


describe( "Employee", () => {

    const employee = new Employee();
    
    describe( "Initialise", () => {
        test( "Can set name via constructor arguments", () => {
            // Arrange
            const name = "Mark";
            // Act
            const employee = new Employee( name );
            // Assert
            expect( employee.name ).toBe( name );
        });

        test( "Can set id via constructor argument", () => {
            // Arrange
            const id = 1234;
            // Act
            const employee = new Employee( "Mark", id );
            // Assert
            expect( employee.id ).toBe ( id );
        });

        test( "Can set email via constructor argument", () => {
            // Arrange
            const email = "mark@random_email.com";
            // Act
            const employee = new Employee("Mark", 1234, email);
            // Assert
            expect( employee.email ).toBe( email );
        });

        test( "Can get name via getName()", () => {
            // Arrange
            const name = "Mark";
            // Act
            const employee = new Employee( name );
            // Assert
            expect( employee.getName() ).toBe( name );
        });

        test( "Can get id via getId()", () => {
            // Arrange
            const id = 1234;
            // Act
            const employee = new Employee( "Mark", id );
            // Assert
            expect( employee.getId() ).toBe( id );
        });

        test( "The method getEmail() returns email address.", () => {
            // Arrange
            const email = "mark@random_email.com";
            // Act
            const employee = new Employee( "Mark", 1234, email) ;
            // Assert
            expect( employee.getEmail() ).toBe( email );
        });

        test( "The class method getRole() returns 'Employee'", () => {        
            // Arrange
            const role = "Employee";           
            // Act
            const employee = new Employee( "Mark", 1234, "mark@random_email.com" );
            //Assert
            expect(employee.getRole()).toBe( role );
        });

    });
});



/*
Truthy
test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});
*/

/*
Numbers
test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
});
*/

/*
Strings
test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
});

*/

/*
Exceptions
function compileAndroidCode() {
    throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);

  // You can also use the exact error message or a regexp
    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
    expect(() => compileAndroidCode()).toThrow(/JDK/);
});
*/