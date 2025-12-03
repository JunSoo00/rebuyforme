$(function(){
    $('header').each(function(){
        const $win = $(window),
            $header = $(this)
        
            //header 위치값 저장
            let $headerLoc = $header.offset().top;

        //스크롤 설정
        $win.on('scroll', function() {
            let $scroll = $win.scrollTop();
            if ($scroll > $headerLoc){
                $header.addClass('on')
            } else {
                $header.removeClass('on')
            }
        })
    })
})