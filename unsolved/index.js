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
      message: 'what is a discription of your app?',
      name: 'discription',
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
      message: 'what is your E-mail?',
      name: 'questions2',
    },
    {
      type: 'input',
      message: 'what is your github?',
      name: 'questions1',
    },
    {
      type: 'input',
      message: 'who helped make this app?',
      name: 'Contributing',
    },
    {
      type: 'input',
      message: 'how do you test the app?',
      name: 'tests',
    },
])

.then(({
  title, install, usage, Contributing, tests, questions1, license, discription,
  questions2,
}) => {

const template =`# ${title}
  ## License:
  https://img.shields.io/apm/l/readme
  ## Table of Contents
  *[discription](#discription)
  *[Installation](#install)
  *[Usage](#usage)
  *[License](#license)
  *[Contributing](#Contributing)
  *[Tests](#tests)
  *[Questions](#questions)

  ## discription:
  ${discription}
  ## Installation:
  ${install}
  ## Usage
  ${usage}
  ## License
  ${license}
  ## Contributing
  ${Contributing}
  ## Tests
  ${tests}
  ## Questions
  *${questions1}
  *${questions2}
  `
createNewFile(title,template);
});
function createNewFile(fileName,data){
  fs.writeFile(`./${fileName.toLowerCase().split('').join('')}.md`,data,(err)=>{
    if(err){
      console.log(err)
    }
    console.log('you are compleate');
})}