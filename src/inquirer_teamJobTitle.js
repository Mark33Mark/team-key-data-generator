
const inquirer        = require( "inquirer" );
const questions       = require( "./questions" ); 
const teamMembers     = require( "./inquirer_anotherTeamMember" );

const Engineer        = require( "../lib/Engineer" );
const Intern          = require( "../lib/Intern" ); 

const engineersArray  = []; 
const internsArray    = []; 

// Engineer or Intern?
memberJobTitle = ( workTeam, managerArray ) => {
	return inquirer
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

                        anotherTeamMember( workTeam, managerArray, engineersArray, internsArray );
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

                        let engineer = engineersArray;

                        anotherTeamMember( workTeam, managerArray, engineersArray, internsArray );
			});
		}
	});
};

module.exports = memberJobTitle;