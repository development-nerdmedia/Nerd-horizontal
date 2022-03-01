function pageTransition() {
    var tl = gsap.timeline();
    tl.to('ul.transition li', { duration: .5, scaleY: 1, transformOrigin: "bottom left", stagger: .2 });
    tl.to('ul.transition li', { duration: .5, scaleY: 0, transformOrigin: "bottom left", stagger: .1, delay: .1 })
}

function delay(n) {
    n = n || 2000;
    return new Promise(done => {
        setTimeout(() => {
            done();
        }, n);
    });
}

barba.init({
    sync: true,

    transitions: [{
        async leave(data) {
            const done = this.async();
            pageTransition();
            await DelayNode(1500)
            done()
        },
        async enter(data) {
            contentAnimation();
        },
        async once(data) {
            contentAnimation();
        }
    }]
})

document.addEventListener("click", function (e) {

    //ABRI
    if (e.target.closest(".serviciosmenu")) {
        document.querySelector(".servicespage").classList.toggle("open");
        document.querySelector("nav").classList.toggle("change");
        document.querySelector(".serviciosmenu").classList.toggle("select");
        // jQuery('body').addClass('scrollhidden');
    }
    if (e.target.closest(".serviciosmenu2")) {
        document.querySelector(".servicespage").classList.toggle("open");
        document.querySelector("nav").classList.toggle("change2");
        document.querySelector(".serviciosmenu2").classList.toggle("select");
        // jQuery('body').addClass('scrollhidden');
    }
    if (e.target.closest(".contacto") || e.target.closest(".close-contacto")) {
        document.querySelector(".contactpage").classList.toggle("open");
        // jQuery('body').addClass('scrollhidden');
    }
    if (e.target.closest(".check")) {
        document.querySelector('body').classList.toggle("dark-theme");
    }

    //Cerrar
    if (e.target.closest(".close") || e.target.closest(".cerrar")) {
        document.querySelector(".servicespage").classList.toggle("open");
        document.querySelector(".serviciosmenu").classList.toggle("select");
        document.querySelector("nav").classList.toggle("change");
        // jQuery('body').removeClass('scrollhidden');
    }

    if (e.target.closest(".closee") || e.target.closest(".cerrar")) {
        document.querySelector(".servicespage").classList.toggle("open");
        document.querySelector(".serviciosmenu2").classList.toggle("select");
        document.querySelector("nav").classList.toggle("change2");
        // jQuery('body').removeClass('scrollhidden');
    }

    //formulario
    // if (e.target.type == "submit") {
    //     document.querySelector(".focus-visible").addclass("falto")
    // }

})

window.addEventListener("scroll", function () {
    if (this.pageYOffset > 60) {
        document.querySelector(".navigation").classList.add("sticky");
    }
    else {
        document.querySelector(".navigation").classList.remove("sticky");
    }
});

gsap.registerPlugin(ScrollTrigger);
const starblue = document.querySelectorAll(".starblue");

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.body',
        // markers: true,
        start: 'top top',
        end: '100% 100%',
        scrub: 1,
        // pin: '.starblue',
    },
});

tl.to(starblue, { rotation: 360, duration: 10 })

$('.contacto-carousel').owlCarousel({
    autoplay: true,
    margin: 10,
    loop: true,
    dots: false,
    slideTransition: 'linear',
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    autoplaySpeed: 20000,
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
        1440: {
            items: 1
        },
        1800: {
            items: 1
        }
    }
})



$('.btn-info').owlCarousel({
    autoplay: true,
    margin: 5,
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

