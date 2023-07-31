const inquirer = require('inquirer');
const fs = require('fs/promises');
let licenseBadge;
const questions = [{
  type: 'input',
  name: 'name',
  message: 'What is the project name?'
},
{
  type: 'input',
  name: 'description',
  message: 'Enter project description: '
},
{
  type: 'input',
  name: 'installation',
  message: 'Enter installation instructions: '
},
{
  type: 'input',
  name: 'usage',
  message: 'Enter usage instructions: '
},
{
  type: 'input',
  name: 'screenshot',
  message: 'Enter screenshot adress: '
},
{
  type: 'list',
  name: 'license',
  message: 'Choose license:',
  choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
},
{
  type: 'input',
  name: 'contributing',
  message: 'How to contribute?'
},
{
  type: 'input',
  name: 'tests',
  message: 'Enter tests'
},
{
  type: 'input',
  name: 'github',
  message: 'What is your GitHub?'
},
{
  type: 'input',
  name: 'email',
  message: 'What is your E-mail?'
}
];

function renderReadme(answers) {
  return `# ${answers.name}
  ## Description
  ${answers.description}
  ${licenseBadge}
  ## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Iicense](#Iicense)
- [How to contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${answers.installation}
## Usage
${answers.usage}\n
  ![Screenshot](${answers.screenshot})
## Iicense
${answers.license}
## How to contribute
${answers.contributing}
## Tests
${answers.tests}
## Questions
* Github: ${answers.github}
* E-mail: ${answers.email}
  `
}

inquirer
  .prompt(questions)
  .then((answers) => {
    if (answers.license === 'MIT') {
      licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    } else if (answers.license === 'APACHE 2.0') {
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    } else if (answers.license === 'GPL 3.0') {
      licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    } else if (answers.license === 'BSD 3') {
      licenseBadge = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
    } else {
      licenseBadge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
    };
    const readmeContent = renderReadme(answers)
    fs.writeFile("README.md", readmeContent)
      .then(() => console.log('README.md created'))
      .catch((err) => console.error(err))
  })
// TODO: Create a function to write README file
// function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
// function init() { }

// Function call to initialize app
// init();
