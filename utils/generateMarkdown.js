// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  }
  return `![License](https://img.shields.io/badge/license-${license}-brightgreen)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "none") {
    return "";
  } else {
    return `[License](#license)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "none") {
    return "";
  } else {
    return `
## License 
This project is covered under the ${license} license.

`;
  }
}

// ... (other functions remain unchanged)

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
  ${renderLicenseBadge(answers.license)}
  
  ## Description
  ${answers.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - ${renderLicenseLink(answers.license)}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
  ${renderLicenseSection(answers.license)}  
  
  ## Contributing
  ${answers.contribute}
  
  ## Tests
  ${answers.test}
  
  ## Questions
  If you have any questions or need further assistance, feel free to reach out:
  
  - GitHub: [${answers.username}](https://github.com/${answers.username})
  - Email: ${answers.email}
`;
}

module.exports = generateMarkdown;
