

const inquirer  = require('inquirer');
const fs        = require('fs'); 

const Employee  = require('./lib/Employee');
const Manager   = require('./lib/Manager');
const Engineer  = require('./lib/Engineer');
const Intern    = require('./lib/Intern'); 

const questions    = require('./src/questions'); 
const htmlBuilder  = require('./src/htmlBuilder');

// I decided this was a simpler way to manage the employee 
// classification at time of entry for each employee type 
// instead of having to resort the information when building 
// the HTML.
let workTeam          = {}; 
const managerArray    = []; 
const engineersArray  = []; 
const internsArray    = []; 


initialise = () => {
    console.clear();
    console.log( questions.banner );
	inquirer
        .prompt( questions.welcome )
        .then(( appStart ) => {

            if ( appStart.welcome === "OK\n" ) {
                
                console.clear();
                console.log( questions.banner );
                console.log( "\n TEAM \n^^^^^^^" );
                teamName();

            } else {
                
                console.clear();
                console.log( questions.thanks );
                console.log( "\nThanks for visiting, have a great day.\n" );
            }
        });
};

teamName = () => {
	inquirer
        .prompt( questions.teamName )
        .then(( team ) => {
		
            workTeam = team ;
            
            console.clear();
            console.log( questions.banner );
            console.log( "\n MANAGER \n^^^^^^^^^\n" );
            q_manager();
        });
};


q_manager = () => {
	inquirer
        .prompt( questions.q_Manager )
        .then(( res_manager ) => {
		
            let manager = new Manager( res_manager.name, res_manager.id, res_manager.email, res_manager.office );
            managerArray.push( manager );
            
            console.clear();
            console.log( questions.banner );
            anotherTeamMember();
        });
};

anotherTeamMember = () => {
	inquirer
        .prompt( questions.addTeamMember )
        .then(( addTeamMember ) => {
		
		if ( addTeamMember.teamAdd === "Yes" ) { 

                console.clear();
                console.log( questions.banner );
                memberJobTitle(); 
            }
		if ( addTeamMember.teamAdd === "No" ) {
            
            console.clear();
            console.log(questions.thanks);
			
            htmlBuilder( workTeam, managerArray, engineersArray, internsArray );
                        
		}
	});
};

// Engineer or Intern?
memberJobTitle = () => {
	inquirer
        .prompt( questions.teamMemberRole )
        .then(( teamrole ) => {
            if ( teamrole.jobTitle === "Engineer") {
                
                console.clear();
                console.log( questions.banner );
                console.log( "\n ENGINEER \n^^^^^^^^^^\n" );

                inquirer
                    .prompt( questions.q_Engineer )
                    .then(( res_engineer ) => {
                        let engineer = new Engineer( res_engineer.name, res_engineer.id, res_engineer.email, res_engineer.github);
                        engineersArray.push( engineer );

                        console.clear();
                        console.log( questions.banner );
                        anotherTeamMember();
                        });

            } else if ( teamrole.jobTitle === "Intern" ) {

                console.clear();
                console.log( questions.banner );
                console.log("\n INTERN \n^^^^^^^^^\n");
			
                inquirer
                    .prompt( questions.q_Intern )
                    .then(( res_intern ) => {
                        let intern = new Intern( res_intern.name, res_intern.id, res_intern.email, res_intern.school );
                        internsArray.push( intern );
                        
                        console.clear();
                        console.log( questions.banner );
                        anotherTeamMember();
			});
		}
	});
};




initialise();


saveToDrive = ( html, team ) => {

    let newDirectory = `./${team}_team_keyData/`;

    fs.mkdir( newDirectory, { recursive: true }, ( err ) => {
        if ( err ) throw err;
      }); 

    fs.writeFile( newDirectory + "index.html", html, err => {
        if (err) { 
            return console.err(err); 
        } else {
        console.log(`\nSuccess!\nI've built your team key data file.\n\nYou will find it saved at: ${ newDirectory}index.html\n`);
        }
    });
};


/*  ========================================================================================================================
    ======================================================================================================================== */

    module.exports = saveToDrive;