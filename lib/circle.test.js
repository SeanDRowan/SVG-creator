const Circle = require("./circle");
describe('circle', () => {
const shape = new Circle();
it("checks if color makes it to shape",()=>{
//shape.setColor("blue");
expect(shape.render('blue')).toEqual('circle cx="125" cy="125" r="75" fill="blue"');
})
})