
const teamData      = require( "./inquirer_anotherTeamMember" );
const saveToDrive   = require( "./saveToDrive" );

// push array to page 
htmlBuilder = ( team, manager, engineer, intern ) => {

    let cardManagers    = managerCard( manager[0] );
    let cardEngineers   = ( engineer.length === 0 ) ? `No engineers in this team` : engineerCardConstructor( engineer );
    let cardInterns     = ( intern.length === 0 ) ? `No interns in this team` : internCardConstructor( intern );

    let builtHTML = teamPage( team.teamName, cardManagers, cardEngineers, cardInterns  );

    saveToDrive( builtHTML, team.teamName );
};

// == Engineers card constructor ===========================================================================================

let engineerCardArray = [];

engineerCardConstructor =  engineer => {
    engineer.forEach( engineeringTeamMember => {
        engineerCardArray.push(engineerCard( engineeringTeamMember ));
    });
    return engineerCardArray;
};


// == Interns card constructor ===========================================================================================

let internCardArray = [];

internCardConstructor =  intern => {
    intern.forEach( internTeamMember => {
        internCardArray.push(internCard( internTeamMember ));
    });
    return internCardArray;
};


// == Team Member Cards html ===============================================================================================

managerCard = manager => {
    return `
    <div class="manager fw-bold mb-2" style="min-height: 10rem;">
        <div class="card manager-card shadow mb-3 bg-body rounded col align-self-center col-sm-6 col-md-4 col-10 mt-3 me-3">
            <div class="card-header">
                <i class="d-inline-block icon-SVG_manager-icon" style="font-size: 3.75rem;"></i>
                <div class="d-inline-block  ms-3">
                    <h2 class="card-title">${manager.name}</h2>
                    <h4 class="card-title"><i class="mr-2"></i>manager</h4>
                </div>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${manager.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                    <li class="list-group-item">Office: ${manager.officeNumber}</li>
                </ul>
            </div>
        </div>
    </div>
    `;
};

engineerCard = engineer => {
    return `
    <div class="card engineer-card shadow mb-3 bg-body rounded d-inline-block col-sm-6 col-md-4 col-10 mt-3 me-3">
        <div class="card-header">
            <i class="d-inline-block icon-SVG_engineer-icon" style="font-size: 3.5rem;"></i>
            <div class="d-inline-block  ms-3">
                <h2 class="card-title">${engineer.name}</h2>
                <h4 class="card-title"><i class="mr-2"></i>engineer</h4>
            </div>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}" target="_blank" rel="noopener noreferrer">${engineer.github}</a></li>
            </ul>
        </div>
    </div>
    `;
};

internCard = intern => {
    return `
    <div class="card intern-card shadow mb-3 bg-body rounded d-inline-block col-sm-6 col-md-4 col-10 mt-3 me-3">
        <div class="card-header">
            <i class="d-inline-block icon-SVG_intern-icon" style="font-size: 3.25rem;"></i>
            <div class="d-inline-block  ms-3">
                <h2 class="card-title">${intern.name}</h2>
                <h4 class="card-title"><i class="mr-2"></i>intern</h4>
            </div>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
    </div>
    `;
};

// == the webpage html =====================================================================================================

teamPage = ( workTeam, managerCard, engineerCards, internCards ) => {   
    return`

    <!DOCTYPE html>
    <html class="no-js" lang="en-US">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />

            <title>Team - key information</title>

            <!-- fonts
            ================================================== -->  
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@700&family=Lato:wght@400;700&family=Sarabun:wght@700&display=swap" 
                rel="stylesheet" />

            <!-- <link rel="shortcut icon" href="img/favicon.ico?ver=1.0" type="image/x-icon" /> -->

            <!-- CSS
            ================================================== -->  
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
            <link rel="stylesheet" href="../dist/css/style.css">

        </head>

        <!-- ================================================================================================================= -->

        <body>
            <div class="m-3 p-3 text-center text-white rounded jumbo-colour">
                <div class = "container">
                    <h1 class="display-4">
                        <i class="d-inline-block icon-SVG_team_icon1" style="font-size: 6rem;"></i>
                        <div class="d-inline-block">Welcome to team:<br />${workTeam}</div>
                    </h1>
                </div>
            </div>

            <div class="container">
                <div class="row">
                    <div class="team-organisation">

                        <hr />

                        <div class="manager fw-bold mb-2" style="min-height: 10rem;">
                            ${managerCard}
                        </div>

                        <hr />

                        <div class="engineer fw-bold mb-2" style="min-height: 10rem;">
                            ${engineerCards}
                        </div>

                        <hr />

                        <div class="intern fw-bold mb-2" style="min-height: 10rem;">
                            ${internCards}
                        </div>

                        <hr />

                    </div>
                </div>
            </div>
        </body>
    </html>
`;
};


// =========================================================================================================================

module.exports = htmlBuilder;

/*  ========================================================================================================================
    ======================================================================================================================== */
