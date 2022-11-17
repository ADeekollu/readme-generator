// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({ title, description, installation, usage, contribution, test, license, email, github }) =>
  `
# ${title}

## Table of Content
- [Project Description](#description)
- [Installation](#installation)
- [Usage](#usage)  
- [Contributing](#contribution)
- [Tests](#tests)
- [License](#license)
- [Questions](#contact)

## Description
${description}

## Installation
This is how you install the application ${installation}

## Usage
This is how you can use the application ${usage}

## Contributing
This is who contributed to the application ${contribution}

## Tests
${test}

## License
${license}

## Contact
${email}
${github}

`
module.exports = generateMarkdown;
