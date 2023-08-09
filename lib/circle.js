const Shapes = require('./shapes.js');


class Circle extends Shapes {
  render(shapeColor) {
    this.setColor(shapeColor)
    console.log(this.shapeColor)
   return `circle cx="125" cy="125" r="75" fill="${this.shapeColor}"`
  }
}

module.exports = Circle;