/*$("img").hover(
	function() {
		$(this).addClass('border');
	},
	function() {
		$(this).removeClass('border');
	}
);*/

$(document).ready(function(event){
$('.pull-me').click(function(){
    $('.panel').slideToggle('slow');
});
});
