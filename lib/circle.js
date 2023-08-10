const Shapes = require('./shapes.js');


class Circle extends Shapes {
  render() {
   return `circle cx="125" cy="125" r="75" fill="${this.setColor(this.color)}"`
  }
}

module.exports = Circle;