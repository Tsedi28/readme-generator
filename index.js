// TODO: Include packages needed for this application
const inquirer = require ("inquirer")
const fs = require ("fs")
// TODO: Create an array of questions for user input
const questions = [];
inquirer.prompt([
    {
        type:"input",
        message:"what is the title?", 
        name : "title" 
    },
    {
        type:"input",
        message:"what is the discription?", 
        name : "discription" 
    },
    {
        type:"list",
        message:"Which license does this project use?", 
        name : "license",
        choices:["MIT", "APACHE", "GNU", "NONE"]
    }
]).then(answers => {
    fs.writeFileSync("./dist/README.md",`
# ${answers.title}

[![GitHub license](https://img.shields.io/badge/license-${answers.license}-blue.svg)] 

## Discription
${answers.discription}
    `)
})
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
