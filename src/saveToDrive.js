
const fs            = require( "fs" ); 
const htmlBuilder   = require( "./htmlBuilder" );


saveToDrive = ( html, team ) => {

    let newDirectory = `./${team}_team_keyData/`;

    fs.mkdir( newDirectory, { recursive: true }, ( err ) => {
        if ( err ) throw err;
    }); 

    fs.writeFile( newDirectory + "index.html", html, err => {
        if (err) { 
            return console.err(err); 
        } else {
        console.log(`\nSuccess!\nI've built your team key data file.\n\nYou will find it saved at: ${newDirectory}index.html\n`);
        }
    });
};

module.exports = saveToDrive;