document.addEventListener("click", function (e) {

    //ABRI
    if (e.target.closest(".serviciosmenu")) {
        document.querySelector(".servicespage").classList.toggle("open");
        document.querySelector("nav").classList.toggle("change");
        // jQuery('body').addClass('scrollhidden');
    }

    //Cerrar
    if (e.target.closest(".close") || e.target.closest(".cerrar")) {
        document.querySelector(".servicespage").classList.toggle("open");
        document.querySelector("nav").classList.toggle("change");
        // jQuery('body').removeClass('scrollhidden');
    }

})