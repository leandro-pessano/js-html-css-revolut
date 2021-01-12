$(document).ready(function() {

    $('nav .nav-menu li').hover(function() {
      $(this).children('.dropdown').toggleClass('active');
    });

});
