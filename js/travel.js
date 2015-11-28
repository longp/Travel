$(document).ready(function(){

  //carousel interval
  $('.carousel').carousel({

  interval: 3000
<<<<<<< HEAD
})



//show search results

//hide body div


$("#searchbtn").on("click", function(){
  alert("hi");
  $('#bodydiv').removeAttr(hidden);



});







=======
  })

  //date picker
  // $(function() {
  //   var today = new Date();
    
  //   $('#from-datepicker').datetimepicker({
  //     language: 'pt-BR',
  //     startDate: today
  //   });
    
  //    $('#to-datepicker').datetimepicker({
  //     language: 'pt-BR'
  //   });     
  // });

  // $("input").on('click', function() {
  //   alert("ye");
    // var text = $(this).html();
    // $(".dropdown-menu ul li").html(text);
    // $(".dropdown-menu").hide();
  // });
<<<<<<< HEAD
>>>>>>> 895280fb0d97f248e785017bc31ce70fcd149bbf
=======
  $(".modal-footer .btn-primary").on("click", function(){
    $(this).parents("div.listing").hide();
    $('#myModal').modal('hide')
  });
>>>>>>> master
});