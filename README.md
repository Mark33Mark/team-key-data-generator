![Mark Watson](./dist/img/team.jpg)
# USYD-FSF Week10 Project
## OOP: Team Profile Generator

### Table of Contents  
  
   1. [Project Description](#1-description)
   2. [Application Features](#2-features)
   3. [Installation](#3-installation)
   4. [Usage](#4-usage)
   5. [Credits](#5-credits)
   6. [License](#6-license)
   7. [Repository Status](#7-github-repo-status)
   8. [Contribute](#8-how-to-contribute)
   9. [Tests](#9-tests)
   10. [Checklist](#10-checklist)

---
### 1. Description  
**What is this project?**  
* A Node.js command-line application that takes in information about employees on a software engineering team. 
* Generates a HTML webpage that displays key data for each person. 
* Using Jest a number of unit tests have been written for every part of the code to ensure it passes each test.

**Why this project?**  
* Generate a webpage that displays a team's key information for users to have quick access to the team's emails and GitHub profiles. In writing the application, a number of unit tests are to be prepared to demonstrate the application functions without error in support of achieved a minimum viable product (MVP).

* Following are some screen grabs of the application inside the Powershell terminal:

![landing page](./img//team-key-data-generator-screenshot1.jpg)
![gallery](./img//team-key-data-generator-screenshot2.jpg)
![contact](./img//team-key-data-generator-screenshot3.jpg)

* Screengrab of the resulting webpage following completion of the command line questions:

![webpage generated](./img//team-key-data-generator-screenshot3.jpg)

**What problem does this project solve?**  
* Helps automate the process of compiling your team's key information.  It also demonstrates the use of unit testing to test and confirm if the application is functioning as intended.

**Lessons learnt?**  
* Tried to modularise the code more than previous weeks assignment although there is plenty of room for improvement.
* Working out how to unit test the various Inquirer functions was challenging.  There is very limited information available online in support of setting up unit tests for Inquirer.
* As seems to be the norm, I ran short of time to further refine the application and improve the code.

---
### 2. Features  
Client requested features as implemented:  

- a command-line application that accepts user input about the user's application repository;
- starting the application in the command line runs Inquirer that prompts the user to enter the team manager’s name, employee ID, email address, and office number
- After enteringf the team's manager details another menu prompts the user with the option to add an engineer or an intern or to finish building the team
- the user is prompted for each additional team member's names and key information
- selecting the engineer option prompts the user to enter the engineer’s name, ID, email, and GitHub username, and then returns you to the menu
- selecting the intern option prompts the user to enter the intern’s name, ID, email, and school, and then returns you to the menu
- on deciding to finish building the team data, a HTML file is created that displays a nicely formatted team data based on user input
- clicking on any of the team's email addresses in the HTML opens the users default email program and populates the TO field of the email with the team members email address
- clicking on the GitHub username opens the team members GitHub page in a new tab on the browser

---
### 3. Installation  
You can download the source code from [my Github repository](https://github.com/Mark33Mark/team-key-data-generator), install into a location of your choosing.  Open a terminal window and navigate to the folder with the application in it.  
You will need to install Node.js if you haven't already in your system.  Once node is installed then install the dependancy 'Inquirer' by typing and then initialise the folder with the command npm init -y, as follows: 

```
npm init -y
npm i inquirer
```   
Once inquirer is installed you can run the application by typing:

```
node index.js
```  
---
### 4. Usage  
You need a terminal window to run this application.  The team key data html file is saved into a directory created by the app.  The app creates a directory using the team name for the folder name.

---
### 5. Credits  
No particular credits for this one. I relied on the inquirer documentation for this project.

---
### 6. License  
 The works in this repository are subject to:  

[![GitHub](https://img.shields.io/github/license/Mark33Mark//team-key-data-generator)](doc/LICENSE.md)

---
### 7. Github repo status  

![GitHub top language](https://img.shields.io/github/languages/top/Mark33Mark/team-key-data-generator)
![GitHub language count](https://img.shields.io/github/languages/count/Mark33Mark/team-key-data-generator)
![GitHub last commit](https://img.shields.io/github/last-commit/Mark33Mark//team-key-data-generator)
![GitHub commits in last month](https://img.shields.io/github/commit-activity/m/Mark33Mark/team-key-data-generator)
![GitHub commit checks state](https://img.shields.io/github/checks-status/Mark33Mark/team-key-data-generator/59e0862442687d733d5dfa3bf38842ba1e450676)

---
### 8. How to Contribute
 If you would like to contribute, please comply with the Contributor Covenant Code of Conduct:  

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](doc/code_of_conduct.md)

---
### 9. Tests  
- Test are written using the Jest package fir Test-Driven Development.
- Following is a screengrab of the Jest coverage report generated in HTML:

![TDD page generated](./img//team-key-data-generator-screenshot3.jpg)

---
### 10. Checklist  
 All actions not checked are still to be completed:
* [x]  sample HTML file generated using the application submitted.
* [x]  GitHub repository containing your application code.
* [x]  a video is uploaded to my Google Drive showing the typical user flow through the application. This includes views of the prompts and the responses after their selection.  The video can be accessed from: [GoogleDrive Video](https://drive.google.com/file/d/1cAog-PyYmsD4gmm9ViNk0OcmPDlzMPxI/view?usp=sharing).
* [x]  the walkthrough video shows all four Jest tests passing from the command line.
* [x]  the walkthrough video demonstrates how a user would invoke the application from the command line.
* [x]  the walkthrough video demonstrate how a user enters responses to all of the prompts in the application.
* [x]  the walkthrough video must demonstrate a generated HTML file that matches the user input.
* [x]  the application satisfies all of the features listed above by using the Inquirer package, Jest package for unit testing and the application has Employer, Manager, Engineer and Intern classes.
* [x]  .gitignore file created to idgnore `node_modules/` and `.DS_Store/` during commits.
* [x]  sample Team data webpage using the application is located: [sample Team Key Data](??????/index.html).
* [x]  Github repository contains application code [Github location](https://github.com/Mark33Mark/team-key-data-generator)
* [x]  a video is uploaded to my Google Drive showing the typical user flow through the application. This includes views of the prompts and the responses after their selection.  The video can be accessed from: [GoogleDrive Video](https://drive.google.com/file/d/1cAog-PyYmsD4gmm9ViNk0OcmPDlzMPxI/view?usp=sharing) 
* [x]  The application uses the [Inquirer package](https://www.npmjs.com/package/inquirer).
* [x]  Application loads with no errors.
* [x]  Repository has a unique name; follows best practice for file structure; and naming conventions.
* [x]  The application resembles the mock-up functionality provided in the assigment instructions.
* [x]  Repsository follows best practices for class/id naming conventions, indentation, quality comments, etc.
* [x]  Repository contains multiple descriptive commit messages.
* [x]  Repository contains a README file with description, screenshot and link to deployed application.
---

- [Back to the top](#usyd-fsf-week10-project)
