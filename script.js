'use strict';

(function() {

    // invocation

    //preloader();
    burgerCloseIcon();
    animation();

    //change burger close icon

    function burgerCloseIcon() {
        let btn = document.querySelector(".navbar-toggler");
        let icon = document.querySelector(".navbar-toggler-icon");
        btn.addEventListener("click", function() {
            icon.classList.toggle('close-img');
        });
    }


    //////preloader

    function preloader() {
        document.body.onload = function() {
            setTimeout(function() {
                var preloader = document.querySelector(".preloader");
                if (!preloader.classList.contains('done')) {
                    preloader.classList.add('done');
                }
            }, 1000)
        }
    };


    //show text in example of portfolio
    function animation() {

        let tl = new TimelineMax();
        tl
            .from(".header", 1, {
                y: '-300%'
            }, )
            .staggerFrom(".anim", .5, {
                y: '150',
                opacity: 0
            }, 0.2)
            .from(".anchor", 0.1, {
                scale: 0
            }, "-=0.8")


    }
})();