
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

    //Displaying user input

    $(document).ready(function() {

    $("#add-order").click(function() {

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
        var price = 200;
      }

      if(pizzaSize == "medium"){
        var price = 300;
      }

      if(pizzaSize == "large"){
        var price = 400;
      }

      //Prise allocation for crust

      if(crust == "crispy"){
        var crustPrice = 150;
      }

      if(crust == "stuffed"){
        var crustPrice = 250;
      }

      if(crust == "glutten-free"){
        var crustPprice = 300;
      }

      //Prise allocation for topping

      if(topping == "pepperoni"){
        var toppingPrice = 150;
      }

      if(topping == "mushroom & chicken"){
        var toppingPrice = 300;
      }

      if(topping == "bacon"){
        var toppingprice = 400;
      }

      if(topping == "extra-cheesy"){
        var toppingPrice = 450;
      }


      // getting total price

      var total = price + crustPrice + toppingPrice;
      alert(total);
    
      //initializing an object

      function Order (pizzaSize, crust, topping,total) {
      this.orderSize = pizzaSize;
      this.orderCrust = crust;
      this.orderTopping = topping;
      this.cost = total;
      }

      var newOrder = new Order(pizzaSize, crust, topping, total);

      var storedData = JSON.stringify(Order);
      localStorage.setItem("Order", storedData)
      

      //displaying object data

      $("div#order-display").append(
        
        "<div class='side'>" +
        "<ul>" +
        "<li><span>Pizza Size</span><span>" + newOrder.orderSize + "</span> - <span> " + price + " </span></li>" +
        "<li><span>Pizza Crust</span><span>" + newOrder.orderCrust + "</span> - <span> " + crustPrice + " </span></li>" +
        "<li><span>Pizza Topping</span><span>" + newOrder.orderTopping + "</span> - <span> " + toppingPrice + " </span></li>" +
        "</ul>" +
        "</div>"
      );

      $("input[name='size']:checked").val("");
      $("input[name='crust']:checked").val("");
      $("input[name='topping']:checked").val("");

  });
    

});

$(document).ready(function() {

  let retrivedData = localStorage.getItem("newOrder");
  var restoredData = JSON.parse(retrivedData);


  $("#total-order-charge").html(restoredData.cost + "KSH");

      //Assining delivary points charge

    $("#addlocation").click(function() {

      var delivery = prompt("Please enter the delivery point you prefer");

      alert("Your order will be delivered to " + delivery);
      
      if(delivery == null){
        var charge = 0;
      }
      else{
        var charge = 200;
      }
      
      var totalCharges =  restoredData.cost + charge;
      $("#all-total").html(totalCharges + "KSH");

    });
    
    
  

});




});

