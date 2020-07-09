// Define Variables and include packages.

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const genMd = require ("./utils/generateMarkdown.js");
const generateMarkdown = require("./utils/generateMarkdown.js");
const licMIT = "https://img.shields.io/badge/License-MIT-blue.svg";
const licCC = "https://img.shields.io/badge/License-CC--0-blue.svg";
const licGPL = "https://img.shields.io/badge/License-GPLv3-blue.svg";
const textMIT = "Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:"

const textMIT2 = "The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software."

const textMIT3 = "THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."

const textCC = "The Creative Commons CC0 Public Domain Dedication waives copyright interest in a work you've created and dedicates it to the world-wide public domain. Use CC0 to opt out of copyright entirely and ensure your work has the widest reach. As with the Unlicense and typical software licenses, CC0 disclaims warranties. CC0 is very similar to the Unlicense.  Please see https://choosealicense.com/licenses/cc0-1.0/ for more information."

const textGPL = "This version of the GNU Lesser General Public License incorporates the terms and conditions of version 3 of the GNU General Public License.  Refer to https://choosealicense.com/licenses/lgpl-3.0/ for more information."

// array of questions for user
const questions = [
   {   
       type: "input",
       message: "What is the Project Title?",
       name: "Title"
   },
    {
       type: "input",
       message: "Please enter a description.",
       name: "Description"
   },
   {
     type: "input",
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
       type: "input",
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
     
// Depending upon license chosen, different badge and license will appear in the generated README.        
      switch(answers.License){
        case "MIT":
          answers["Picture"] = licMIT;
          answers["Text"] = textMIT; 
          answers["Text2"] = textMIT2;
          answers["Text3"] = textMIT3;
        break;
        case "CC0-1.0":
          answers["Picture"] = licCC;
          answers["Text"] = textCC; 
          answers["Text2"] ="";
          answers["Text3"] ="";
        break;
        case "GNU GPLv3":
          answers["Picture"] = licGPL;
          answers["Text"] = textGPL; 
          answers["Text2"] ="";
          answers["Text3"] ="";
      };
       
        const genMdFile = generateMarkdown(answers);
        writeToFile("README.md",genMdFile);
     
      } catch(err) {
        console.log(err);
      }
}

// function call to initialize program
init();
