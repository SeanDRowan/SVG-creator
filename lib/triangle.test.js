const Triangle = require("./triangle");
describe('triangle', () => {

const shape1 = new Triangle();
it("checks if color makes it to shape",()=>{
    expect(shape1.render('blue')).toEqual('polygon points="130, 18 244, 182 26, 182" fill="blue"')
})
//shape1.setColor('blue') 


});