
//pizza products selections

$(document).ready(function() {
    $("#pizza-size").click(function() {
      $("#pizza-select").toggle();
      
    });

    $("#crust").click(function() {
      $("#crust-type").toggle();
      
    });

    $("#toppings").click(function() {
      $("#toppings-type").toggle();
      
    });

    $("#drink").click(function() {
      $("#drink-type").toggle();
      
    });

    $("#del-point").click(function() {
      $("#del-station").toggle();
      
    });

    $("#add-order").click(function() {
      event.preventDefault();

      //collecting users input
  
      var pizzaSize = $("input[name='size']:checked").val();
      var crust = $("input[name='crust']:checked").val();
      var topping = $("input[name='topping']:checked").val();
      var drink = $("input[name='drink']:checked").val();

      //checking for undefined input

      if(pizzaSize == undefined){
        alert("Please select the size of the pizza");
        return false;
      }

       else if(crust == undefined){
        alert("Please select the size of the pizza");
        return false;
      }

      else if(topping == undefined){
        alert("Please select the size of the pizza");
        return false;
      }

      else if(drink == undefined){
        alert("Please select the size of the pizza");
        return false;
      }

      else{
        console.log(pizzaSize,crust,topping,drink)

      }


      //Prise allocation

      if(pizzaSize == "small"){
        var price = 500;
      }

      if(pizzaSize == "medium"){
        var price = 750;
      }

      if(pizzaSize == "large"){
        var price = 950;
      }

      //initializing an object

      function Order (pizzaSize, crust, topping, drink) {
      this.orderSize = pizzaSize;
      this.orderCrust = crust;
      this.orderTopping = topping;
      this.orderDrink = drink;
      }

      var newOrder = new Order(pizzaSize, crust, topping, drink);

      $("ul#order-display").append("<li><span>" + newOrder.orderSize + "</span> - <span> " + price + " </span></li>");

      $("input[name='size']:checked").val("");
      $("input[name='crust']:checked").val("");
      $("input[name='topping']:checked").val("");
      $("input[name='drink']:checked").val("");
  
    });

  });



