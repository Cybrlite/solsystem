$(function() {
  $('#menuButton').on('click', function(e) {
    $('#menu').show();
    $('#menu').animate({opacity: '100%'}, 100)
  });
});

$(function() {     
  $('#menuIcon').on('click', function(e) {
    $('#menu').animate({opacity: '0%'}, 200, function() {
      $(this).hide();
    });
  });
});

$('html').click(function(event) {
  if ($(event.target).closest('#menu, #menuButton').length === 0) {
    $('#menu').animate({opacity: '0%'}, 200, function() {
      $(this).hide();
    });
  };
});