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

    $(".ft_theme_switcher .toggle").click(function(){
	    var p = $(this).parent();
	    
	    if( p.hasClass("ocult") ){
	      p.animate({'left':'0'},500);
	    }else{
	      p.animate({'left':'-280px'},500);
	    }
	    
	    p.toggleClass("ocult");

	  });

  };

  return App;
})(App || {});