
$(() => {
    let moveArrow = '';
    let oldTop = 0;
      

    // 메인 네비
    $(".gnb-menu li").each(function () {
        const btn = $(this).find("button");
        btn.on('click', function (){
            $(".gnb-menu li").removeClass('active');
            $(this).parent().addClass('active');            
            $(".main-allmenu").hide();
            $("#header .allmenu").removeClass('active');
            $(".mobile-dep-menu").removeClass('mobile-active');            
        });
    });  

    // 팝업
    $(function(){
        var btn = $('.popup-box .popup');        
        var closeBtn = $('.popup-box .close-btn');        
        var box = $('.popup-box .modal');

        btn.click(function(){
            var th = $(this);            
            th.addClass('active');            
            box.show();
        });

        closeBtn.click(function(){
            var th = $(this);            
            box.hide();
            th.closest('.popup-box').find('.btn-navi.popup').removeClass('active');            
        })
    });


    //메뉴 js
    $(function () {
    $('.depth2 > li > a').on('click', function (e) {
        e.preventDefault();

        var $depth3 = $(this).next('.depth3');

        // depth3가 있을 때만 동작
        if ($depth3.length) {
            // 다른 열린 메뉴 닫기
            $('.depth3').not($depth3).slideUp(300);
            $('.depth2 > li > a').not(this).removeClass('on');

            // 현재 메뉴 토글
            $depth3.slideToggle(300);
            $(this).toggleClass('on');
        }
    });
});

});




