
const Square = require("./square");
describe('square', () => {
const shape = new Square();
it("checks if color makes it to shape",()=>{
    //shape.setColor("blue");
expect(shape.render('blue')).toEqual('rect x="10" y="50" width="250" height="150" fill="blue"');
})
})