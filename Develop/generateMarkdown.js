// generateMarkdown.js

function renderLicenseBadge(license) {
  if (!license) {
      return '';
  }

  switch (license) {
      case 'MIT':
          return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      case 'GPLv3':
          return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      case 'AGPL':
          return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
      default:
          return '';
  }
}

function renderLicenseLink(license) {
  if (!license) {
      return '';
  }

  switch (license) {
      case 'MIT':
          return '(https://opensource.org/licenses/MIT)';
      case 'GPLv3':
          return '(https://www.gnu.org/licenses/gpl-3.0)';
      case 'AGPL':
          return '(https://www.gnu.org/licenses/agpl-3.0)';
      default:
          return '';
  }
}

function renderLicenseSection(license) {
  if (!license) {
      return '';
  }
  return `## License

This project is covered under the ${license} license. For more information see [the following link]${renderLicenseLink(license)}`;
}

function generateMarkdown(answers) {
  const licenseBadge = renderLicenseBadge(answers.license);
  const licenseSection = renderLicenseSection(answers.license);
  
  return `
# ${answers.title }



${licenseBadge}

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

${licenseSection}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For any questions, feel free to contact me at ${answers.email} or [visit my Github Profile.](https://www.github.com/${answers.github})
`;
}

module.exports = {
    renderLicenseBadge,
    renderLicenseLink,
    renderLicenseSection,
    generateMarkdown,
};

