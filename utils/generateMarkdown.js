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

  [6.  Code Snippets](##Snippets)

  [7.  Preview](##Preview)

  [8.  Questions](##Questions)

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


  ## Snippets

  Here are Code Snippets from the Javascript used.

  ![Part 1 Javascript](./img/indexjs_part1.png)


  ![Part 2 Javascript](./img/indexjs_part2.png)


  ![Generate Markdown JS](./img/generateMarkdown.png)


  ## Preview
  
  Here is what the sample generated README document would look like.

  ![Preview](./img/Previewpng.png)
  

  ## Questions

  [Github Repository](github.com/${data.Github})

  [Contact](${data.Email})


`;
}
module.exports = generateMarkdown;
