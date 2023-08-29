// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input

const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter the project title: ",
  },
  {
    type: "input",
    name: "description",
    message: "Enter the project description: ",
  },
  {
    type: "input",
    name: "installation",
    message: "Enter project installation instructions: ",
  },
  {
    type: "input",
    name: "description",
    message: "Enter the project description: ",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter usage information: ",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your project: ",
    choices: ["MIT", "Apache", "GPL", "None"],
  },
  {
    type: "input",
    name: "features",
    message: "Enter features of the project: ",
  },
  {
    type: "input",
    name: "contribute",
    message: "Enter how to contibute to the project: ",
  },
  {
    type: "input",
    name: "test",
    message: "Enter test instructions: ",
  },
  {
    type: "input",
    name: "username",
    message: "Enter github username: ",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email: ",
  },
];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    if (error) {
      console.error(`Error creating README! `, error);
    } else {
      console.log(fileName, `Susscefully created! `);
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeInfo = generateMarkdown(answers);
    
    writeToFile("README.md", readmeInfo);
  });
}

// Function call to initialize app
init();
