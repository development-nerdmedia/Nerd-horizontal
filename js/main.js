window.addEventListener("load", () => {
    console.log("cargado")
    document.querySelector(".page-loader").classList.add("fade-out");
    setTimeout(() => {
        document.querySelector(".page-loader").style.display = "none";
    }, 600);
});

if (navigator.userAgent.indexOf('Mac OS X') != -1) {
    $("body").addClass("mac");
}

var s = skrollr.init();

// console.log("asd")
var mediaqueryList = window.matchMedia("(max-width: 1025px)");
if (mediaqueryList.matches) {
    skrollr.init().destroy();
}

resizeTimer = true;
jQuery(window).on('resize', function () {
    $('.pageresize').fadeIn(500);
    document.querySelector(".pageresize").style.display = "flex";
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
        resizeTimer = false;
        $(window).trigger('resizeend');
    }, 250);
}).on('resizeend', function () {
    setTimeout(function () {
        $('.pageresize').fadeOut(500);
    }, 500);
})

var mediaqueryList2 = window.matchMedia("(max-width: 1025px)");
if (mediaqueryList2.matches) {
    document.querySelector(".pageresize").style.visibility = "hidden";
}

var mediaqueryList3 = window.matchMedia("(max-width: 426px)");
if (mediaqueryList3.matches) {
    $("body").removeClass("mac");
}

/* elementos de contacto en pantalla */
const nombre1 = document.querySelector("#full-name");
const telephone1 = document.querySelector("#telephone");
const email1 = document.querySelector("#email");
const message1 = document.querySelector("#message");

/* elementos del contacto en pagina */
const nombre = document.querySelector("#full-name2");
const telephone = document.querySelector("#telephone2");
const email = document.querySelector("#email2");
const message = document.querySelector("#message2");



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
        document.querySelector("nav").classList.toggle("change");
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
        document.querySelector("nav").classList.toggle("change");
        // jQuery('body').removeClass('scrollhidden');
    }

    if (e.target.type == "submit") {

        if (nombre1.value.length === 0) {

            if ($("#full-name.focus-visible")) {
                nombre1.classList.add("falto");
            }
            else {
                nombre1.classList.remove("falto");
            }
        }
        if (telephone1.value.length === 0) {

            if ($("#telephone.focus-visible")) {
                telephone1.classList.add("falto");
            }
            else {
                telephone1.classList.remove("falto");
            }
        }
        if (email1.value.length === 0) {

            if ($("#mail.focus-visible")) {
                email1.classList.add("falto");
            }
            else {
                email1.classList.remove("falto");
            }
        }
        if (message1.value.length === 0) {

            if ($("#message.focus-visible")) {
                message1.classList.add("falto");
            }
            else {
                message1.classList.remove("falto");
            }
        }

        if (nombre.value.length === 0) {
            if ($("#full-name2.focus-visible")) {
                nombre.classList.add("falto");
            }
            else {
                nombre.classList.remove("falto");
            }
        }
        if (telephone.value.length === 0) {

            if ($("#telephone2.focus-visible")) {
                telephone.classList.add("falto");
            }
            else {
                telephone.classList.remove("falto");
            }
        }
        if (email.value.length === 0) {

            if ($("#telephone2.focus-visible")) {
                email.classList.add("falto");
            }
            else {
                email.classList.remove("falto");
            }
        }
        if (message.value.length === 0) {

            if ($("#telephone2.focus-visible")) {
                message.classList.add("falto");
            }
            else {
                message.classList.remove("falto");
            }
        }
    }

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


/* home */
const homefijo = document.querySelectorAll(".fijo");

const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.body',
        // markers: true,
        start: '61% top',
        end: '100% 100%',
        scrub: 1,
        // pin: '.starblue',
    },
});
tl2.to(homefijo, { xPercent: -90, duration: 0.2 })

/* end home */

$('.contacto-carousel').owlCarousel({
    autoplay: true,
    margin: 10,
    loop: true,
    dots: false,
    slideTransition: 'linear',
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    autoplaySpeed: 30000,
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
    // autoplayTimeout: 4500,
    autoplayHoverPause: false,
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

// formulario.addEventListener('submit',(e) =>{

// })


// function pageTransition() {
//     var tl2 = gsap.timeline();
//     tl2.to('ul.transition li', { duration: .5, scaleY: 1, transformOrigin: "bottom left", stagger: .2 });
//     tl2.to('ul.transition li', { duration: .5, scaleY: 0, transformOrigin: "bottom left", stagger: .1, delay: .1 })
// }

// function contentAnimation() {
// }

// function delay(n) {
//     n = n || 2000;
//     return new Promise(done => {
//         setTimeout(() => {
//             done();
//         }, n);
//     });
// }

// barba.init({
//     sync: true,

//     transitions: [{
//         async leave(data) {
//             const done = this.async();
//             pageTransition();
//             await delay(1500)
//             done();
//             // setTimeout(function () {
//             //     location.reload();
//             // }, 100);
//         },
//         async enter(data) {
//             contentAnimation();
//         },
//         async once(data) {
//             contentAnimation();
//         }
//     }]
// })
