// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = ([
  {
    type: 'input',
    name: 'Title',
    message: 'What"s the title of your project?',
  },  
  {  
    type: 'input',
    name: 'Description',
    message: 'Provide a brief decription decribing your motivation?',
  }, 
  {
    type: 'input',
    name: 'Installation',
    message: 'What are the steps to install?',
  },
  {
    type: 'input',
    name: 'Usage',
    message: 'Prodive instructions and examples for use.'
  },
  {
    type: 'input',
    name: 'Credits',
    message: 'List any collaborators GitHub profiles.',
  },
  {
    type:'list',
    name:'License',
    message: 'Which license did you use?',
    choices: ['MIT', 'IBM', 'GNU', 'None']
  },
  { type: 'input',
    name: 'Features',
    message: 'If your project has a lot of features, list them here',
  },
  {
    type: 'input',
    name: 'Contributions',
    message: 'If you created an application or package and would like other developers to contribute to it, include guidelines for how to do so here.',
  },
  {
    type: 'input',
    name: 'Test',
    message: 'Provide examples on how to run test here.'
  }
]);


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err){
    if (err) throw err;
    console.log('README Created!')
  })
}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(
    questions
  )
  .then((answers) => {
    console.log(generateMarkdown(answers));
    writeToFile('EXAMPLE-README.md',generateMarkdown(answers))
  })
}

// Function call to initialize app
init();