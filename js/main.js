document.addEventListener("click", function (e) {

    //ABRI
    if (e.target.closest(".serviciosmenu")) {
        document.querySelector(".servicespage").classList.toggle("open");
        document.querySelector("nav").classList.toggle("change");
        // jQuery('body').addClass('scrollhidden');
    }
    if (e.target.closest(".contacto") || e.target.closest(".close-contacto")) {
        document.querySelector(".contactpage").classList.toggle("open");
        // jQuery('body').addClass('scrollhidden');
    }

    //Cerrar
    if (e.target.closest(".close") || e.target.closest(".cerrar")) {
        document.querySelector(".servicespage").classList.toggle("open");
        document.querySelector("nav").classList.toggle("change");
        // jQuery('body').removeClass('scrollhidden');
    }

})

$('.contacto-carousel').owlCarousel({
    autoplay: true,
    margin: 10,
    loop: true,
    dots: false,
    slideTransition: 'linear',
    autoplayTimeout: 4500,
    autoplayHoverPause: true,
    autoplaySpeed: 8000,
    responsive: {
        0: {
            items: 2
        },
        500: {
            items: 2
        },
        600: {
            items: 2
        },
        800: {
            items: 2
        },
        1024: {
            items: 2
        },
        1200: {
            items: 2
        }
    }
})

$('.thanks-carousel').owlCarousel({
    autoplay: true,
    // margin: 10,
    loop: true,
    dots: false,
    slideTransition: 'linear',
    autoplayTimeout: 4500,
    autoplayHoverPause: true,
    autoplaySpeed: 10000,
    responsive: {
        0: {
            items: 1
        },
        500: {
            items: 1
        },
        600: {
            items: 1
        },
        800: {
            items: 1
        },
        1024: {
            items: 1
        },
        1200: {
            items: 1
        }
    }
})

$('.thanks-carousel2').owlCarousel({
    autoplay: true,
    // margin: 10,
    loop: true,
    dots: false,
    slideTransition: 'linear',
    autoplayTimeout: 4500,
    autoplayHoverPause: true,
    autoplaySpeed: 10000,
    responsive: {
        0: {
            items: 1
        },
        500: {
            items: 1
        },
        600: {
            items: 1
        },
        800: {
            items: 1
        },
        1024: {
            items: 1
        },
        1200: {
            items: 1
        }
    }
})