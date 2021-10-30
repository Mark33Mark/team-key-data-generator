
const inquirer          = require( "inquirer" );
const questions         = require( "./questions" ); 
const memberJobTitle    = require( "./inquirer_teamJobTitle" ); 
const htmlBuilder       = require( "./htmlBuilder" ); 


anotherTeamMember = ( workTeam, managerArray, engineersArray, internsArray ) => {
	return inquirer
            .prompt( questions.addTeamMember )
            .then(( addTeamMember ) => {
		
		if ( addTeamMember.teamAdd === "Yes" ) { 

                  console.clear();
                  console.log( questions.banner );
                  
                  memberJobTitle( workTeam, managerArray ); 
            }
		if ( addTeamMember.teamAdd === "No" ) {
            
            console.clear();
            console.log(questions.thanks);

            htmlBuilder( workTeam, managerArray, engineersArray, internsArray );

		}
	});
};

module.exports = anotherTeamMember;