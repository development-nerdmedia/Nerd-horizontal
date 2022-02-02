document.addEventListener("click", function (e) {
    if (e.target.closest(".check")) {
        document.querySelector('body').classList.toggle("dark-theme");
    }
})

window.addEventListener('load', () => {
    const progress = document.getElementById('progress');
    requestAnimationFrame(update);
})

function update() {
    progress.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)}%`;
    requestAnimationFrame(update);
}