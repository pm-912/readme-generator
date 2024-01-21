// variables for packages 
const fs = require('fs');
const inquirer = require('inquirer');


// question array to fill 
const questions = [
    {
        message: "Please enter a title for your README.",
        name: "title"
    },
    {
        message: "Please enter a description for your README.",
        name: "desc"
    },
    {
        message: "Please enter any installation instructions.",
        name: "install",
    },
    {
        message: "Please enter any usage information.",
        name: "usage"
    },
    {
        message: "Please enter any contribution guidelines.",
        name: "contrib",
    },
    {
        message: "Please enter any test instructions.",
        name: "test",
    }
];

function init(questionArray) {
    inquirer.prompt(questionArray)
        .then((responses => {
            console.log(responses)
            
        }));
}
init(questions);


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${answers.name}.txt`, JSON.stringify(answers, null, 2), (err) =>
        err ? console.error(err) : console.log('Success!'))
}
