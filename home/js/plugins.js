// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Initialize front slider.
$(function() {
    $('#ad_slider').slidesjs({
      width: 1026,
      height: 256,
      navigation: false,
      play: {
        auto: true
      }			  
    });
  });

// Initialize scroller.
$('#stats_wrap').marquee({
	speed: 7500,
  	gap: 50,
  	delayBeforeStart: 0,
  	direction: 'left'
});         


// Initialize lightbox.
$(document).ready(function(){                               
    $('.modalLink').modal({          
        trigger: '.modalLink',       
        olay:'div.overlay',          
        modals:'div.modal',          
        animationEffect: 'slideDown',
        animationSpeed: 300,         
        moveModalSpeed: 'slow',      
        background: '000000',        
        opacity: 0.8,                
        openOnLoad: false,           
        docClose: true,              
        closeByEscape: true,         
        moveOnScroll: false,          
        resizeWindow: true,          
        close:'.closeBtn'            
    });                               
});                           

// Set focus on lightbox elements.
$(".login_button").on('click', function() {
	setTimeout(function(){
	        $(':input:enabled:visible:first').focus(); 
	    },600);	
});	

// Back functionality.	                           
$(".back_sub").on('click', function() {
	$(".banner_2, .banner_3, .banner_4, .banner_5").css("display", "none");	
	$(".circle_inner_sponsors, .circle_inner_cros, .circle_inner_patients, .circle_inner_sites").fadeOut("slow");
	$(".circle_inner_default").fadeIn("slow");
	$(".barcroslink, .barsiteslink, .barpatientslink, .barsponsorslink").css("color", "#ffffff");
	$(".banner_1").fadeIn("slow")
});	

// Sponsor swap
var sponsorswap = function() {
		$(".banner_1, .banner_3, .banner_4, .banner_5").css("display", "none");	
		$(".circle_inner_default, .circle_inner_cros, .circle_inner_patients, .circle_inner_sites").fadeOut("slow");
		$(".circle_inner_sponsors").fadeIn("slow");
		$(".barcroslink, .barsiteslink, .barpatientslink").css("color", "#b8cbda");
		$(".barsponsorslink").css("color", "#ffffff");
		$(".banner_2").fadeIn("slow")
	};	

	$(".arrow_sponsor").on('click mouseover', function() {
		sponsorswap();
	});	
	
	$(".barsponsorslink").click( function() {
		sponsorswap();
	});	 

// CRO swap		
var croswap = function() {
		$(".banner_1, .banner_2, .banner_4, .banner_5").css("display", "none");	
		$(".circle_inner_default, .circle_inner_sponsors, .circle_inner_patients, .circle_inner_sites").fadeOut("slow");
		$(".circle_inner_cros").fadeIn("slow");
		$(".barsponsorslink, .barsiteslink, .barpatientslink").css("color", "#b8cbda");			
				$(".barcroslink").css("color", "#ffffff");	
		$(".banner_3").fadeIn("slow")
	};	
	
	$(".arrow_cros").on('click mouseover', function() {
		croswap();
	});	
	
	$(".barcroslink").click( function() {
		croswap();
	});	 	

// Sites swap	
var siteswap = function() {
		$(".banner_1, .banner_2, .banner_3, .banner_5").css("display", "none");
		$(".circle_inner_default, .circle_inner_sponsors, .circle_inner_cros, .circle_inner_patients").fadeOut("slow");
		$(".circle_inner_sites").fadeIn("slow");
		$(".barsponsorslink, .barcroslink, .barpatientslink").css("color", "#b8cbda");	
				$(".barsiteslink").css("color", "#ffffff");			
		$(".banner_4").fadeIn("slow")
	};	

	$(".arrow_sites").on('click mouseover', function() {
		siteswap();
	});	
	
	$(".barsiteslink").click( function() {
		siteswap();
	});	 

// Patients swap	
var patientswap = function() {
		$(".banner_1, .banner_2, .banner_3, .banner_4").css("display", "none");
		$(".circle_inner_default, .circle_inner_sponsors, .circle_inner_cros, .circle_inner_sites").fadeOut("slow");		
		$(".circle_inner_patients").fadeIn("slow");
		$(".barpatientslink").css("color", "#ffffff");
		$(".barsponsorslink, .barsiteslink, .barcroslink").css("color", "#b8cbda");		
		$(".banner_5").fadeIn("slow")
	};	
	
	$(".arrow_patients").on('click mouseover', function() {
		patientswap();
	});	
	
	$(".barpatientslink").click( function() {
		patientswap();
	});	 		
	
// AJAX content

$("#loginpass").keydown(function (e) {

   if (e.which === 13)

	   submitLogin(e);

});



$('#language_select').change(function (e) {

    e.preventDefault();

    var URL = '/login.jsp?loginView=login&modalOnly=true&langid=' + $(this).val();

    $('#modal_div_content').load(URL);

    return false;

});



$('#forgot_link').click(function (e) {

    e.preventDefault();

    var URL = '/login.jsp?loginView=forgot&modalOnly=true';

    $('#modal_div_content').load(URL);

    return false;

});



$('#newuser_link').click(function (e) {

    e.preventDefault();

    var URL = '/login.jsp?loginView=newuser&modalOnly=true';

    $('#modal_div_content').load(URL);

    return false;

});



$('#loginform').submit(submitLogin);



function submitLogin(e) {

    e.preventDefault();

    var URL = '/login.jsp?loginView=login&modalOnly=true';

    $.ajax({

        type: 'POST',

        url: URL,

        data: $("#loginform").serialize(),

        success: function (data) {

            if (data) {

                data = $.trim(data);

            	if (data.indexOf("redirect:") == 0) {

            		window.location = data.substring(9);

            	} else {

                    $('#modal_div_content').html(data);

            	}

            } else {

                alert('No Data');

            }

        },

        dataType: "html"

    });

    return false;

}		