const Shapes = require('./shapes.js');


class Circle extends Shapes {
  render() {
    `<circle cx="125" cy="125" r="75" fill="${color}">`
  }
}

module.exports = Circle;