$(document).ready(function(){

  //carousel interval
  $('.carousel').carousel({
  interval: 3000
  })

  //date picker
  $(function() {
    var today = new Date();
    
    $('#from-datepicker').datetimepicker({
      language: 'pt-BR',
      startDate: today
    });
    
     $('#to-datepicker').datetimepicker({
      language: 'pt-BR'
    });     
  });
});