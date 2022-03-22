window.addEventListener("load", () => {
    document.querySelector(".page-loader").classList.add("fade-out");
    setTimeout(() => {
        document.querySelector(".page-loader").style.display = "none";
    }, 600);
});

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

$('.thanks-carousel').owlCarousel({
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

$('.thanks-carousel2').owlCarousel({
    rtl: true,
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


const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");
// const marqueeContent2 = document.querySelector("ul.marquee-content2");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);
// root.style.setProperty("--marquee-elements", marqueeContent2.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    // marqueeContent2.appendChild(marqueeContent2.children[i].cloneNode(true));
}
