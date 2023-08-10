
class Shapes {
    constructor(shapeColor){
     this.shapeColor = shapeColor;
    }
  
    render() {
      throw new Error('Child class must implement a render() method.');
    }
   setColor(scolor){
    if(this.shapeColor){
     this.color = this.shapeColor}
     else{
      this.color = scolor
      console.log(scolor)
     }

    return this.color;
  
    }}
  
    
  module.exports = Shapes;