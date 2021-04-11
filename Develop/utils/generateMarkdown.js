// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

  function renderLicenseBadge(license) {
    if (license === 'None'){
      return ''
    } else {
      return ( `[![License: ${license}](https://img.shields.io/badge/License-${license.split(' ').join('%20')}-blue.svg)]`);
    }
  }
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None'){
    return ''
  } else {
    return (`(https://opensource.org/licenses/${license.split(' ').join('-')})`);
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None'){
    return ''
  } else {
    return (`This project is licensed under the ${license} license.`);
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# Title  ${data.title}

  ## Description  
  ${data.description}

  ## Table of Contents

  * [Installation](##Installation)

  * [Usage](##Usage)

  * [License](##Licence)

  * [Contributing](##Contributing)

  * [Tests](##Tests)

  * [Questions](##Questions)

## Installation:

${data.installation}


## Usage:

${data.usage}

## License:

${renderLicenseSection(data.license)}${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}


## Contributing:  

${data.contributing}


## Tests:

To run necessary tests, run the following command:  ${data.test}


## Questions: 

Please direct any questions about this repo to ${data.contact}
          
          `;
}

module.exports = generateMarkdown;