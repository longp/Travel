$(document).ready(function(){

  $(".btn-group").hide();

  //carousel interval
  $('.carousel').carousel({

  interval: 3000

  })

//show search results

//hide body div


  $("#searchbtn").on("click", function(){
    alert("hi");
    $('#bodydiv').removeAttr(hidden);

  });

  // $("input").on('click', function() {
  //   alert("ye");
    // var text = $(this).html();
    // $(".dropdown-menu ul li").html(text);
    // $(".dropdown-menu").hide();
  // });

  debugger;
  $(document).on("click",".modal-footer .btn-primary", function(){
    $(this).parents("div.listing").hide();
    $('#myModal').modal('hide')
  });

  $("#moreOptions").on("click", function(){
    $(".btn-group").fadeToggle();
  })
});