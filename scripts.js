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

// Adiciona JavaScript para a funcionalidade da imagem
const feedbackImages = document.querySelectorAll(".feedback-img");

feedbackImages.forEach(image => {
    image.addEventListener("click", () => {
        const fullSrc = image.dataset.fullSrc;
        const modal = document.createElement("div");
        modal.classList.add("modal");
        modal.innerHTML = `
            <img src="${fullSrc}" alt="Imagem completa" class="modal-img">
            <span class="close-modal">×</span>
        `;
        document.body.appendChild(modal);

        const closeModalButton = modal.querySelector(".close-modal");
        closeModalButton.addEventListener("click", () => {
            document.body.removeChild(modal);
        });

        modal.style.display = "block"; // Mostra o modal

        // Adiciona a transição ao modal
        setTimeout(() => {
            modal.style.opacity = "1";
        }, 10);
    });
});