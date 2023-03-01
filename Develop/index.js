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
        message: "Do you have a table of contents",
        name: "table of contents",
    },
    {
        type: "input",
        message: "How would you describe your project?",
        name: "description",
        validate: (value) => value ? true : tryAgain
    },
    { 
        type: "input",
        message: "How do you use this?",
        name: "usage",
        validate: (value) => value ? true : tryAgain
    },
    {
        type: "list",
        message: "What license did you use",
        name: "license",
        chocies: ['MIT License', 'GNU License', 'GPL License', 'Apache License'],
        validate: (value) => value ? true : 'N/A'
    },
    {
        
    }
];
