import stuffs from './stuffs/stuffs.js';

// stage registration
const Stage = stuffs.stage;

let stage = new Stage();
stage.register();


//shape registration
const shapes = stuffs.shapes;

shapes.forEach(Shape => {
  let shape = new Shape();
  shape.register();
});
