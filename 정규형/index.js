      /*베너 스크립트*/
      $('.ban').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
    });
    /* 메뉴 스크립트 */
    $(".title .btn").click(function (e) {
        e.preventDefault();
        //$("#cont_nav").css("display","block");
        //$("#cont_nav").show();
        //$("#cont_nav").fadeIn();
        //$("#cont_nav").slideDown();
        //$("#cont_nav").toggle();
        //$("#cont_nav").fadeToggle();
        $("#cont_nav").slideToggle();
        $(this).toggleClass('on');
    });
    // 탭 메뉴 스크립트
    var $tap_list = $(".notice_tap");
    $tap_list.find('ul ul').hide();
    $tap_list.find('li.active > ul').show();

    function tabMenu(e) {
        e.preventDefault();
        var $this = $(this);
        $this.next('ul').show().parent('li').addClass('active').siblings('li').removeClass('active').find('>ul').hide()
    }

    $tap_list.find('ul > li > a').click(tabMenu).focus(tabMenu);

    // 갤러리 스크립트
    $('.gallery_img').slick({
        fade: true,
        pauseOnHover: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 300,
        slidesToShow: 1
    })

    $('.play').click(function() {
        $('.gallery_img').slick('slickPlay');
    });
    $('.pause').click(function() {
        $('.gallery_img').slick('slickPause');
    });
    $('.prev').click(function() {
        $('.gallery_img').slick('slickPrev');
    });
    $('.next').click(function() {
        $('.gallery_img').slick('slickNext');
    });

    //레이어 팝업
    $('.layer').click(function(e) {
        e.preventDefault();
        $('#layer').slideDown();
    });

    $('.close').click(function(e) {
        e.preventDefault();
        $('#layer').slideUp();
    });
    
      //윈도우 팝업
      $(".window").click(function(e){
        e.preventDefault();
        //window.open("파일명", "팝업이름", "옵션설정");
        //옵션 : left, top, width, height, status, toolbar, location, menubar, scrollbars, fullscreen
        window.open("sample_window.html","popup01","width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0");
    });
    
    //lightgallery
    $(".lightgallery").lightGallery({
        thembnail: true,
        autoplay: true,
        pause: 3000,
        progressBar: true,
    }); 