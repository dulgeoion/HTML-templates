function changeCurrentClass(current, newel){
	var tmp = current;
	current = newel;
	newel = tmp;

}

var dropdownElements = {
	current: "Everyone",
};

autosize(document.getElementById("user-textarea"));
autosize(document.getElementById("user-post-input"));

var current = "everyone";

$('#user-textarea').keydown(function(){
	$(".user-post-input").height($("#user-textarea").height()+60);
});

$(".select-group").delegate("li", "click",  function(){
	var newel = $(this).attr("class");

	$(this).removeClass();
	$(this).addClass(dropdownElements.current);
	$(this).html('<a href="#">'+dropdownElements.current+'</a>');

	$(".DPcurrentElement").removeClass(dropdownElements.current);
	$(".DPcurrentElement").addClass(newel);
	$(".DPcurrentElement").html(newel+" <span class='caret'></span>");
	dropdownElements.current = newel;

});

