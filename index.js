const fs = require('fs');
const inquirer = require('inquirer');

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

const askUser = (questionArray) => {
    return inquirer.prompt(questionArray);
}
//     .then((answers) => {
//         console.log(answers);
//     })
//     .catch((error) => {
//         console.error(error);
//     })
// };
askUser(questions);
console.log(process.argv[2]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${answers.name}.txt`, JSON.stringify(answers, null, 2), (err) =>
        err ? console.error(err) : console.log('Success!'))
}

// TODO: Create a function to initialize app
// function init() { }

// Function call to initialize app
// init();
