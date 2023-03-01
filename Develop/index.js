const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const tryAgain = 'Please enter a value to continue';

const questions = [
    {
        type: "input",
        message: "What is your project title?",
        name: "title",
        validate: (value) => value ? true : tryAgain
    },
   {
        type: "input",
        message: "How would you describe your project?",
        name: "description",
        validate: (value) => value ? true : tryAgain
    },
    {
        type: "input",
        message: "How do you use it?",
        name: "usage",
        validate: (value) => value ? true : tryAgain
    },
    {
        type: "input",
        message: "What are the steps (if any) for installation?",
        name: "installation",
    },
    {
        type: "list",
        message: "What license did you use",
        name: "license",
        choices: ['MIT License', 'GNU License', 'GPL License', 'Apache License', 'N/A'],
        validate: (value) => value ? true : tryAgain
    },
    {
        type: "input",
        message: "How may others contribute, if at all?",
        name: "contributions",
    },
    {
        type: "input",
        message: "Are there any testing instructions?",
        name: "tests",
    },
    {
        type: "input",
        message: "What Email address do you prefer to be contacted at reguarding this project?",
        name: "email",
    },
    {
        type: "input",
        message: "What is your Github user name?",
        name: "github",
    },
    {
        type: "input",
        message: "Any credit or acknowledgement you'd like to give?",
        name: "credits",
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
        err ? console.log(err) : console.log('Successfully generated your ReadMe!')
        )
};

function init() {
    inquirer.prompt(questions)
    .then((data) => {
        let content = generateMarkdown(data)
        writeToFile('readMe.md', content)
    }) .catch(function(err) {
        console.log(err)
    });
};

init();