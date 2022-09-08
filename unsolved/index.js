const inquirer = require('inquirer');
const { default: Choices } = require('inquirer/lib/objects/choices');
const fs = require('fs');
inquirer
  .prompt([
    {
      type: 'input',
      message: 'what is the title of your README.md?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'how do you install this app?',
      name: 'install',
    },
    {
      type: 'input',
      message: 'what is the use of this app?',
      name: 'usage',
    },
    {
      type: 'rawlist',
      message: 'what is the license that you used?',
      name: 'license',
      choices: [
        'MIT',
        'GPL',
        'Apache license',
        'GNU',
        'N/A'
      ]
    },
    {
      type: 'input',
      message: 'what are the test instrucions?',
      name: 'test',
    },
    {
      type: 'input',
      message: 'what is your github?',
      name: 'questions',
    },
])
.then((response) => {
    fs.writeFileSync('README.md', JSON.stringify(response))
});