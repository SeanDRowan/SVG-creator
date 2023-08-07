const Shapes = require('./shapes.js');


class Triangle extends Shapes {
  render() {
   return `<polygon points="130, 18 244, 182 26, 182" fill="${color}" >`
  }
}

module.exports = Triangle;