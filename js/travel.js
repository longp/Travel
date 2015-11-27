$(document).ready(function(){

  //carousel interval
  $('.carousel').carousel({

  interval: 3000
  })

  // $("input").on('click', function() {
  //   alert("ye");
    // var text = $(this).html();
    // $(".dropdown-menu ul li").html(text);
    // $(".dropdown-menu").hide();
  // });
  $(".modal-footer .btn-primary").on("click", function(){
    $(this).parents("div.listing").hide();
    $('#myModal').modal('hide')
  });
});