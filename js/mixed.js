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


$(document).ready(function(){
$('#text').mouseenter(function(){
$(this).addClass('highlighted');
});
});

$(document).ready(function(){
$('#text').mouseleave(function(){
$(this).toggleClass('highlighted');
});
});

$(document).ready(function(){
$('.picture').mouseenter(function(){
$(this).addClass('highlighted');
});
});

$(document).ready(function(){
$('.picture').mouseleave(function(){
$(this).toggleClass('highlighted');
});
});