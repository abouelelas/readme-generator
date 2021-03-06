// function for license
function createLicense(license) {
  if (license !== "None") {
    return (
      ` return [# ${data.repoName} ![${data.title}](https://img.shields.io/github/license/${data.user}/${data.title})\n

      `
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
