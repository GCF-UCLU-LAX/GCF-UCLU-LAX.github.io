
$(document).ready(function(){
    $("button").click(function(){
        $("p").hide();
    });
});

$(document).ready(function(){
    $("#first, #second, third").mouseenter(function(){
        alert("Welcome!!!");
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