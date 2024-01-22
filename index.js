// variables for packages 
const fs = require('fs');
const inquirer = require('inquirer');
// add require for generate markdown file
//


// question array to fill 
const questions = [
    {
        message: "Please enter a name for your project.",
        name: "title"
    },
    {
        message: "Please enter a description for your README.",
        // what does it do, how does it do it
        name: "desc"
    },
    {
        message: "Please enter any installation instructions.",
        // system requirements
        name: "install",
    },
    {
        message: "Please enter any usage information.",
        //
        name: "usage"
    },
    {
        message: "Please enter any contribution guidelines.",
        //contributors (use their GitHub username)
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
            //create the file in new folder?
            // writeToFile here
        }));
}
init(questions);


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${answers.name}.txt`, JSON.stringify(answers, null, 2), (err) =>
        err ? console.error(err) : console.log('Success!'))
}
