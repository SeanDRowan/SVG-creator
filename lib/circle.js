const Shapes = require('./shapes.js');


class Circle extends Shapes {
  render() {
    let shapeColor = 'x';
   return `circle cx="125" cy="125" r="75" fill="${shapeColor}"`
  }
}

module.exports = Circle;