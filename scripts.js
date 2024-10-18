// Change header background color on scroll
window.onscroll = function () {
    const header = document.getElementById("main-header");
    if (window.pageYOffset > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
};

// Transition effect between sections on scroll
const sections = document.querySelectorAll("section");

function revealOnScroll() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add("active");
        } else {
            section.classList.remove("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

// Initialize first section as visible
document.addEventListener("DOMContentLoaded", () => {
    revealOnScroll();
});