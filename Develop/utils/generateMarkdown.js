function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT License':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    case 'GPL License':
    case 'GNU License':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'Apache License':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    default:
      return 'N/A';
  }
};


function renderLicenseSection(license) {
  return license === 'N/A' ? ' ' : `## License: 
${license}`;
}


function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `
# ${data.title}
${licenseBadge}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${licenseSection}

## Contributing

${data.contributions}

## Tests

${data.tests}

## Credits

${data.credits}


## Questions

If you have any questions, please contact me at ${data.email}, or use the link to find me on Github! [https://www.github.com/${data.github}](https://www.github.com/${data.github})
`;
}




module.exports = generateMarkdown;
