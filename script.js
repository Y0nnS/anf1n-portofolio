document.getElementById("burger-menu").addEventListener("click", function () {
    const mobileNav = document.getElementById("mobile-nav");
    mobileNav.classList.toggle("hidden"); // Toggle the visibility of the mobile nav
});

// Event listener untuk card
const cards = document.querySelectorAll(".card");
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");

cards.forEach(card => {
    card.addEventListener("click", () => {
        const imageSrc = card.querySelector("img").src;
        modalImage.src = imageSrc;
        modal.classList.remove("hidden");
    });
});

function closeModal() {
    modal.classList.add("hidden");
}