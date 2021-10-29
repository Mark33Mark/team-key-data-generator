
const Engineer = require( "../lib/Engineer" );


describe( "Engineer", () => {
    const engineer = new Engineer();    
    describe( "Initialise", () => {

        test("Can set GitHUb account via constructor", () => {
            const githubUsername = "usernameGithub";
            const engineer = new Engineer( "Mark", 1234, "mark@random_email.com", githubUsername );
            expect( engineer.github ).toBe( githubUsername );
        });

        test("getRole() should return \"Engineer\"", () => {
        const role = "Engineer";
        const engineer = new Engineer( "Mark", 1234, "mark@random_email.com", "GitHubUser");
        expect( engineer.getRole() ).toBe( role );
        });

        test("Can get GitHub username from class method getGithub()", () => {
        const githubUsername = "usernameGithub";
        const engineer = new Engineer( "Mark", 1234, "mark@random_email.com", githubUsername );
        expect( engineer.getGithub() ).toBe( githubUsername );
        });
    });
});