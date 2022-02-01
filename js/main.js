document.addEventListener("click", function (e) {
    if (e.target.closest(".check")) {
        document.querySelector('body').classList.toggle("dark-theme");
    }
})