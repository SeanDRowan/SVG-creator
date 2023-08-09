const Shapes = require('./shapes.js');


class Square extends Shapes {
  render(shapeColor) {

    this.setColor(shapeColor)
    console.log(this.shapeColor)
    return `rect x="10" y="50" width="250" height="150" fill="${this.shapeColor}"` 
  }
}

module.exports = Square;