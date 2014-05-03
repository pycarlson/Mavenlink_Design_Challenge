$(document).ready(function(){
  $('#nav-icon').on('click', function(e){
    e.preventDefault();
    $('.sm-nav').slideToggle();
  });
});
