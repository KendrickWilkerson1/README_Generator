// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if ( license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  } else if (license === 'IBM') {
    return '![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)';
  } else if (license === 'GNU') {
    return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if ( license === 'MIT') {
    return 'https://opensource.org/licenses/MIT';
  } else if (license === 'IBM') {
    return 'https://opensource.org/licenses/IPL-1.0';
  } else if (license === 'GNU') {
    return 'https://www.gnu.org/licenses/gpl-3.0';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  } else {
    return `This project uses ${license}`
  };
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
  ${renderLicenseBadge(data.License)}

  ## Table of Content
  * [Description](#decription)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Features](#features)
  * [Contributions](#contributions)
  * [Test](#test)
  
  
  ## Description 
  ${data.Description}

  ## Installation
  ${data.Installation}

  ## Usage
  ${data.Usage}

  ## Credits
  ${data.Credit}

  ## License
  ${data.License}

  ## Features
  ${data.Features}

  ## Contributions
  ${data.Contributions}

  ## Test 
  ${data.Test}

`;
}

export default generateMarkdown;