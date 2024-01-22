// Variables for the required files this file references
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// Array of questions to ask when called upon
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
        name: "description"
    },
    {
        message: "How does one use the application?",
        name: "usage"
    },
    {
        message: "Please enter any installation instructions, including system and software requirements.",
        name: "install",
    },
    {
        type: "list",
        message: "Please choose a license, if applicable",
        name: "license",
        choices: ["MIT", "Apache_2.0", "GPLv3", "BSD_2--Clause", "None"]
    },
    {
        message: "Please enter any test instructions.",
        name: "test",
    },
    {
        message: "Please enter any contribution guidelines.",
        name: "contrib",
    },
    {
        message: "Please enter your GitHub account name",
        name: "github"
    },
    {
        message: "Please enter your email",
        name: "email",
    }
];

function init(questionArray) {
    inquirer.prompt(questionArray)
        .then((responses) => {
            console.log(responses)
            fs.writeFileSync("README.md", generateMarkdown(responses), (err) =>
                err ? console.error(err) : console.log('Success!'))
})
        .catch ((error) => {
    console.error(error)
})
};

init(questions);