const inquirer = require('inquirer');

class CLI {
    constructor() {
      this.title = '';

      this.logo = [];
    }}

SVG(){
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'text',
          message: 'text',
        },
        {
          type: 'input',
          name: 'textColor',
          message: 'what color should the text be?',
        },
        {
          type: 'checkbox',
          name: 'shape',
          choices:['Triangle','Circle','Square'],
          message: 'what shape should the logo be?',
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'what color should the logo be?',
          },
      ])
      .then()}

      module.exports = CLI;