
const Square = require("./square");
describe('square', () => {
const shape = new Square();
shape.setColor("blue");
expect(shape.render()).toEqual('<rect x="10" y="50" width="250" height="150" fill="blue" />');
})