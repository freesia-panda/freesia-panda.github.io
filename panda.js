$(function() {
  $('#btn-wrapper').click(function() {
    $('img, .contents-item p, .contents-item2 p').fadeIn(5000);
  });

  $('.child').click(function() {
  	$(this).hide();
  });
});
