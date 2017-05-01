$(document).ready(function($){
	$(window).load(function(){
		$(".loaded").delay(1000).fadeOut();
		$(".preloader").delay(1000).fadeOut("slow");
	});

	var amountScrolled = 500;
	$(window).scroll(function(){
		if($(window).scrollTop()>amountScrolled){
			$('a.back-to-top').fadeIn('slow');
		}else{
			$('a.back-to-top').fadeOut('slow');
		}
	});
	$('a.back-to-top').click(function(){
		$('html,body').animate({
			scrollTop:0
		},700);
		return false;
	});
});