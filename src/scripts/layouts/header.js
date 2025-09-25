
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
});




