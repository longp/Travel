$(document).ready(function(){

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








  $(".modal-footer .btn-primary").on("click", function(){
    $(this).parents("div.listing").hide();
    $('#myModal').modal('hide')
  });

});