
$(document).ready(function(){
    $("button").click(function(){
        $("p").hide();
    });
});

$(document).ready(function(){
    $("#first, #second").mouseenter(function(){
        alert("Welcome to Ladies Page!!!");
    });
});

$(document).ready(function(){
    $(".btn btn-success").click(function(){
        alert("Please contact us.Thank you");
    });
});


$(document).ready(function(){
$( "#target" ).submit(function( event ) {
  alert( "Handler for .submit() called." );
  event.preventDefault();
});
});


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