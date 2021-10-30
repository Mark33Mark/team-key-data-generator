
const inquirer      = require( "inquirer" );
const questions     = require( "./src/questions" ); 
const teamName      = require( "./src/inquirer_teamName" );

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

initialise();


module.exports = initialise;
