$(document).ready(function(){

  $(".switchBox").click(function(){
    // console.log($(this));
    // console.log();
    $(this).parent().parent().parent().toggleClass('lighting_off');
    $(this).parent().parent().parent().css('background-color', 'rgba(255,255,0,0.5)');
  })


  $(".light_RangeSlider").change(function(){
    // console.log($(this).val());
    // console.log($(this).parent().parent().parent());
    $(this).parent().parent().parent().css('background-color', 'rgba(255,255,0,'+$(this).val()+')');
  });

  var incrementPlus;
  var incrementMinus;

  var buttonPlus  = $(".cart-qty-plus");
  var buttonMinus = $(".cart-qty-minus");

  var incrementPlus = buttonPlus.click(function() {
	   var $n = $(this)
		   .parent(".button-container")
		   .parent(".temp_Button_div")
		   .find(".qty");
	     $n.val(Number($n.val())+1 );
    });

    var incrementMinus = buttonMinus.click(function() {
		    var $n = $(this)
		    .parent(".button-container")
		    .parent(".temp_Button_div")
		    .find(".qty");
	      var amount = Number($n.val());
	      if (amount > 0) {
		    $n.val(amount-1);
	    }
    });

});
