// function for license
function createLicense(license) {
  if (license !== "None") {
    return (
      ` return [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

      Mozilla)`
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

## Email
${data.appEmail}

## Contributers
${data.contributors}


`;
}

module.exports = generateMarkdown;
