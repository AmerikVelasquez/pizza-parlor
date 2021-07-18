//Buisiness logic
function Pizza(topping, size){
  this.topping = topping;
  this.size = size;
  this.price= 0
}
let pizza1 = new Pizza("pepperoni", "large");
let small= 3;
let medium = 4;
let large = 5;

Pizza.prototype.cost = function(){
  if (this.size.includes('large')){
     this.price = 5;
  }
  else if (this.size.includes('medium')){
    this.price = 4;
  }
  else if (this.size.includes('small')){
    this.price = 3;
  }
  if (this.topping > 4){
    this.price += 5;
  }
  else if (this.topping < 2){
    this.price;
  }
  else {
    this.price +=2;
  }
};

