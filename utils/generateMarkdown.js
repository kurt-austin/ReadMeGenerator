// function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.Title} ![](${data.Picture})

  ## Description 
  ${data.Description}

  ## Table of Contents
  [1.  Installation](##Installation) 

  [2.  Usage](##Usage)

  [3.  License](##License)

  [4.  Contributing](##Contributing)

  [5.  Tests](##Tests)

  [6.  Questions](##Questions)

  ## Installation
  ${data.Installation}


  ## Usage
  ${data.Usage}


  ## License
  ${data.License}

  ${data.Text}

  ${data.Text2}

  ${data.Text3}


  ## Contributing
  ${data.Contributing}


  ## Tests
  ${data.Tests}


  ## Questions

  [Github Repository](github.com/${data.Github})

  [Contact](${data.Email})


`;
}
module.exports = generateMarkdown;
