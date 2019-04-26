$(document).ready(function() {
  menuScroll();
  loginModal();
	inputLogin();
});

function menuScroll() {
  $(document).on("scroll", function() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop >= 100) {
      $("header").addClass("active");
    } else {
      $("header").removeClass("active");
    }
  });
}

function loginModal() {
  $(".btn.login").on("click", function(e) {
		e.preventDefault();
		$(".modal-login").addClass('open');
	});
	$(".modal-login .close-modal").on("click", function() {
		$(".modal-login").removeClass('open');
	})
};

function inputLogin() {
	$(".modal-login .modal-content input").focusin(function(){
		$(this).parent().find('label').animate({
			top: '-9px',
	    fontSize: '11px',
	    left: '16px'
		}, 500);
		$(this).parent().find('img').animate({
			left: "20px"
		}, 500)
	});

	$(".modal-login .modal-content input").focusout(function(){
		if ($(this).val() != "") {
			return true;
		}else{
			$(this).parent().find('label').animate({
				top: '50%',
		    fontSize: '18px',
		    left: '55px'
			}, 500);
			$(this).parent().find('img').animate({
				left: "30px"
			}, 500)
		}
	})

}
