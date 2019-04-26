$(document).ready(function() {
  menuScroll();
  loginModal();
	inputLogin();
	openMenu();

	var offsetDados = $('.divDados').offset().top;

   function animandoDados() {
       var scrollTop = $(this).scrollTop();

       if (scrollTop > offsetDados - 650) {
           $('.count, .countVirgula').css({
               display: 'inline'
           })
           $('[data-js="spanNone"]').hide();
           $('.count').each(function () {
               $(this).prop('Counter', -1).animate({
                   Counter: $(this).text()
               }, {
                   duration: 2000,
                   easing: 'swing',
                   step: function (now) {
                       $(this).text(now.toFixed(3));
                   }
               });
           });
           $(this).off('scroll');
       }

   }

$(this).scroll(animandoDados);

	$(window).on('load', function(){
		$(".loading").addClass("close");
		$("html").removeClass("loading");
	})

});

function menuScroll() {
  $(document).on("scroll", function() {
    var scrollTop = $(window).scrollTop();
		console.log(scrollTop);
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

function openMenu(){
	$(".menu-burger").on("click", function(){
		$(this).toggleClass("open");
		$(".menu").toggleClass("open");
		$("html").toggleClass('menu-active');
	})
}
