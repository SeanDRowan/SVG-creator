const Shapes = require('./shapes.js');


class Triangle extends Shapes {
    constructor(shape){
        super(shape)};
     

  render(shapeColor) {
   return `polygon points="130, 18 244, 182 26, 182" ${this.setColor(shapeColor)} `
  }
}

module.exports = Triangle;