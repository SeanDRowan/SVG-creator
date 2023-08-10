const Shapes = require('./shapes.js');


class Square extends Shapes {
  render() {

    return `rect x="10" y="50" width="250" height="150" fill="${this.setColor(this.color)}"` 
  }
}

module.exports = Square;