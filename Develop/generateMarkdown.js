// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadges(license) {
  const licenseBadge = {
    'MIT':"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    'GNU GPLv3': "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    'Apache License 2.0': "[![License: Apachelicense2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  } 
  
  return licenseBadge[license]
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLink = {
    'MIT': "[MIT](https://choosealicense.com/licenses/mit/)",
    "GNU GPLv3": "[GNUGPLv3](https://choosealicense.com/licenses/gpl-3.0/)",
    "Apache License 2.0": "[Apachelicense2.0] (https://choosealicense.com/licenses/apache-2.0/)",
   }
   return licenseLink[license]
  }

  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license) {
      return `Licensed with the ${renderLicenseLink(license)} license`
    } else {
        return ''
    }
  }
  

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({ title, description, installation, usage, contribution, test, license, email, github }) =>
  `
# ${title}
${renderLicenseBadges(license)}

## Table of Content
* [Project Description](#description)
* [Installation](#installation)
* [Usage](#usage)  
* [Contributing](#contribution)
* [Tests](#tests)
* [License](#license)
* [Questions](#contact)

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
${renderLicenseSection(license)}

## Contact
If you have questions contact me here ${email}
${github}

`
module.exports = generateMarkdown;
