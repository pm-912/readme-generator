// Renders a badge for the license, if applicable
function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  } else {
    return `![License: MIT](https://img.shields.io/badge/License-${license}-yellow.svg)`;
  }
}

// Renders a link to the license's corresponding website, if applicable
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

// Renders the license section onto the readme, if applicable.
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else {
    return `## Licensing
  This application is licensed by ${license}.`
  }
}

// This is what creates the content of the markdown file.
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

// Makes the generateMarkdown function available when required by other files
module.exports = generateMarkdown;
