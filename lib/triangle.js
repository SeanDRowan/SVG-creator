const Shapes = require('./shapes.js');


class Triangle extends Shapes {

  
  render(){
   return `polygon points="130, 18 244, 182 26, 182" fill="${this.setColor(this.color)}"`
  }
}

module.exports = Triangle;