
const inquirer = require( "inquirer" );
const teamName = require( "../src/inquirer_teamName" );
const manager  = require( "../src/inquirer_manager" );
const another  = require( "../src/inquirer_teamJobTitle" );

// mocking the module so that we can replace the 
// prompt implementation and test it
jest.mock( "inquirer" );


describe( "Team Name inquiry", () => {
    let mockPrompt;
    beforeEach(() => {        
        // this method runs before each test
        mockPrompt = Promise.resolve({ welcome: "Elite Coders" });
        inquirer.prompt.mockReturnValue( mockPrompt );    
    });
    
    afterEach(() => {
        // this method runs after each test, performing clean up
        inquirer.prompt.mockReset();
    });


    test("it prompts user for input", () => {
        teamName();
        
        expect( inquirer.prompt ).toHaveBeenCalled();

        // alternative check that there was the right number of calls
        expect(inquirer.prompt).toHaveBeenCalledTimes(1);
    });


    test("prints the heading 'Manager' following successful team name entry", () => {
        
        // mocking the console to test the output
        const consoleMock = jest.spyOn(console, "log");
        consoleMock.mockImplementation(() => {});
        
        return teamName().then(() => {
            
            // check that prompt is called
            expect( inquirer.prompt ).toHaveBeenCalled();

            // check that console.log was called with the right string
            expect(consoleMock).toHaveBeenCalledWith( "\n MANAGER \n^^^^^^^^^\n" );


            
            // restore the console so that the mock doesn't persist in the next test that runs
            consoleMock.mockRestore();
        });       
    });
});


describe( "Manager inquiry", () => {
    let mockPrompt;
    beforeEach(() => {
        
        // this method runs before each test
        mockPrompt = Promise.resolve({name:"Manager Name",id:"123456787",email:"noname@elite.com",officeNumber:"12.1234.1234"});
        inquirer.prompt.mockReturnValue( mockPrompt );    
    });
    afterEach(() => {
        // this method runs after each test, performing clean up
        inquirer.prompt.mockReset();
    });


    test("it prompts user for input", () => {
        manager();
        
        expect( inquirer.prompt ).toHaveBeenCalled();

    });
});



describe( "Intern or Engineer member inquiry", () => {
    let mockPrompt;
    beforeEach(() => {
        // this method runs before each test
        mockPromptEngineer = Promise.resolve({name:"Engineer First",id:"44332211",email:"engineer1@coders.com",github:"engineer1"});
        mockPromptIntern = Promise.resolve({name:"Intern First",id:"11223344",email:"intern1@coders.com",school:"University of Coders"});
        inquirer.prompt.mockReturnValue( mockPromptEngineer );
        inquirer.prompt.mockReturnValue( mockPromptIntern );
    });

    afterEach(() => {
        // this method runs after each test, performing clean up
        inquirer.prompt.mockReset();
    });

    test("it prompts user for input", () => {
        memberJobTitle();
        
        expect( inquirer.prompt ).toHaveBeenCalled();

    });
});

