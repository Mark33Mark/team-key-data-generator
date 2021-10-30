
const inquirer      = require( "inquirer" );
const questions     = require( "./questions" ); 
const manager       = require( "./inquirer_manager" ); 

let workTeam        = {}; 

teamName = () => {
	
    return inquirer

        .prompt( questions.teamName )
        .then(( team ) => {

            workTeam = team ;

            console.clear();
            console.log( questions.banner );
            console.log( "\n MANAGER \n^^^^^^^^^\n" );

            manager( workTeam );
        });
};

module.exports = teamName;