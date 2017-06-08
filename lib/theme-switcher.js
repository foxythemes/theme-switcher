/*
 * theme-switcher
 * https://foxythemes.net
 *
 * Copyright (c) 2015 Foxy Themes
 * All rights reserved.
 */

var App = (function () {

  App.livePreview = function( ){
    'use strict';

    var isRtl = $('html').hasClass('rtl');

    $(".ft_theme_switcher .toggle").click(function(){
	    var p = $(this).parent();
	    
	    if( p.hasClass("ocult") ){
	    	var direction = {'right':'0'};
	    	if (isRtl) {
	    		direction = {'left':'0'};
	    	}
	      p.animate(direction,500);
	    }else{
	    	var position = {'right':'-280px'};
	    	if (isRtl) {
	    		position = {'left':'-280px'};
	    	}
	      p.animate(position,500);
	    }
	    
	    p.toggleClass("ocult");

	  });

	  // Check if rtl parameter is passed in url
	  if (window.location.search.indexOf('rtl') > -1) {
	    $('.ft_theme_switcher #switchrtl').prop('checked', true);
	  } else {
	  	$('.ft_theme_switcher #switchrtl').prop('checked', false);
	  }

	  // Reloads the page when switch is changed
	  $('.ft_theme_switcher #switchrtl').change(function() {
	    var URL = location.href;

	    if (this.checked) {
	        location.replace(URL + '?rtl');
	    } else {
	        location.replace(URL = URL.split('?')[0]);
	    }
		});

  };

  return App;
})(App || {});