const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const path = require("path");

// array of questions for user
const questions = [
    {
      
        type: 'input',
        name: 'repoName',
        message: 'What is name of this application? (This will aslo the main header of the README)',
     
    },
    //asks user for git hub user name 
    {
        type: 'input',
        name: 'gitHubName',
        message: 'What is your username on Github?',
     
    },
    // asks for a description of the project 
    {
        type: 'input',
        message: 'Write a description of this application',
        name: 'description',
     
    },
    // How do you install your app? 
    {
        type: 'input',
        message: 'How does a user install your application? Provide instuctions here',
        name: 'installApp',
     
    },
   // How does a user use your application? 
    {
        type: 'input',
        message: 'How does a user use your application? Provide instuctions here',
        name: 'appInstructions',
     
    },
    // How would a user of this application report an issue, or make a contribution to it? 
    {
        type: 'input',
        message: 'What is your email?',
        name: 'appEmail',
     
    },
 // promts what license they would you  like to use? 
 // THIS SHOULD BE USED FOR A BADGE. 
    {
        type: 'input',
        message: 'What license badge would you like to use? (Ex: MIT, GPL 3.0) If you do not wish to use a license type "none" ',
        name: 'license',
     
    },
 //Asks the user who else contributed to their application 
    {
        type: 'input',
        message: 'Who else contributed to your application? if none write "none" ',
        name: 'contributors',
     
    },

];
//console.log(response)

// function to write README file
 function writeToFile(fileName, data) {
     return fs.writeFileSync(path.join(process.cwd(), fileName), data)
 }

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        console.log("Creating README");
        writeToFile("README.md", generateMarkdown({...response}))
// this will Create the first line and main header for the repo (that is what the "# " is for) using the users resonse to RepoName
fs.appendFileSync("README.md", ("# " + response.repoName )+ '\n', function(err) { 

    if (err) { 
    console.log(err)
    }
    else {
    console.log("Success")
    }
});
});
}  
// function call to initialize program
init();
