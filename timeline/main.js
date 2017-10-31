$(function(){
	"use strict"

	function setMenuList(){
		let needed = $(".menu-bar").width();
		$(".dropdown-menu").css("min-width", needed);
	}

	setMenuList();

});