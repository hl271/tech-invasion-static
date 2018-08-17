(function($){
  $(function(){

    $('.sidenav').sidenav();

    /*----------- Navigation Visible on scroll -----------*/

    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 150) {
        $('.sticky-navigation').animate({
          "top": '0',
          "opacity": '1'
        }, 0);
      } else {
        $('.sticky-navigation').animate({
          "top": '-64',
          "opacity": '0'
        }, 0);
      }
      return false;
    });


  }); // end of document ready
})(jQuery); // end of jQuery name space


  
