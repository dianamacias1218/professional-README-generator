// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require ('inquirer')

// TODO: Create an array of questions for user input
const questions = require ('inquirer');
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of the README',
      name: 'Title',
    },
    {
        type: 'input',
        message: 'List and create Table of Contents',
        name: 'Table of Contents',
    },
    {
      type: 'input',
      message: 'Provide a short description explaining the what, why, and how of your project.',
      name: 'Description',
    },
    {
      type: 'input',
      message: 'What steps are required to install your project?',
      name: 'Installation',
    },
    {
      type: 'input',
      message: 'Provide instructions on how to use your web application.',
      name: 'Usage',
     },
      {
      type: 'input',
      message: 'Choose a License Badge for your project:',
      choices: 'Apache, General Public, MIT, Boost, Creative Commons, Eclipse, Mozilla, Unilicense', 
      name: 'License',
      },
      {
        type: 'input',
        message: 'List the contributors for this project;',
        name: 'Contributions',
      },
      {
        type: 'input',
        message: 'Provide Tests fro your web application.',
        name: 'Tests',
      },
      {
        type: 'input',
        message: 'Provide an FAQ section.',
        name: 'Questions',
      },
])
// TODO: Create a function to write README file
function writeFile(fileName, data) {
fs.writeFile("README.md", data, err => {
  if (err) {
    console.error(err);
  }
  console.log("README Generated")
});
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
