//Buisiness logic
function Pizza(topping, size){
  this.topping = topping;
  this.size = size;
  this.price= 0
}

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
  if (this.topping > 3){
    this.price += 5;
  }
  else if (this.topping < 2){
    this.price;
  }
  else {
    this.price +=2;
  }
};

$(document).ready(function() {
  $("#order").submit(function(event) {
    event.preventDefault();
    const userSize= $("#size").val();
    const userAmount=parseInt($("#amount").val());
    let pizza = new Pizza(userAmount, userSize);
    pizza.cost(pizza);
    $("#result").text(pizza);
    $("#final").show();
  });
});