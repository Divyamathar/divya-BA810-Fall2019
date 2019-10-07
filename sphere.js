
function sphere(radius){
   
    this.radius = radius;
    this.volume = function(){
        return 4 * Math.PI * (this.radius ** 3) /3;
            }
          }
let sphere1=new sphere(3);
console.log (sphere1.volume());

module.exports =sphere;
