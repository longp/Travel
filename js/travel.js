$(document).ready(function(){


  $(".btn-group2").hide();

  //enable popovers
  $(function () {
    $('[data-toggle="popover"]').popover()
  });
  
  //carousel interval
  $('.carousel').carousel({

  interval: 3000

  });



  

//show search results 
  //not working
$("btnsearch").on("click", function(){
  alert("hi");
});




  //amenity result
  function amenResult () {
  $("#op1").one("click", function(){
    var freebf = "Free Breakfast";
    $(".amenities").append(freebf + ", ");
  });
  $("#op2").one("click", function(){
    var pool = "Pool";
    $(".amenities").append(pool + ", ");
  });
  $("#op3").one("click", function(){
    var freepark = "Free Parking";
    $(".amenities").append(freepark + ", ");
  });
  $("#op4").one("click", function(){
    var freewifi = "Free Wifi";
    $(".amenities").append(freewifi + ", ");
  });
  $("#op5").one("click", function(){
    var laundry = "Laundry";
    $(".amenities").append(laundry + ", ");
  });
  $("#op6").one("click", function(){
    var spa = "Spa";
    $(".amenities").append(spa + ", ");
  });
}



  


  // $("input").on('click', function() {
  //   alert("ye");
    // var text = $(this).html();
    // $(".dropdown-menu ul li").html(text);
    // $(".dropdown-menu").hide();
  // });

  $('.selectpicker').selectpicker();

  $('.selectpicker').selectpicker({
      style: 'btn-info',
      size: 4
  });

  // debugger;
  $(document).on("click",".modal-footer .btn-primary", function(){
    $(this).parents("div.listing").hide();
    $('.modal').modal('hide')
  });

  //show advanced search option buttons
  $("#moreOptions").on("click", function(){
    $(".btn-group2").fadeToggle();
  });

});