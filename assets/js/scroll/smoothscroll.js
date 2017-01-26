// Smooth Scroll on clicking nav items
$('nav a').on('click',function () {
  var $href = $(this).attr('href');
  $('body').on(stop).animate({
    scrollTop: $($href).offset().top
  }, 1000);
  return false;
});

// back to top
$('#toTop a').on('click',function () {
  $('body').animate({
    scrollTop: 0
  }, 1000);
  return false;
});