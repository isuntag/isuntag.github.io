$(document).ready(function () {
  var disable_scroll = false

  $(window).on('load resize scroll', function() {
    var headerHeight = $("#header").offset().top + $("#header").outerHeight() - 1;

    if($(window).scrollTop() > headerHeight && $(window).width() > 576){
      $("#smallNav").fadeIn(100);
      if (!disable_scroll && $(window).scrollTop() >= $('#about').offset().top && $(window).scrollTop() < $('#portfolio').offset().top) {
        $('#smallNav a.active').removeClass('active');
        $(`a[href$='about']`, '#smallNav').addClass('active');
      }
      if (!disable_scroll && $(window).scrollTop() >= $('#portfolio').offset().top - $('#smallNav').outerHeight() && $(window).scrollTop() < $('#contact').offset().top) {
        $('#smallNav a.active').removeClass('active');
        $(`a[href$='portfolio']`, '#smallNav').addClass('active');
      }
      if (!disable_scroll && $(window).scrollTop() >= $('#contact').offset().top - $('#smallNav').outerHeight()) {
        $('#smallNav a.active').removeClass('active');
        $(`a[href$='contact']`, '#smallNav').addClass('active');
      }
    }
    else if($(window).width() <= 576){
      if(!disable_scroll && $(window).scrollTop() < $('#about').offset().top ) {
        $('.overlay-content a.active').removeClass('active');
        $(`a[href$='header']`, '.overlay-content').addClass('active');
      }
      if (!disable_scroll && $(window).scrollTop() >= $('#about').offset().top && $(window).scrollTop() < $('#portfolio').offset().top) {
        $('.overlay-content a.active').removeClass('active');
        $(`a[href$='about']`, '.overlay-content').addClass('active');
      }
      if (!disable_scroll && $(window).scrollTop() >= $('#portfolio').offset().top && $(window).scrollTop() < $('#contact').offset().top) {
        $('.overlay-content a.active').removeClass('active');
        $(`a[href$='portfolio']`, '.overlay-content').addClass('active');
      }
      if (!disable_scroll && $(window).scrollTop() >= $('#contact').offset().top) {
        $('.overlay-content a.active').removeClass('active');
        $(`a[href$='contact']`, '.overlay-content').addClass('active');
      }
    }
    else{
      $("#smallNav").fadeOut(100);
    }
  });

  $("nav a").click(function (e){
    e.preventDefault();
    var id = $(this).attr("href");
    $('#smallNav a.active').removeClass('active');
    $(`a[href$='${id}']`, '#smallNav').addClass('active');
    disable_scroll = true;
    $('html,body').animate({scrollTop: $(id).offset().top},'slow', function(){disable_scroll = false;});
  });

  $('.overlay-content a').click(function (e){
    e.preventDefault();
    var id = $(this).attr("href");
    $('.overlay-content a.active').removeClass('active');
    $(`a[href$='${id}']`, '.overlay-content').addClass('active');
    $('.mobileNavOpen').fadeIn(200)
    $(".overlay").fadeOut(200);
    disable_scroll = true;
    $('html,body').animate({scrollTop: $(id).offset().top},'slow', function(){disable_scroll = false;});
  });

  $('.mobileNavOpen').click(function (e){
    $(this).fadeOut(200)
    $(".overlay").fadeIn(200);
  })

  $('.mobileNavClose').click(function (e){
    $('.mobileNavOpen').fadeIn(200)
    $(".overlay").fadeOut(200);
  })
});