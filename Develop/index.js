// index.js
const inquirer = require('inquirer');
const fs = require('fs');

// Import functions from generateMarkdown.js
const {
    renderLicenseBadge,
    renderLicenseLink,
    renderLicenseSection,
    generateMarkdown,
} = require('./generateMarkdown');

// Array of questions for user input
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
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log(`Successfully created ${fileName}!`);
    });
}

function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateMarkdown(answers);
        writeToFile('README.md', readmeContent);
    });
}

// Call the init function
init();
