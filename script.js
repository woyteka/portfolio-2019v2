$(document).ready(function(){
  

    $(".portfolio").click(function(){
        $('.txt-strony').addClass('oneout');
        $('.txt-internetowe').addClass('twoout');
        $('.txt-materialy').addClass('treeout');
        $('.txt-graficzne').addClass('fourout');
        $('.txt-dlainternetu').addClass('fiveout');
        $('.txt-idruku').addClass('sixout');
        $('.txt-info').addClass('sevenout');
       

       

let strona = function(){

        $('.container-box').load('page-portfolio.html .container-box')
}
setTimeout(strona, 1500);
    });



$('.drewnochem').mouseover(function(){
    $('.drewnochem').toggleClass('oko');
});





  
});





