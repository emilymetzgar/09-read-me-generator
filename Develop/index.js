// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is the description?',
  },

  {
    type: 'input',
    name: 'installation',
    message: 'Input installation requirements here',
  },

  {
    type: 'input',
    name: 'usage',
    message: 'Input usage details here',
  },

  {
    type: 'input',
    name: 'contributing',
    message: 'What does the user need to know about contributing to the repo?',
  },

  {
    type: 'input',
    name: 'test',
    message: 'What command should be run to run tests?',
    default: 'npm test',
  },

  {
    type: 'list',
    name: 'license',
    message: 'What kind of license does your project require?',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
  },

  {
  type: 'input',
  name: 'contact',
  message: 'input contact info here for users to ask questions about repo',
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

  fs.writeFileSync(fileName, generateMarkdown(data))


}

// TODO: Create a function to initialize app
function init() {

  inquirer
    .prompt(questions)

    .then((response) =>

      writeToFile("generatedReadMe.md", response)
    );
}

// Function call to initialize app
init();