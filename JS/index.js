
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

    $("#del-point").click(function() {
      $("#del-station").toggle();
      
    });

    $("#add-order").click(function() {
      event.preventDefault();

      //collecting users input
  
      var pizzaSize = $("input[name='size']:checked").val();
      var crust = $("input[name='crust']:checked").val();
      var topping = $("input[name='topping']:checked").val();

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

      else{
        console.log(pizzaSize,crust,topping)

      }


      //Prise allocation for pizza

      if(pizzaSize == "small"){
        var price = 500;
      }

      if(pizzaSize == "medium"){
        var price = 750;
      }

      if(pizzaSize == "large"){
        var price = 950;
      }

      //Prise allocation for crust

      if(crust == "crispy"){
        var crustPrice = 500;
      }

      if(crust == "stuffed"){
        var crustPrice = 750;
      }

      if(crust == "glutten-free"){
        var crustPprice = 950;
      }

      //Prise allocation for topping

      if(topping == "pepperoni"){
        var toppingPrice = 500;
      }

      if(topping == "mushroom & chicken"){
        var toppingPrice = 750;
      }

      if(topping == "bacon"){
        var toppingprice = 950;
      }

      if(topping == "extra-cheesy"){
        var toppingPrice = 950;
      }



      //initializing an object

      function Order (pizzaSize, crust, topping) {
      this.orderSize = pizzaSize;
      this.orderCrust = crust;
      this.orderTopping = topping;
      }

      var newOrder = new Order(pizzaSize, crust, topping);

      //displaying object data

      $("div#order-display").append(
        
        "<div class='side'>" +
        "<ul>" +
        "<li><span>Pizza Size</span><span>" + newOrder.orderSize + "</span> - <span> " + price + " </span></li>" +
        "<li><span>Pizza Crust</span><span>" + newOrder.orderCrust + "</span> - <span> " + price + " </span></li>" +
        "<li><span>Pizza Topping</span><span>" + newOrder.orderTopping + "</span> - <span> " + price + " </span></li>" +
        "</ul>" +
        "</div>"
      );

      $("input[name='size']:checked").val("");
      $("input[name='crust']:checked").val("");
      $("input[name='topping']:checked").val("");
  
    });

  });



