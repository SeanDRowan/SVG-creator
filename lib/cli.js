const { error } = require('console');
const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const { createDocument } = require('./document');

class CLI {
    constructor() {
      this.text = '';
      this.logo = [];
      this.shapeColor = '';
     
    }

svg() {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'text',
          message: 'enter logo text, must be less than three characters in length',
        },
        {
          type: 'input',
          name: 'textColor',
          message: 'enter text color',
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
            message: 'enter backround color',
          },
      ])
      .then(( { text,shape,shapeColor,textColor } ) => {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
      if(this.text.length > 3){
        throw error('text must not be longer than three characters') 
      }
      this.logo.push({ shape });
    
      })
      .then(() => {
        writeFile( './examples/example.svg',
        createDocument(this.text, this.logo,this.textColor,this.shapeColor),function (err) {
            if(err){throw err;}
        })
})
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
    }}


      module.exports = CLI;