(function($){
      //배너 이미지 슬라이드
      var mySwiper = new Swiper('.swiper-container', {
        navigation: {
           nextEl: '.swiper-button-next',
           prevEl: '.swiper-button-prev',
        },
        pagination: {
           el: '.swiper-pagination',
           type: 'bullets',
        },
        autoplay: {
           delay: 5000,
        },
     });

     //영화차트 이미지 슬라이드
     var mySwiper = new Swiper('.swiper-container2', {
        slidesPerView: 4,
        spaceBetween: 24,
        mousewheel: {
           invert: true,
        },
        keyboard: {
           enabled: true,
           onlyInViewport: false,
        },
        autoplay: {
           delay: 3000,
        },
        breakpoints: {
           600: {
              slidesPerView: 1.4,
              spaceBetween: 24
           },
           768: {
              slidesPerView: 2,
              spaceBetween: 24
           },
           960: {
              slidesPerView: 3,
              spaceBetween: 24
           }
        }
     });

     //영화 차트 탭메뉴
     var movBtn = $(".movie-menu > ul > li");    
     var movCont = $(".movie-chart > div");  

     movCont.hide().eq(0).show();

     movBtn.click(function(e){
        e.preventDefault();
        var target = $(this);         
        var index = target.index();  
        movBtn.removeClass("active");   
        target.addClass("active");    
        movCont.css("display","none");
        movCont.eq(index).css("display","block");
     });

     //공지사항 탭메뉴
     $('.tap-title').click(function(e){
        e.preventDefault();
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
     });
})(jQuery);