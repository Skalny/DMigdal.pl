$(document).ready(function () {
	$(window).scroll(function() {
                            if ($(this).scrollTop() > 150) {
                                $( ".navbar-defaultl" ).css({'background':'grey', 'opacity':'0.7', 'font-size':'0.8em'});
                            } else
                            {
                               
                                //$( ".navbar-deafultl" ).toggleClass();
                            } 

                            
                        });

})