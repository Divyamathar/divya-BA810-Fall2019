

function Shape(){

    let shape = [];
  
    shape.addShape = function (newShape) {
        shape.push(newShape);
    }

    shape.volume = function () {
        let totalVolume = 0;
        shape.forEach(item => {
            totalVolume = totalVolume + item.volume();
        });

        return totalVolume;
    }
    return shape;
}
let Sphere = require ('./sphere');
let shape1 = new Sphere(8);

let Cone = require ('./cone');     
let shape2 = new Cone(5,10);  

let shapes = Shape();
shapes.addShape(shape1);
shapes.addShape(shape2);

console.log(shapes.volume());