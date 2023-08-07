const CLI = require('./cli.js');

class Shapes {
    constructor(shape) {
      CLI.shape = shape;
    CLI.shapeColor = color;
    }
    render() {
      throw new Error('Child class must implement a render() method.');
    }
   renderShape(){
    

    //pulled from example, may not be neccecarry 
      return this.children
        .map((child) => {
          if (typeof child === 'string') {
            return child;
          }
          return child.render();
        })
        .join('');
    }}
  
    console.log(Shapes.shape)
    console.log(Shapes.color)
  module.exports = Shapes;