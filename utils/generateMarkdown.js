// function for license
function createLicense(license) {
  if (license !== "None") {
    return (
      `## License 
      ${license}`
    )
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.repoName}

## Description
${data.description}

## GitHub Name
${data.gitHubName}

## Installation
${data.installApp}

## Instructions
${data.appInstructions}

## Issues
${data.appIssuesAndCont}

## Contributers
${data.contributors}


`;
}

module.exports = generateMarkdown;
