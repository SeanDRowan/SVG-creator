const Shapes = require('./shapes.js');


class Square extends Shapes {
  render() {
    `<rect x="10" y="50" width="250" height="150" fill="${color}">` 
  }
}

module.exports = Square;