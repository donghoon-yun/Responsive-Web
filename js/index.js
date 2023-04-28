$(document).ready(function(){

  $(".back").hover(function(){
    $(".back").animate({opacity:"0"});
    $(".front").animate({opacity:"1"});
  },function(){
    $(".back").animate({opacity:"1"});
    $(".front").animate({opacity:"0"});
  });

$(".clay4").hover(function(){
  $(".clay1").css({display:"block"});
  $(".clay2").css({display:"block"});
  $(".clay3").css({display:"block"});
  $(".clay5").css({display:"block"});
  $(".clay6").css({display:"block"});
  $(".clay7").css({display:"block"});

},function(){
  $(".clay1").css({display:"none"});
  $(".clay2").css({display:"none"});
  $(".clay3").css({display:"none"});
  $(".clay5").css({display:"none"});
  $(".clay6").css({display:"none"});
  $(".clay7").css({display:"none"});
});

$(".off").hover(function(){
  $(".on").css({display:"block"});
  $(".img4").css({display:"block"});
  $(".img5").css({display:"block"});
  $(".img6").css({display:"block"});
},function(){
  $(".on").css({display:"none"});
  $(".img4").css({display:"none"});
  $(".img5").css({display:"none"});
  $(".img6").css({display:"none"});
});

$(" header> a").click(function(){
  $(".nav").css({display:"block"})
  $(this).fadeOut();
});
$(".left1").click(function(){
  $(".nav").fadeOut();
  $("header> a").fadeIn();
});
$(".right1").click(function(){
  $(".nav").fadeOut();
  $("header> a").fadeIn();
});
$(".menu1>p").click(function(){
  $(".nav").fadeOut();
  $("header> a").fadeIn();
});


  
});

