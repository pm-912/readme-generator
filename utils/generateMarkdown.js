// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  } else {
    return `![License: MIT](https://img.shields.io/badge/License-${license}-yellow.svg)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return "";
  } else if (license === "GPLv3") {
    return `[GPLv3](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license === "BSD_2--Clause") {
    return `[BSD 2-Clause License](https://opensource.org/licenses/BSD-2-Clause)`
  } else if (license === "MIT") {
    return `[MIT License](https://opensource.org/licenses/MIT)`
  } else {
    return `[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else {
    return `## Licensing
  This application is licensed by ${license}.`
  }
}

// TODO: Create a function to generate markdown for README
// add markdown syntax readme template
// table of contents after title, before content
function generateMarkdown(data) {
  return `# ${data.title}
##By ${data.user}
  
## Table of Contents
  1.[Application Description](#description)
  2.[Usage](#usage)
  3.[Installation Instructions](#installation)
  4.[Licenses](#licensing)
  5.[Testing Inscructions](#testing)
  6.[How to Contribute](#contributing)
  7.[Contact Info](#contact)

## Description
  ${data.description}
  
## Usage
  ${data.usage}
  
## Installation
  ${data.install}

  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  
## Testing
  ${data.test}

## Contributing
  ${data.contrib}

## Contact
  [${data.github}'s GitHub](https://github.com/${data.github})

  <a href = "mailto:${data.email}" > Email</a>
  `;
}

module.exports = generateMarkdown;
