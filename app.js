$(document).ready(function () {       
    // Toggle JavaScript
    $('.menu-toggle').on('click' , function () {  
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    // Remove Toggle
    $('.top-nav .nav-link').on('click' , function () {  
        $('.menu-toggle').removeClass('open');
        $('.top-nav').removeClass('open');
    });

});


// Scroll
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1100
});    


// AOS Animations 
AOS.init({    
    easing: 'ease',
    duration: 1800
});



