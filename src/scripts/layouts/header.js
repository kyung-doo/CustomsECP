
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
});




