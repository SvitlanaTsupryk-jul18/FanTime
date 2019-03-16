'use strict';

(function() {

    // invocation

    //preloader();
    burgerCloseIcon();

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
    function showTitle() {

        let tl = new TimelineMax();
        tl
            .from(".navbar-brand", .5, {
                x: '-300%',

            }, delay = .5)
            .staggerFrom(".nav-link", .5, {
                y: '-50',
                opacity: 0
            }, 0.1, "-=0.20")
            .from('#title', 2, {
                y: '-300%',
                ease: Bounce.easeOut
            })
            .from('.hero__subtitle', .5, {
                y: '100',
                opacity: 0
            }, "-=1")
            .from('.hero__toscroll', 1, {
                backgroundColor: "rgba(52, 58, 64)",
                opacity: .8,
                borderRadius: "5px"
            }, "-=2")

    }
})();