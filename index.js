// TODO: Include packages needed for this application
// Dependencies
const inquirer = require ("inquirer");
const fs = require ("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown.js");

// Array of questions for user to generate README.md
const questions = [

    {
        type:"input",
        message:"What's your Github username?", 
        name : "github" 
    },
    {
        type:"input",
        message:"What's your email?", 
        name : "email" 
    },
    {
        type:"input",
        message:"what is the name of your project?", 
        name : "title" 
    },

    {
        type:"input",
        message:"Describe about your project:", 
        name : "discription" 
    },
    {
        type:"input",
        message:"what is the installation instructions?", 
        name : "installation instructions" 
    },
    {
        type:"list",
        message:"Which license does this project use?", 
        name : "license",
        choices:["MIT", "APACHE", "GNU", "NONE"]
    },
    {
        type: "input",
        name: "dependencies",
        message: "Any dependencies to install?",
        default: "npm i"
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?",
        default: "npm test"
    },
    {
        type: "input",
        name: "usage",
        message: "What does the usage of this repo?",
    },
    {
        type: "input",
        name: "contributors",
        message: "Who are the contributors of this repo?",
    }
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then((inquirerAnswers) => {
            console.log("Generating.... Please wait....");
            writeToFile("./dist/README.md", generateMarkdown({ ...inquirerAnswers }));
        })
}
// Function call to initialize app
init();
