/**
 * File customizer.js.
 *
 * Theme Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */


/*==============================
=            Switch            =
==============================*/


( function( $ ) {

	$('.light-switch').on('click', function(event) {
		event.preventDefault();

		//console.log('clicked')

		$('.lightson').toggleClass('show');
	});
	
} )( jQuery );


/*==============================
=            DIMMER            =
==============================*/


( function( $ ) {

	$('.dimmer').on('click', function(event) {
		event.preventDefault();

		//console.log('clicked')

		$('.lightbulbon').toggleClass('show');
		setTimeout(function() {
			$('.lightbulbglow').toggleClass('show');
		}, 60);
	});
	
} )( jQuery );



( function( $ ) {
	$('.touchme').on('touchstart', function(event){
		event.preventDefault();
		$('.lightbulbon').addClass('show');

		setTimeout(function() {
			$('.lightbulbglow').addClass('show');
		}, 60);
	});
})(jQuery);

( function( $ ) {
	$('.touchme').on('touchend', function(event){
		event.preventDefault();
		$('.lightbulbon').removeClass('show');

		setTimeout(function() {
			$('.lightbulbglow').removeClass('show');
		}, 60);
	});
})(jQuery);

( function( $ ) {
	$('.touchme').on('mouseover', function(event){
		event.preventDefault();
		$('.lightbulbon').addClass('show');

		setTimeout(function() {
			$('.lightbulbglow').addClass('show');
		}, 60);
	});
})(jQuery);

( function( $ ) {
	$('.touchme').on('mouseout', function(event){
		event.preventDefault();
		$('.lightbulbon').removeClass('show');

		setTimeout(function() {
			$('.lightbulbglow').removeClass('show');
		}, 60);
	});
})(jQuery);