const Shapes = require('./shapes.js');


class Triangle extends Shapes {
 
  render(shapeColor) {
    this.setColor(shapeColor)
    console.log(this.shapeColor)
   return `polygon points="130, 18 244, 182 26, 182" fill="${this.shapeColor}"`
  }
}

module.exports = Triangle;