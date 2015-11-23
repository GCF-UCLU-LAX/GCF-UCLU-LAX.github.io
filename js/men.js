
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