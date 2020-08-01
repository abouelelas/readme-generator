// function for license
function createLicense(license) {
  if (license !== "None") {
    return (
      ` return [![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](${generateProjectUrl(github, title)})`
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
