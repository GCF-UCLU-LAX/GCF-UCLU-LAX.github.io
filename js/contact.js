$(document).ready(function(){
$( "buttons" ).click(function( event ) {
  alert( "Handler for .submit() called." );
  event.preventDefault();
});
});

$(document).ready(function(){
    $("button").click(function(){
    	$("body").alert( "Handler for .submit() called." );
       
    });
});