
function cone(radius,height){
   
    this.radius = radius;
    this.height = height;
    this.volume = function(){
        return Math.PI * this.radius** 2 * this.height/3;
            }
          }
let cone1=new cone(5,3);
console.log (cone1.volume());

module.exports =cone;

