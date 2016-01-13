$(document).ready(function(){
  $(".btn-group2").hide();
  $(".listing").hide();
  $(".alert").hide();
  //enable popovers
  $(function popOver(){
    $('[data-toggle="popover"]').popover();
  });
  //carousel interval
  $('.carousel').carousel({
    interval: 3000
  });
  //show search results 
  $("#btnsearch").on("click", function(e){
    e.preventDefault();
    amenResult();
    var city = $("#city").val();
    if (city === ""){
      $(".alert").show();
      return;
    } else if (city === "London"){
      $(".listing.ld").show();
      $(".listing").not(".ld").hide();
    }else if (city === "Paris"){
      $(".listing.pa").show();
      $(".listing").not(".pa").hide();
    }else if (city === "Tokyo"){
      $(".listing.tk").show();
      $(".listing").not(".tk").hide();
    }else if (city === "New York City"){
      $(".listing.ny").show();
      $(".listing").not(".ny").hide();
    }else if (city === "Hong Kong"){
      $(".listing.hk").show();
      $(".listing").not(".hk").hide();
    }
  });
  //amenity result
  function amenResult() {
    $(".amenitiesOptions li input").on("click", function(){
      var amenitiesVal = $(this).val();
      $(".amenities").append(amenitiesVal + ", ");
    });
  }
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