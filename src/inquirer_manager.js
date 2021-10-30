
const inquirer      = require( "inquirer" );
const questions     = require( "./questions" ); 
const Manager       = require( "../lib/Manager" );
const teamMembers   = require( "./inquirer_anotherTeamMember" );

const managerArray  = []; 

manager = ( workTeam ) => {
	return inquirer
        .prompt( questions.q_Manager )
        .then(( res_manager ) => {
		
            let manager = new Manager( res_manager.name, res_manager.id, res_manager.email, res_manager.office );
            managerArray.push( manager );
            
            console.clear();
            console.log( questions.banner );

            anotherTeamMember( workTeam, managerArray );
        });
};

module.exports = manager;