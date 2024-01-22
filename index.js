// variables for packages 
const fs = require('fs');
const inquirer = require('inquirer');
// add require for generate markdown file
const markdwn = require('./utils/generateMarkdown')


// question array to fill 
const questions = [
    {
        message: "Please enter your name.",
        name: "user"
    },
    {
        message: "Please enter a name for your project.",
        name: "title"
    },
    {
        message: "Please enter a description for your application.",
        // what does it do
        name: "desc"
    },
    {
        message: "Please enter any usage information.",
        // how it does it
        name: "usage"
    },
    {
        type: "list", // checkbox?
        message: "Please choose a license",
        name: "license",
        choices: ("MIT", "Apache-2.0", "GPL-3.0", "BSD-2-Clause")
    },
    {
        message: "Please enter any installation instructions, including system and software requirements.",
        // system requirements
        name: "install",
    },
    {
        message: "Please enter any contribution guidelines.",
        //contributors (use their GitHub username)
        name: "contrib",
    },
    {
        message: "Please enter any test instructions.",
        name: "test",
    },
    {
        message: "Please enter your email",
        name: "contact",
    }
];

function init(questionArray) {
    inquirer.prompt(questionArray)
        .then((responses => {
            console.log(responses)
            //create the file in new folder?
            // writeToFile here
        }));
        //.catch((error) => {
        //console.error(error)}
}

init(questions);


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${data.name}.md`, JSON.stringify(data, null, 2), (err) =>
        err ? console.error(err) : console.log('Success!'))
}
