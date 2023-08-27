// TODO: Include packages needed for this application
const { error } = require("console");
const fs = require("fs");
const inquirer = require("inquirer");
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
    name: "description",
    message: "Enter the project description: ",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter usage information: ",
  },
  {
    type: "checkbox",
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
];

// TODO: Create a function to write README file
function badgeGenerator(license) {
  if (license === "none") {
    return "";
  }
  return `[License](https://img.shields.io/badge/license-${license}-brightgreen)`;
}

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    if (!error) {
      console.error(`Error creating README! `, error);
    } else {
      console.log(fileName, `Susscefully created! `);
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeInfo = `

# ${answers.title}
${generateLicenseBadge(answers.license)}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Credits


## License
This project is covered under the ${answers.license} license.

## How to Contribute
${answers.contributing}

## Tests
${answers.tests}



        `;
    writeToFile("README.md", readmeContent);
  });
}

// Function call to initialize app
init();
