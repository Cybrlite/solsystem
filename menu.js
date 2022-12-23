$(function() {
  $('#menuButton').on('click', function(e) {
    $('#menu').show();
  });
});

$(function() {     
  $('#menuIcon').on('click', function(e) {
    $('#menu').hide();
  });
});

$('html').click(function(event) {
  if ($(event.target).closest('#menu').length === 0) {
      $('#menu').hide();
  }
});