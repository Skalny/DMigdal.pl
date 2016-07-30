// $(document).ready(function () {
// 	$(window).scroll(function() {
//                             if ($(this).scrollTop() > 150) {
//                                 $( ".navbar-defaultl" ).css({'background':'grey', 'opacity':'0.7', 'font-size':'0.8em'});
//                                 $(".navbar-header").css('display', 'block');
//                             } else if($(this).scrollTop() > 150){
//                             	$(".navbar-defaultl").addClass('navbar-defaultl');
//                             }

                            
//                         });

// })
 $(document).ready(function(){
      $(window).scroll(function(){
        if ($(window).scrollTop() > 150 && $( ".navbar-defaultl" ).hasClass( "navbar-defaultl2" ) || 
        	$(window).scrollTop() < 150 && $( ".navbar-defaultl" ).hasClass( "navbar-defaultl2" )){
            $('.navbar-defaultl').toggleClass( "navbar-defaultl2");

        }

     });
    });