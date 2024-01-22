// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license === 0) {
    return "";
  } else {
    // https://img.shields.io/badge/
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license === 0) {
    return "";
  } else {
    //link the license
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license === 0) {
    return "";
  } else {
    // ??
  }
}

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
  ## Usage\
  ${data.usage}
  \
  ## Installation Instructions & Software Requirements\
  ${data.install}
  \
  ## Contributing\
  ${data.cont}
  \
  ## Licensing\
  ${data.license}
  \
  ## Testing Instructions\
  ${data.test}
  \
  ## Contact Info
  <${data.contact}>
`;
}

module.exports = generateMarkdown;
