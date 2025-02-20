const hamburger = document.getElementById("hamburger");
const dropdownMenu = document.getElementById("dropdown-menu");

document.addEventListener("click", (event) => {
    if (!hamburger.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.add("hidden");
    }
});

hamburger.addEventListener("click", (event) => {
    event.stopPropagation(); // Mencegah event dari mencapai document listener
    dropdownMenu.classList.toggle("hidden");
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

// Database Project
fetch('database/project.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('projects-container');
        container.innerHTML = data.projects.map(project => `
        <div class="bg-neutral-900 rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 duration-300 cursor-pointer flex flex-col h-full">
          <img src="${project.image}" alt="${project.title}" class="w-full h-40 object-cover">
          <div class="p-4 flex flex-col flex-grow">
            <h3 class="text-white text-[12px] sm:text-lg font-semibold text-primary mb-2">${project.title}</h3>
            <p class="text-white text-[10px] sm:text-sm mb-9">${project.description}</p>
            <div class="mt-auto">
              <a href="${project.link}" target="_blank" class="text-[12px] sm:text-base text-white bg-blue-500 hover:bg-blue-400 transition-all duration-300 border-white border-1 border-primary rounded-md p-2">
                View Details <i class="fa-solid fa-angles-right"></i>
              </a>
            </div>
          </div>
        </div>
      `).join('');
    })
    .catch(error => console.error('Error loading projects:', error));

// Fetch Certificate Data
fetch('database/certificates.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('certificate-container');
        container.innerHTML = data.certificates.map(cert => `
        <div onclick="openModal('${cert.image}')" class="bg-neutral-800 rounded-lg overflow-hidden shadow-md w-full sm:w-72 md:w-80 lg:w-72 xl:w-72 transition-transform transform hover:scale-105 duration-300 cursor-pointer card">
          <img src="${cert.image}" alt="${cert.title}" class="w-full h-40 object-cover">
          <div class="p-4">
            <h3 class="text-white text-[12px] sm:text-lg font-bold text-blue-400 mb-2">${cert.title}</h3>
            <p class="text-white text-[10px] sm:text-sm mb-9">${cert.description}</p>
          </div>
        </div>
      `).join('');
    })
    .catch(error => console.error('Error loading certificates:', error));

// Modal Functions
function openModal(imageSrc) {
    document.getElementById("modalImage").src = imageSrc;
    document.getElementById("imageModal").classList.remove("hidden");
}

function closeModal() {
    document.getElementById("imageModal").classList.add("hidden");
}
