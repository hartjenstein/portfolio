
$(function() {
  
  $('a[href*=\\#]:not([href=\\#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

  // hide #back-top first
  $("#back-top").hide();

  // fade in #back-top

  $(window).scroll(function () {
  	if ($(this).scrollTop() > 100) {
  		$('#back-top').fadeIn();
  	} else {
  		$('#back-top').fadeOut();
  	}
  });

  // scroll body to 0px on click
  $('#back-top a').on("click", function(){
  	$('body,html').animate({
  		scrollTop: 0
  	}, 800);
  	return false;
  });

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


	/* 	"use strict;"
    // toggle img on hover 
   
		let figures = document.getElementsByClassName("effect-bubba");
    for(let figure of figures ) {

    console.log(figure);
		figure.addEventListener("mouseenter", function( event ) {   
		// switch img
    let inImage = event.target.parentElement.children[0].children[0];
    console.log("In: ",inImage)
    inImage.src = "images/react.png";
    });
    figure.addEventListener("mouseleave", function( event ) {   
      // switch img
      let outImage = event.target.parentElement.children[0].children[0];
      console.log("Out: ",outImage)
      outImage.src = "images/demo/portfolio-3.jpg";
      });
  } */