const Triangle = require("./triangle");
describe('triangle', () => {



it("checks if color makes it to shape",()=>{
    const shape1 = new Triangle();
    shape1.setColor('blue') 
    expect(shape1.render()).toEqual('polygon points="130, 18 244, 182 26, 182" fill="blue"')
})



});