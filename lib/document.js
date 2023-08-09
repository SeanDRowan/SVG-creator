

const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');

function createDocument(text,logo,textColor,shapeColor) {
    logo = logo[0].shape[0]
  console.log(text)
    console.log(logo)
    console.log(textColor)
    console.log(shapeColor)
if(logo == 'Triangle'){
    console.log(shapeColor)
logo = new Triangle().render(shapeColor)
} 
if(logo == 'Circle'){
    logo = new Circle().render(shapeColor)
    } 
if(logo == 'Square'){
    logo = new Square().render(shapeColor)
     } 


    // create shapes in their own files then import them here
    return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
    <svg width="300" height="200" viewBox="-70.5 -70.5 391 391" xmlns="http://www.w3.org/2000/svg" >
    
    <g>
    
        <${logo}/>
          <text x="80" y="140" font-size="50px" fill="${textColor}">${text}</text>
    
    </g>
    </svg>`;
  }
  
  module.exports = { createDocument };