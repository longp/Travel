$(document).ready(function(){

  //carousel interval
  $('.carousel').carousel({

  interval: 3000
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
  $(".modal-footer .btn-primary").on("click", function(){
    $(this).parents("div.listing").hide();
    $('#myModal').modal('hide')
  });
});