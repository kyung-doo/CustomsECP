
$(() => {
    let moveArrow = '';
    let oldTop = 0;
          

    $("#wrap").append('<div class="blind d-none"></div>');    

    // 메인 네비
    $(".gnb-menu li").each(function () {
        const btn = $(this).find("button");
        btn.on('click', function (){
            $(".gnb-menu li").removeClass('active');
            $(this).parent().addClass('active');
            $('body').css({'overflow': 'hidden'});
            $(".main-allmenu").hide();
            $("#header .allmenu").removeClass('active');
            $(".mobile-dep-menu").removeClass('mobile-active');            
        });
    });

 

    // 스크롤 이벤트
    $("html, body").on("scroll", (e) => {
        const top = $('body').scrollTop();
        if(oldTop < top) {
            moveArrow = 'down';
        } else {
            moveArrow = 'up';
        }
        if(moveArrow === 'down' && top > 200) {
            if(!$("#header").hasClass('hide')) {
                $("#header").addClass('hide');
            }
        } else if(moveArrow === 'up') {
            if($("#header").hasClass('hide')) {
                $("#header").removeClass('hide');
            }
        }

        if(top >= 32) {
            if(!$(".main-allmenu").hasClass("large")) {
                $(".main-allmenu").addClass("large");
            }
        } else {
            if($(".main-allmenu").hasClass("large")) {
                $(".main-allmenu").removeClass("large");
            }
        }
    
        oldTop = top;
    });   
});




