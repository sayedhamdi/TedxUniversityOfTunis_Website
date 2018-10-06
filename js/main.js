AOS.init();
if ($(window).width()<960){
	$(".togg").attr("src","res/logonoir.PNG")
	$("#ahbet").css("margin-top",$("#bar").css("height"))
}
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

if ($(window).width()<990){
	console.log("yes")
	let swap = $("#txt").html()
	$("#txt").html($("#img").html())
	$("#img").html(swap)
}