
//design hide and show content

$(document).ready(function() {
    $("#design").click(function() {
      $("#design-hidden").css("display", "block");
      $("#design").css("display", "none")
      
    });

  });

  $(document).ready(function() {
    $("#design-hidden").click(function() {
      $("#design-hidden").css("display", "none");
      $("#design").css("display", "block")
      
    });

  });

  //development hide and show content

  $(document).ready(function() {
    $("#development").click(function() {
      $("#development-hidden").css("display", "block");
      $("#development").css("display", "none")
      
    });

  });

  $(document).ready(function() {
    $("#development-hidden").click(function() {
      $("#development-hidden").css("display", "none");
      $("#development").css("display", "block")
      
    });

  });

  //product managemrnt hide and show content

  $(document).ready(function() {
    $("#product-management").click(function() {
      $("#product-hidden").css("display", "block");
      $("#product-management").css("display", "none")
      
    });

  });

  $(document).ready(function() {
    $("#product-hidden").click(function() {
      $("#product-hidden").css("display", "none");
      $("#product-management").css("display", "block")
      
    });

  });


  //Projects hover effects

$('#project-1').hover(
    function(){ $('#project-1').css('opacity','1') },
    function(){ $('#project-1').css('opacity','0') }
)

$('#project-2').hover(
  function(){ $('#project-2').css('opacity','1') },
  function(){ $('#project-2').css('opacity','0') }
)

$('#project-3').hover(
  function(){ $('#project-3').css('opacity','1') },
  function(){ $('#project-3').css('opacity','0') }
)

$('#project-4').hover(
  function(){ $('#project-4').css('opacity','1') },
  function(){ $('#project-4').css('opacity','0') }
)


$('#project-5').hover(
  function(){ $('#project-5').css('opacity','1') },
  function(){ $('#project-5').css('opacity','0') }
)

$('#project-6').hover(
  function(){ $('#project-6').css('opacity','1') },
  function(){ $('#project-6').css('opacity','0') }
)

$('#project-7').hover(
  function(){ $('#project-7').css('opacity','1') },
  function(){ $('#project-7').css('opacity','0') }
)

$('#project-8').hover(
  function(){ $('#project-8').css('opacity','1') },
  function(){ $('#project-8').css('opacity','0') }
)

// Alert user their input + message

$(document).ready(function(){
  $("#mc-embedded-subscribe").click(function(){
    var userName = $("#mce-FNAME").val();
    alert( userName +" we have received your message. Thank you for subscribing");

  });
});
