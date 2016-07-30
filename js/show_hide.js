 $(document).ready(function(){
      $(window).scroll(function(){
        if ($(window).scrollTop() > 150 && $( ".navbar-defaultl" ).hasClass( "navbar-defaultl" ) || $(window).scrollTop() < 150 && $( ".navbar-defaultl" ).hasClass( "navbar-defaultl2" )){
            $('.navbar-defaultl').toggleClass( "navbar-defaultl2");

        }

     });
    });