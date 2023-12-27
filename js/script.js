//scroll animation
$(function(){
    $('.animate').scrolla({
        moblie : true, //모바일버전시 활성화
        once: true //스크롤시 딱 한번만 하고 싶을 때 true, 반복하고 싶을 때 false
    });
});

// fixheader

var scrollNum = 0;
scrollNum = $(document).scrollTop();
fixHeader();

function fixHeader(){
    if(scrollNum > 150){
        $("header").addClass("on");
    } else {
        $("header").removeClass("on");
    }
}

// 윈도우창 조절시 이벤트
$(window).on('scroll resize', function(){
    scrollNum = $(document).scrollTop();
    fixHeader();
});

//.gnb메뉴오픈
$(function(){
    $(".menuOpen").on('click', function(){
        $(".menuOpenBox").addClass("on");
    });
    $(".close").on('click', function(){
        $(".menuOpenBox").removeClass("on")
    });
});


/* $(function(){
    $("header").hover(function(){$(this).css("background","white")})
    $("header").hover(function(){$("li").css("color","#333")})
    $("header").hover(function(){$(".innerHeader h1").css("opacity","0")})
    $("header").hover(function(){$(".innerHeader h1:nth-child(2)").css("opacity","1")})
    $("header").hover(function(){$("li select").css("color","#333")})
    $("header").hover(function(){$("li select").css("border-bottom","2px solid #000")})
    $("header").hover(function(){$(".innerHeader .menu li a img").css("opacity","0")})
    $("header").hover(function(){$(".innerHeader .menu li a img:nth-child(2)").css("opacity","1")})
}) */


$(function() {
    $(".visual .slide").slick({ 
        arrows: true,
        dots: true,
        dotsClass: 'custom_paging',
        appendDots: $('#dots'),
        fade: true, //페이드인 효과
        slidesToShow:1,
        slidesToScroll:1,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });
});



$(function(){
    $(".box li").on('mouseenter focus', function(){
        $(".box li").removeClass('on');
        $(this).addClass('on');
    });
});

$(function(){
    $(".right div").on('click', function(){
        $(".right div").removeClass('on');
        $(this).addClass('on');
    });
});

$(function(){
    $(".product .inner .right div").on('click', function(){
        $(".line").addClass("on")
    });
    $(".resin").on('click', function(){
        $(".line span:first-child").addClass("on")
        $(".line span:nth-child(2)").removeClass("on")
        $(".line span:nth-child(3)").removeClass("on")
    });
    $(".textile").on('click', function(){
        $(".line span:nth-child(2)").addClass("on")
        $(".line span:nth-child(3)").removeClass("on")
    });
    $(".industrial").on('click', function(){
        $(".line span:nth-child(3)").addClass("on")
    });
});