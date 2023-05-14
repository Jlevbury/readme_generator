// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    { type: 'input', name: 'title', message: 'What is your project title?' },
    { type: 'input', name: 'description', message: 'Enter a description for your project:' },
    { type: 'input', name: 'installation', message: 'Enter the installation instructions:' },
    { type: 'input', name: 'usage', message: 'Enter usage information:' },
    { type: 'input', name: 'contributing', message: 'Enter contribution guidelines:' },
    { type: 'input', name: 'tests', message: 'Enter test instructions:' },
    { type: 'list', name: 'license', message: 'Choose a license for your application:', choices: ['MIT', 'GPLv3', 'AGPL'] },
    { type: 'input', name: 'github', message: 'Enter your GitHub username:' },
    { type: 'input', name: 'email', message: 'Enter your email address:' }
];

function writeToFile(fileName, data) {
    try {
        fs.writeFileSync(fileName, data);
        console.log(`Successfully created ${fileName}!`);
    } catch(err) {
        console.error(err);
    }
}

function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateMarkdown(answers);
        writeToFile('README.md', readmeContent);
    });
}

init();

function generateMarkdown(answers) {
    // Define the functions renderLicenseBadge() and renderLicenseSection() here...
    const licenseBadge = renderLicenseBadge(answers.license);
    const licenseSection = renderLicenseSection(answers.license);

    return `# ${answers.title} ${licenseBadge}

    ${answers.description}

    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    ${licenseSection}
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)

    ## Installation
    ${answers.installation}

    ## Usage
    ${answers.usage}

    ## Contributing
    ${answers.contributing}

    ## Tests
    ${answers.tests}

    ## Questions
    For any questions, feel free to contact me at ${answers.email} or [visit my Github Profile.](https://www.github.com/${answers.github})`;
}
function renderLicenseSection(license) {
    if (!license) {
        return '';
    }

    return `## License

This project is covered under the ${license} license. For more information, please visit ${renderLicenseLink(license)}
`;
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
