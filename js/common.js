$(document).ready(function() {
    function startActions(){
        $('.sec01').addClass('played');
    }
    setTimeout(startActions, 500);
    var winWidth = window.outerWidth;
    if(winWidth < 768) {
        $('.logos img').attr('src','../images/ani01_gln01.png')
    }
    if(winWidth < 768 && $('.wraps').hasClass('main')) {
        $('.sec03 .parts01, .sec03 .parts02, .sec03 .parts03').removeClass('offVal');
        $('.sec03 .parts01 .aniArea, .sec03 .parts02 .aniArea, .sec03 .parts03 .aniArea').addClass('offVal');
        var slidesWidth =  winWidth * 70 / 100
        var slidesWidth =  winWidth * 70 / 100
        var allianceUl = $('.sec04 ul').outerWidth();
        $('.mediaLists li').css({'width': slidesWidth+'px'})
        $('.mediaLists').css({'width': (slidesWidth + $('.mediaLists li').offset().left) * $('.mediaLists li').length + 25})
        $('.sec04 ul li').css({'width': Math.floor(allianceUl / 3 ) - 10})
        $('.sec01 .aniArea .group01').css({
            'width': (winWidth * 14.375 / 100) * 2+'px',
            'height': (winWidth * 15.625 / 100) * 2+'px'
        })
        $('.sec01 .aniArea .group02').css({
            'width': (winWidth * 8.0468 / 100) * 2+'px',
            'height': (winWidth * 8.0468 / 100) * 2+'px'
        })
        $('.sec01 .aniArea .group03, .sec01 .aniArea .group04').css({
            'width': (winWidth * 14.5312 / 100) * 2+'px',
            'height': (winWidth * 12.4218 / 100) * 2+'px'
        })
    }
    $(window).scroll(function() {
        var sections = document.querySelector('.sections');
        var motions = sections.querySelectorAll('.offVal');
        var positions = $(window).scrollTop();
        $(motions).each(function() {
            var elTop = $(this).offset().top;
            var elHeight = $(this).outerHeight();
            if(positions > elTop - elHeight && positions < elTop + elHeight) {
                $(this).addClass('played');
            }else if (positions > elTop + elHeight || positions < elTop - elHeight) {
                $(this).removeClass('played');
            }
        });
        var headHeight =$('.headerWarps').outerHeight();
        if(0 < positions) {
            $('.headerWarps').addClass('on')
        }else{
            $('.headerWarps').removeClass('on')
        }
    });
    $('.moMenu').click(function(){
        $('.naviBar .moNone').remove()
        $('.naviArea').toggleClass('on')
        if($('.naviArea').hasClass('on')) {
            var dim = document.createElement('div')
            dim.className = 'dim';
            $('.naviArea').prepend(dim)
        }else {
            $('.naviArea .dim').remove();
        }
    });
});