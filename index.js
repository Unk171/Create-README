const inquirer = require('inquirer');
const fs = require('fs/promises');
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
},

];

function renderReadme(answers) {
  return `<h1 align="center">${answers.name}</h1>
  ## Description
  ${answers.description}
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
${answers.usage}
  ![Screenshot](${answers.screenshot})
## Iicense
${answers.license}
## How to contribute
${answers.contributing}
## Tests
${answers.tests}
## Questions
Github: ${answers.github}
E-mail: ${answers.email}
  `
}

inquirer
  .prompt(questions)
  .then((answers) => {

    const readmeContent = renderReadme(answers)
    fs.writeFile("README.md", readmeContent)
      .then(() => console.log('README.md created'))
      .catch((err) => console.error(err))
    console.log("answers:", answers);

  })
// TODO: Create a function to write README file
// function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
// function init() { }

// Function call to initialize app
// init();
