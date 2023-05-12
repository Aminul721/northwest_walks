jQuery(function(){
	jQuery('.mobile_menu').slicknav({
		label: '',
		openedSymbol:"",
		closedSymbol:"",
		prependTo:'#menu_holder'
	});
});
jQuery(window).scroll(function(){
    if (jQuery(window).scrollTop() >= 140) {
        jQuery('.header-sticky').addClass('is_stuck');
    }
    else {
        jQuery('.header-sticky').removeClass('is_stuck');
    }
});
jQuery(window).load(function(){
	jQuery('#slider').flexslider({
		animation: "fade",
		controlNav: false,              
		directionNav: false,
		prevText: "",
    	nextText: "", 
		start: function(slider){
		jQuery('body').removeClass('loading'); 
		}
	});
});


jQuery(window).load(function(){
  jQuery('#accommodations_slider').flexslider({
    animation: "fade",
    controlNav: false,              
    directionNav: true,
    smoothHeight: true, 
    start: function(slider){
    jQuery('body').removeClass('loading'); 
    }
  });
});


$(function() { // Dropdown toggle
	// $('.dropdown-toggle').click(function() { $(this).next('.dropdown').slideToggle();});

	$(document).click(function(e) {
	var target = e.target; 
	// if (!$(target).is('.dropdown-toggle') && !$(target).parents().is('.dropdown-toggle'))
	//{ $('.dropdown').hide(); }
	  // { $('.dropdown').slideUp(); }
	});
});


