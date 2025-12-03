$(function () {
    //swiper
    var swiper = new Swiper(".mainVisual", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    var swiper = new Swiper(".benefit", {
        slidesPerView: 1.3,
        spaceBetween: 20,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 3000,
        },
        /* pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
            loop: false
        } */
    });

    // 실제 보여줄 이미지 개수
    const REAL_SLIDES = 2;

    function updateCustomProgress(swiper) {
        // Swiper의 realIndex는 실제 콘텐츠 인덱스를 loop에서도 정확히 알려줌
        const current = swiper.realIndex % REAL_SLIDES;
        const percent = ((current + 1) / REAL_SLIDES) * 100;
        document.querySelector('.custom-bar').style.width = percent + '%';
    }

    // 초기 설정
    updateCustomProgress(swiper);

    // 슬라이드 변경 시
    swiper.on('slideChange', function () {
        updateCustomProgress(swiper);
    });



    //tabMenu
    // 탭 메뉴를 클릭하면 실행되는 함수
    $('#recomArea .tabMenu li').on('click', function (e) {
        e.preventDefault(); // a태그의 기본 이동 막기

        let tabIndex = $(this).index(); // 몇 번째 탭인지 번호를 가져옴 (0,1,2,3)

        // 1. 모든 탭에서 'on' 클래스 제거
        $('#recomArea .tabMenu li').removeClass('on');

        // 2. 클릭한 탭에만 'on' 클래스 추가
        $(this).addClass('on');

        // 3. 모든 상품 목록 숨기기
        $('#recomArea .recomItemList').removeClass('on');

        // 4. 선택한 탭 번호에 맞는 상품 목록 보여주기
        $('#recomArea .recomItemList').eq(tabIndex).addClass('on');
    });

    //footer > company info 보이기
    $('footer button').on('click', function() {
        $(this).toggleClass('on')
        $('footer .f_info').slideToggle({
            start:function(){
                $(this).css('display', 'flex')
            }
        });
    })
})