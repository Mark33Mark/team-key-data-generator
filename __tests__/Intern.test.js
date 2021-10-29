
const Intern = require( "../lib/Intern" );


describe( "Intern", () => {
    const intern = new Intern();    
    describe( "Initialise", () => {
        test("Can set school via constructor", () => {
            const education = "University of Sydney";
            const intern = new Intern("Foo", 1, "mark@random_email.com", education );
            expect( intern.school ).toBe( education );
        });

        test("getRole() should return 'Intern'", () => {
            const role = "Intern";
            const intern = new Intern("Mark", 1234, "mark@random_email.com", "University of Sydney" );
            expect( intern.getRole() ).toBe( role );
        });

        test("Can get school via getSchool()", () => {
            const education = "University of Sydney";
            const intern = new Intern("Foo", 1, "mark@random_email.com", education );
            expect( intern.getSchool() ).toBe( education );
        });
    });
});

