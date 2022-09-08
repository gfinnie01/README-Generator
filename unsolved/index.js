const inquirer = require('inquirer');
const { default: Choices } = require('inquirer/lib/objects/choices');
const fs = require('fs');
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What languages do you know?',
      name: 'password',
    },
    {
      type: 'input',
      message: 'What is your preferred method of communication?',
      name: 'confirm',
    },
])
.then((response) => {
    fs.writeFileSync('README.md', JSON.stringify(response))
});