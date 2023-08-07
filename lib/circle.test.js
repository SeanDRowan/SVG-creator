const Circle = require("./circle");
describe('circle', () => {
const shape = new Circle();
shape.setColor("blue");
expect(shape.render()).toEqual('<circle cx="125" cy="125" r="75" fill="blue" />');
})