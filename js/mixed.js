alert("including this shit ");
$("img").hover(
	function() {
		$(this).addClass('border');
	},
	function() {
		$(this).removeClass('border');
	}
);
