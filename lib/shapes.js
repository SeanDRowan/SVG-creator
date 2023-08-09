
class Shapes {
    constructor(){
        this.shapeColor = ``;
    }
   
    render() {
      throw new Error('Child class must implement a render() method.');
    }
   setColor(color){
    this.shapeColor= color;
    return this.shapeColor;
   // return `fill="${color}"`
    }}
  
    
  module.exports = Shapes;