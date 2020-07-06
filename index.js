const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const genMd = require ("./utils/generateMarkdown.js");
const generateMarkdown = require("./utils/generateMarkdown.js");

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




