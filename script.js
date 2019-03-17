'use strict';

(function() {
    // invocations

    preloader();
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
                let preloader = document.querySelector(".preloader");
                if (!preloader.classList.contains('done')) {
                    preloader.classList.add('done');
                }
            }, 1000)
        }
    };


    //animation after loading

    function animation() {

        let tl = new TimelineMax();
        tl
            .from(".header", 1, {
                y: '-300%',
                delay: 1
            }, )
            .staggerFrom(".anim", .5, {
                y: '150',
                opacity: 0
            }, 0.4, "-=0.1")
            .from(".anchor", 0.1, {
                scale: 0
            }, "-=1.6")

    }

})();