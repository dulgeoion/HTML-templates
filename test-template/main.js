function ready(){
	var img = $(".img-responsive");
	var height = img.height();
	var width = img.width();
	$(".caption").css("width", width);
}

document.addEventListener("DOMContentLoaded", ready);