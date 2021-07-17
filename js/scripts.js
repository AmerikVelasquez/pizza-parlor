//Buisiness logic
function Pizza(topping, size){
  this.topping = topping;
  this.size = size;
}
let pizza1 = new Pizza("pepperoni", "large");
let small= 3;
let medium = 4;
let large = 5;

Pizza.prototype.price = function(){
  if (this.topping.includes("large")){
    return large;
    console.log(this.topping); 
  }
  return NaN;
};