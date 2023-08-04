const CLI = require('./cli.js');

class Shapes {
    constructor(children = []) {
      this.children = children;
    }
    render() {
      throw new Error('Child class must implement a render() method.');
    }
   
      return this.children
        .map((child) => {
          if (typeof child === 'string') {
            return child;
          }
          return child.render();
        })
        .join('');
    }
  
  
  module.exports = Shapes;