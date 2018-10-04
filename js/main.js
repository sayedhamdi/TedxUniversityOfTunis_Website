if ($(window).width()<960)
	$(".togg").attr("src","res/logonoir.PNG")
$(window).scroll(function(e){
	if ($(window).width()>976){
		var posTop = $('.container').scrollTop() - $('.container').offset().top;
	if (posTop<-100){
		$(".togg").attr("src","res/logonoir.PNG")
	}else{
		$(".togg").attr("src","res/logoblanc.PNG")
	}
	}else{
		$(".togg").attr("src","res/logonoir.PNG")
	}
	
	
})