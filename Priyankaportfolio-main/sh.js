$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu nav script 
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation 
    var typeed = new Typed(".typing", {
        strings: ["Programmer", "CS-Student" ,"Data Scientist","Programmer", "CS-Student" ,"Data Scientist","Programmer", "CS-Student" ,"Data Scientist"],
        typeSpeed: 100,
        backSpeed: 60,
        look: true
    })

    var typeed = new Typed(".typing-2", {
        strings: ["Programmer", "CS-Student" , "Data Scientist","Programmer", "CS-Student" ,"Data Scientist","Programmer", "CS-Student" ,"Data Scientist"],
        typeSpeed: 100,
        backSpeed: 60,
        look: true
    })

    // carousel script 
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});