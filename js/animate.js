$(document).ready(function(){
	$("#path__contact path").animate({"stroke-dashoffset" : "0"},1);
	$('.tilter').on('click' , function(){
		$id = $(this).attr("id");
		$class = "#div__" + $id;
		$path = "#path__" + $id;
		if($($class).css("display") == "none"){
			$(".main_div").fadeOut("easy");
			$(".main_div").animate({"margin-left" : "-100vw"},700);
			$($class).fadeIn();
			$($class).animate({"margin-left" : ".1vw"},700);
			$(".dop-path").animate({"stroke-dashoffset" : "5050"},100);
			$($path +" path").animate({"stroke-dashoffset" : "0"},100);
			$('.sait').css({"background-color" : "rgba(255,255,255,0)" , "font-size" : "2vw"});
			$('.contact').css({"background-color" : "rgba(255,255,255,0)" , "font-size" : "2vw"});
			$('.frontend').css({"background-color" : "rgba(255,255,255,0)" , "font-size" : "2vw"});
			$("."+$id).css({"background-color" : "rgba(255,255,255,0.3)" , "font-size" : "2.3vw"});
		}
	});

});