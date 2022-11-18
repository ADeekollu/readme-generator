


// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const markDown = require('./generateMarkdown')
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your project about?',        
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Who contributed to this project?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'How to run a test for your application?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like?',
        choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0'],        
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub?'
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return inquirer.prompt(questions) 
        .then((data) => {
            const readMe = markDown(data); 

            fs.writeFile('READEME.md', readMe, function(err) {
                if (err) {
                    console.log("Could not save file", err)
                } else {
                    console.log("New READEME generated")
                }
            })
        })
 }


writeToFile();