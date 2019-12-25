//loader
$(window).on("load",function(){
    $(".loading").animate({color: "#FFF"},500,function(){
        $(".loading").fadeOut(2500);
    });
});
//Arrow key 
document.onkeydown  = function(e){
    if(e.keyCode == 39){
        $(".next").click();
    } else if(e.keyCode == 37){
        $(".horizon-prev").click();
        console.log(counter);
    }
}
//the rest of the animations
$("#section-section3 .container .num .obv").mouseover(function(){
    $(this).siblings(".shadow").animate({opacity: "1"}, 250);
    $(this).children(".plus").css("display","inline-block");
});
$("#section-section3 .container .num .obv").mouseleave(function(){
    $(this).siblings(".shadow").animate({opacity: "0.4"});
    $(this).children(".plus").css("display","none");
});

//show and hide numbig
$("#section-section3 .container .num .obv .plus").click(function(){
    var className = $(this).parent().parent().attr('class').substring(0,5).trim();
    $("."+className+"big").animate({width: "50%", height: "100%", padding: "30px 35px"},500, function(){
        $("#section-section3 .container ."+className+"big").children().fadeIn(150);
    });
});

$("#section-section3 .container .numbig .close").click(function(){
    var className = $(this).parent().attr('class').substring(7,15).trim();
    $("#section-section3 .container ."+className).children().fadeOut(150,function(){
        $("."+className).animate({width: "0%", height: "0%", padding: "0"},500);
    });
});

//show layover
$("#section-section4 .row .container .col").mouseover(function (){
    $(this).children(".layover").fadeIn(500);

});
$("#section-section4 .row .container .col").mouseleave(function (){
    $(this).children(".layover").fadeOut(500);

});

//show colbig
$("#section-section4 .row .container .col .plus").click(function(){
    var className = $(this).parent().parent().attr('class').substring(7,9);
    $("#section-section4 .row .colbig" + className).animate({width: "100%", height: "100%"},500, function(){
        $("#section-section4 .row .colbig" + className+ " " + ".bigLayover").children().fadeIn(500);
    });
});

$("#section-section4 .row .colbig .close").click(function(){
    var className = $(this).parent().parent().attr('class').substring(13, 15);
    $("#section-section4 .row .colbig" + className + " " + ".bigLayover").children().fadeOut(500,function(){
        $("#section-section4 .row .colbig" + className).animate({width: "0%", height: "0%"},500);
    });
});

//animated slides
var counter = 0;
$(".next").click(function(e){
    counter++;
    if(counter == 1){
        $(".home").animate({right: 0},500);
        $(".home .hello").children("h2").animate({marginLeft: "0"},250);
        $(".home .hello").children("p:first-of-type").animate({marginLeft: "0"},1000);
        $(".home .hello").children("p:last-of-type").animate({marginLeft: "0"},1250,function(){
            $(".home .hello").children("span").animate({marginRight: "0"},1000);
        });
        $(".next img").attr("src","images/r-arrow.png");
    }else if(counter == 2){
        $('.next').addClass("horizon-next");
        $('header').animate({left:"0"},500);
        $('.home .hello').fadeOut(500, function(){
            $('.home').animate({width: "65%"}, 1000);
            $('.home .everything').fadeIn(1500);
        });
        $(".next img").attr("src","images/r-arrow.png");
    }else {
        $(".home").fadeOut(250);
    }
    $(".href"+counter).css("color","#000").parent().siblings().children("a").css("color", "grey");
    if(counter==0){
        $("header a").css("color","grey");
    }
    if(counter == 3 || counter == 4){
        $(".logo").css("color","#000");
        $(".logo img").attr("src","images/JonasPons%20logo_black.png");
    }else{$(".logo").css("color","#FFF");$(".logo img").attr("src","images/JonasPons%20logo_white.png");}
    if(counter > 5){
        counter = 5;
    }
});

$(".home .hello span").click(function(){
    if(counter == 1){
        $('.next').addClass("horizon-next");
        $('header').animate({left:"0"},500);
        $('.home .hello').fadeOut(500, function(){
            $('.home').animate({width: "65%"}, 1000);
            $('.home .everything').fadeIn(1500);
        });
        $(".next img").attr("src","images/r-arrow.png");
    }
    counter = 2;
});

$(".horizon-prev").click(function(){
    counter--;
    if(counter == 2){
        $('.home').fadeIn(150);
        $(".home").animate({right: 0},500);
        $('.home .hello').fadeOut(0, function(){
            $('.home').animate({width: "65%"}, 1000);
            $('.home .everything').fadeIn(1500);
            $(".home .hello").children().animate({marginLeft:"0",marginRight:"0"});
        });
        $(".next img").attr("src","images/r-arrow.png");
    }else if(counter == 1){
        $('.home .everything').fadeOut(500, function(){
            $('.home').animate({width: "35%"}, 1000);
            $('.home .hello').fadeIn(1500);
            $('header').animate({left:"-165px"},500);
        });
        $(".next img").attr("src","images/r-arrow.png");
    } $(".href"+counter).css("color","#000").parent().siblings().children("a").css("color", "grey");
    if(counter==1){
        $("header a").css("color","grey");
    }
    if(counter == 3 || counter == 4 || counter == 5){
        $(".logo").css("color","#000");$(".logo img").attr("src","images/JonasPons%20logo_black.png");
    }else{$(".logo").css("color","#FFF");$(".logo img").attr("src","images/JonasPons%20logo_white.png");}
    if(counter < 0)counter=0;
});

//menu
$("a").click(function(){
    var sectionCounter = $(this).attr("href").substr(-1,1);
    counter = sectionCounter;
    if(counter == 2){
        $('.home').fadeIn(1500);
        $(".home").animate({right: 0},500);
        $('.home .hello').fadeOut(0, function(){
            $('.home').animate({width: "65%"}, 1000);
            $('.home .everything').fadeIn(1500);
            $(".home .hello").children().animate({marginLeft:"0",marginRight:"0"});
        });
    }else{
        $('.home').fadeOut(250);
    }
    $(this).css("color","#000").parent().siblings().children("a").css("color", "grey");
    if(counter == 3 || counter == 4 || counter == 5){
        $(".logo").css("color","#000");
        $(".logo img").attr("src","images/JonasPons%20logo_black.png");
    }else{$(".logo").css("color","#FFF");$(".logo img").attr("src","images/JonasPons%20logo_white.png");}
});
$(".logo").click(function(){
    $('header').animate({left:"0"},500);
});
//video sound
$("#section-section1 .mute").click(function(){
    /*var vol = $('video').prop("volume");
    if(vol == 1){
        $('video').prop("volume", 0);
        $(this).css("background-image", "url(images/soundoff.png)");
    } else{
        $('video').prop("volume", 1);
        $(this).css("background-image", "url(images/sound.png)");
    }*/
    var vid = $("#myVideo")[0];
    if(vid.muted){
        vid.muted = false;
        $(this).css("background-image", "url(images/sound.png)");   
    } else{
        vid.muted = true;
        $(this).css("background-image", "url(images/soundoff.png)"); 
    }
});