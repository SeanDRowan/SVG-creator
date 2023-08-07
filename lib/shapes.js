
class Shapes {
    constructor(shape) {
        this.shape = shape;
          }
   
    render() {
      throw new Error('Child class must implement a render() method.');
    }
   setColor(shapeColor){
    console.log(shapeColor)
    return `fill="${shapeColor}"`
    }}
  
    
  module.exports = Shapes;