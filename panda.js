$(function() {
  $('.btn-wrapper').click(function() {
    $('img, .contents-item p, .contents-item2 p').fadeIn(5000);
  });

  $('.child').click(function() {
  	$(this).hide();
  });

  $('.contents-item, .contents-item2').click(function() {
    var $answer = $(this).find('.answer');
    if($answer.hasClass('open')) { 
      $answer.removeClass('open');
      // slideUpメソッドを用いて、$answerを隠してください
      $answer.slideUp();

      // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
      
      
    } else {
      $answer.addClass('open'); 
      // slideDownメソッドを用いて、$answerを表示してください
      $answer.slideDown();

      
      // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
     
      
    }
  });


});
