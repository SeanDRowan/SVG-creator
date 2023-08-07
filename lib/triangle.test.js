const Triangle = require("./triangle");
describe('triangle', () => {
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="130, 18 244, 182 26, 182" fill="blue" />');
})