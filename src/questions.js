

// == Banner ================================================================================================
// ASCII art generated using: https://textkool.com/en/test-ascii-art-generator
const banner =
"\x1b[46m                                                 \n\x1b[0m" +
"\x1b[46m   ___  ___        _____                         \n\x1b[0m" +
"\x1b[46m   |  \\/  |       |_   _|                        \n\x1b[0m" +
"\x1b[46m   | .  . |_   _    | | ___  __ _ _ __ ___       \n\x1b[0m" +
"\x1b[46m   | |\\/| | | | |   | |/ _ \\/ _` | '_ ` _ \\      \n\x1b[0m" +
"\x1b[46m   | |  | | |_| |   | |  __/ (_| | | | | | |     \n\x1b[0m" +
"\x1b[46m   \\_|  |_/\\__, |   \\_/\\___|\\__,_|_| |_| |_|     \n\x1b[0m" +
"\x1b[46m            __/ |                                \n\x1b[0m" +
"\x1b[46m            |___/                                \n\x1b[0m" + 
"\x1b[46m                                                 \n\x1b[0m";

// == Welcome ===============================================================================================

const welcome = {
	type: "list",
	message: "\nHello,\n" + 
        "\nI can create a webpage of your team's key information.\n" +
        "\nThe file is created in HTML so you can view it in your web browser.\n" +
        "To do this, I need you to answer some questions about your work team.\n" +
        "\nWould you like to start? \n",
	choices: ["OK\n", "I'll need to come back another time."],
	name: "welcome",
};

const teamName = {
	message: "Team's name / business unit?",
	name: "teamName",
	validate: teamInput => { return validateText( teamInput ); },
};

// == Add more to team ======================================================================================

// Add another team member?
const addTeamMember = {
	type: "list",
	message: "\n\nAdd another team member?\n\n",
	choices: ["Yes", "No"],
	name: "teamAdd",
};

// Role of new team member?
const teamMemberRole = {
	type: "list",
	message: "\nEngineer or Intern?\n",
	choices: ["Engineer", "Intern"],
	name: "jobTitle",
};


// == Manager Questions =====================================================================================

const q_Manager = [
	{
		message: "The Manager's name?",
		name: "name",
		validate: nameInput => { return validateName( nameInput ); },
	},
	{
		message: "Employee identification number (8-digits)?",
		name: "id",
        validate:  idInput => { return validateID( idInput ); },
	},
	{
		message: "Manager's email?",
		name: "email",
		validate:   emailInput => { return validateEmail( emailInput ); },
	},
	{
		message: "The office phone number?",
		name: "office",
		validate: phoneInput => { return validatePhone( phoneInput ); },
	},
];


// == Engineer Questions ====================================================================================

const q_Engineer = [
	{
		message: "The Engineer's name?",
		name: "name",
		validate: nameInput => { return validateName( nameInput ); },
	},
	{
		message: "Employee identification number (8-digits)?",
		name: "id",
		validate: idInput => { return validateID( idInput ); },
	},
	{
		message: "Engineer's email?",
		name: "email",
		validate:   emailInput => { return validateEmail( emailInput ); },
	},
	{
		type: "input",
		message: "Engineer's GitHub name?",
		name: "github",
		validate: githubInput => { return validateText( githubInput ); },
	},
];


// == Intern Questions ====================================================================================

const q_Intern = [
	{
		message: "Intern's name?",
		name: "name",
		validate: nameInput => { return validateName( nameInput ); },
	},
	{
		message: "Employee identification number (8-digits)?",
		name: "id",
		validate: idInput => { return validateID( idInput ); },
	},
	{
		message: "Intern's email?",
		name: "email",
		validate:   emailInput => { return validateEmail( emailInput ); },
	},
	{
		message: "Intern's school, college or university?",
		name: "school",
		validate: schoolInput => { return validateText( schoolInput ); },
	},
];

// == Validation ============================================================================================

validateName = name => {
    nameFormat = /^[a-zA-Z]+ [a-zA-Z]+$/.test( name );
	nameFormat2 = /^[a-zA-Z]+ [a-zA-Z]+[-a-zA-Z]+$/.test( name );

    if ( nameFormat === true || nameFormat2 === true ) {
            return true;
        } else {
            console.log(`             Enter a valid first name and surname, hyphenated surnames are ok.`);
            return false;
        }
};


validateEmail = email => {
    emailFormat = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,5})$/.test( email );

    if ( emailFormat ) {
            return true;
        } else {
            console.log(`             Enter a valid email address, for example:  example@host.com`);
            return false;
        }
};

validateID = id => {
    idFormat = /^[0-9]+$/.test( id );

    // looks at format and if number has 8 digits in it - 
    // https://stackoverflow.com/questions/14879691/get-number-of-digits-with-javascript
    if ( idFormat === true && (Math.max(Math.floor(Math.log10(Math.abs(id))), 0) + 1) === 8 ) {
        return true;
    } else {
        console.log(`             A valid employee identification is needed - must be 8 digits.`);
        return false;
    }
};

validatePhone = phone => {
	// I've set it for Australia with area code, for example 02.9699.2992
	phoneFormat_land = /^\b\d{2}[-.]?\d{4}[-.]?\d{4}\b$/.test( phone );
	// I've set it for Australia with area code, for example 0448.444.444
	phoneFormat_mobile = /^\b\d{4}[-.]?\d{3}[-.]?\d{3}\b$/.test( phone );

    if ( phoneFormat_land || phoneFormat_mobile ) {
            return true;
        } else {
            console.log(`			Provide a valid phone number, for example:  for landline : 123-123-1234, 123.123.1234, 1231231234
											   or for mobile : 0448-888-888, 0448888888`);
            return false;
        }
};

validateText = text => {
	// https://stackoverflow.com/questions/6222215/regex-for-validating-folder-name-file-name
	textFormat = /^[^\\/?%*:|"<>\.]+$/.test( text );

    if ( textFormat ) {
            return true;
        } else {
            console.log(`\n             Enter a valid name.`);
            return false;
        }
	};

// ==========================================================================================================

const thanks =
"\x1b[36m\x1b[47m   _____ _                 _              \n\x1b[0m" + 
"\x1b[36m\x1b[47m   |_   _| |               | |            \n\x1b[0m" + 
"\x1b[35m\x1b[47m     | | | |__   __ _ _ __ | | _____      \n\x1b[0m" + 
"\x1b[34m\x1b[47m     | | | '_ \\ / _` | '_ \\| |/ / __|     \n\x1b[0m" +  
"\x1b[35m\x1b[47m     | | | | | | (_| | | | |   <\\__ \\     \n\x1b[0m" + 
"\x1b[36m\x1b[47m     \\_/ |_| |_|\\__,_|_| |_|_|\\_\\___/     \n\x1b[0m" + 
"\x1b[36m\x1b[47m                                          \n\x1b[0m" + 
"\x1b[36m\x1b[47m                                          \n\x1b[0m"                                           



module.exports = {
    banner,
    welcome,
    teamName,
    addTeamMember,
    teamMemberRole,
    q_Manager,
    q_Engineer,
    q_Intern,
    thanks,
};

