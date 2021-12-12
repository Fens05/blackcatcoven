// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
//const generatePage = require('');

// TODO: Create an array of questions for user input

const questions = 
[ 
    {
        type: 'input',
        name: 'projecttitle',
        message: "What is the Project Title?"
    },
    {
        type: 'input',
        name: 'discription',
        message: 'Discrption of Project'
    },
    {
        type: 'input',
        name: 'table',
        message: 'List the table of contents'

    },
    





//console.log(questions)
// TODO: C{
   // type:'input'ate a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
    if (err) {
        console.error(err)
        return
    }
    else (console.log('readme.generated'))
})
}

//writeToFile('generatedReadMe.md', '')

// TODO: Create a function to initialize app

//function init() {}


inquirer.prompt (questions )
.then((answers) => {
    let generated = `
    ${answers.projecttitle}
    ${answers.discription}
    `
    writeToFile('generatedReadMe.md', generated)

})

