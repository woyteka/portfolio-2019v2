jQuery(document).ready(function($){
  

/* KOD PODŁĄCZONY DO BUTTONA PORTFOLIO */



    $(".portfolio").click(function(){
        $('.txt-strony').addClass('oneout');
        $('.txt-internetowe').addClass('twoout');
        $('.txt-materialy').addClass('treeout');
        $('.txt-graficzne').addClass('fourout');
        $('.txt-dlainternetu').addClass('fiveout');
        $('.txt-idruku').addClass('sixout');
        $('.txt-info').addClass('sevenout');
       

       

let strona = function(){

        window.location="portfolio.html";
}
setTimeout(strona, 1500);
    });





/* KOD PODŁĄCZONY DO BUTTONA HOME */

    $(".home").click(function(){
        $('.txt-strony').addClass('oneout');
        $('.txt-internetowe').addClass('twoout');
        $('.txt-materialy').addClass('treeout');
        $('.txt-graficzne').addClass('fourout');
        $('.txt-dlainternetu').addClass('fiveout');
        $('.txt-idruku').addClass('sixout');
        $('.txt-info').addClass('sevenout');
       

       

let strona = function(){

        window.location="index.html";
}
setTimeout(strona, 1500);
    });




    


/* KOD PODŁĄCZONY DO BUTTONA INFO */

    $(".info").click(function(){
        $('.txt-strony').addClass('oneout');
        $('.txt-internetowe').addClass('twoout');
        $('.txt-materialy').addClass('treeout');
        $('.txt-graficzne').addClass('fourout');
        $('.txt-dlainternetu').addClass('fiveout');
        $('.txt-idruku').addClass('sixout');
        $('.txt-info').addClass('sevenout');
       

       

let strona = function(){

        window.location="info.html";
}
setTimeout(strona, 1500);
    });







$('.drewnochem').mouseover(function(){
    $('.imagea').css('display','flex');

    
});

$('.drewnochem').mouseout(function(){
    $('.imagea').css('display','none');

});

  
});





