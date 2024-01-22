// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// add markdown syntax readme template
// table of contents after title, before content
function generateMarkdown(data) {
  return `# ${data.title}
  ##By ${data.user}
  \
  ## What This Application Does\
  ${data.desc}
  \
  ## Installation Instructions\
  ${data.install}
  \
  ## Usage\
  ${data.usage}
  \
  ## Contributing\
  ${data.cont}
  \
  ## Testing Instructions\
  ${data.test}
`;
}

module.exports = generateMarkdown;
