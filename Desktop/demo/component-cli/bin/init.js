const inquirer = require('inquirer');
const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of the component library?',
    default: 'my-component-lib',
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is the description of the component library?',
    default: '',
  },
  // ...
];
inquirer.prompt(questions).then(answers => {
  console.log(answers);
});
