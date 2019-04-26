$(document).ready(function() {
  menuScroll();
});

function menuScroll() {
	$(document).on('scroll', function(){
		var scrollTop = $(window).scrollTop();
		console.log(scrollTop);
		if (scrollTop >= 100) {
			$('header').addClass('active');
		}else{
			$('header').removeClass('active')
		}
	})
}
