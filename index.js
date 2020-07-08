const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const genMd = require ("./utils/generateMarkdown.js");
const generateMarkdown = require("./utils/generateMarkdown.js");

//[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
//[![CC-0 license](https://img.shields.io/badge/License-CC--0-blue.svg)](https://creativecommons.org/licenses/by-nd/4.0)
//[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)

// array of questions for user
const questions = [{
      type: "input",
      message: "What is the Project Title?",
      name: "Title"
  },
     {
      type: "editor",
      message: "Please enter a description.",
      name: "Description"
  },
  {
    type: "editor",
    message: "Installation Instructions:",
    name: "Installation"
  },
  {
    type: "list",
    message: "License:",
    name: "License",
    choices: ["MIT","CC0-1.0","GNU GPLv3"]
  },
  {
      type: "input",
      message: "Usage Information:",
      name: "Usage"
    },
    {
      type: "input",
      message: "Contribution Guidelines:",
      name: "Contributing"
    },
    {
      type: "editor",
      message: "Test Instructions:",
      name: "Tests"
    },
    {
       type: "input",
       message: "What is my Github username?",
       name: "Github"
     },
    {
      type: "input",
      message: "What is my email address?",
      name: "Email"
    }
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName,data, function(err){
    if (err) {
      return console.log(err);
    }
    console.log("Success!");
  });
 
}

// function to initialize program
async function init() {
    try {
        const answers = await inquirer.prompt(questions);
        const genMdFile = generateMarkdown(answers);
        writeToFile("README.md",genMdFile);
     
      } catch(err) {
        console.log(err);
      }
}

// function call to initialize program
init();




