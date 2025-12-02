/* --- FUNCȚII PENTRU UI (Deschidere/Închidere) --- */

function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
    // Punem focus automat pe scris ca să poți tasta direct
    document.getElementById("searchInput").focus();
}

function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}

/* --- LOGICA DE CĂUTARE (Mapping) --- */

// Aici definim "harta" cuvintelor cheie
const pageMap = {
    // Cuvinte pentru ACCOMMODATION
    "hotel": "accommodation.html#hotels",
    "hotels": "accommodation.html#hotels",
    "apartment": "accommodation.html#apartments",
    "hostel": "accommodation.html#hostels",
    "sleep": "accommodation.html",
    "cazare": "accommodation.html",

    // Cuvinte pentru DISCOVER
    "history": "discover.html#history",
    "museum": "discover.html#culture",
    "culture": "discover.html#culture",
    "park": "discover.html#sites",
    "food": "discover.html#food",
    "pizza": "discover.html#food",
    "restaurant": "discover.html#food",

    // Cuvinte pentru EXPERIENCE
    "untold": "experience.html#festivals",
    "ec": "experience.html#festivals",
    "electric": "experience.html#festivals",
    "festival": "experience.html#festivals",
    "party": "experience.html#nightlife",
    "club": "experience.html#nightlife",

    // Cuvinte pentru INFO
    "bus": "info.html",
    "transport": "info.html",
    "taxi": "info.html",
    "map": "info.html"
};

function performSearch() {
    // 1. Luăm ce a scris utilizatorul
    let query = document.getElementById("searchInput").value;

    // 2. Transformăm în litere mici (ca să nu conteze dacă scrie Hotel sau hotel)
    query = query.toLowerCase().trim();

    // 3. Verificăm dacă avem cuvântul în lista noastră
    if (pageMap[query]) {
        // Dacă există, redirecționăm utilizatorul
        window.location.href = pageMap[query];
    } else {
        // Dacă nu există, afișăm un mesaj simplu
        alert("Sorry, we couldn't find that. Try keywords like: hotel, untold, food, bus.");
    }
}

// Permitem apăsarea tastei ENTER pentru căutare
document.getElementById("searchInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        performSearch();
    }
});

/* --- LOGICA PENTRU GALERIE FOTO (LIGHTBOX) --- */

let currentSlideIndex = 0;
let galleryImages = []; // Aici vom stoca link-urile pozelor

// 1. Inițializăm galeria când se încarcă pagina
document.addEventListener('DOMContentLoaded', () => {
    // Căutăm toate elementele care fac parte din galerie
    // (atât cea mare din stânga, cât și cele mici din dreapta)
    const images = document.querySelectorAll('.gallery-large, .gallery-item');

    if (images.length > 0) {
        images.forEach((img, index) => {
            // Extragem URL-ul imaginii din stilul background-image
            // Formatul e: url("path/to/image.jpg") -> trebuie curățat
            let style = window.getComputedStyle(img);
            let bgImage = style.backgroundImage;

            // Curățăm string-ul ca să rămână doar calea curată
            let src = bgImage.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');

            galleryImages.push(src);

            // Adăugăm funcția de click pe fiecare poză
            img.addEventListener('click', () => {
                openGallery(index);
            });
        });
    }
});

// 2. Funcția de Deschidere
function openGallery(index) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");

    if (!modal) return; // Siguranță dacă suntem pe o pagină fără galerie

    modal.style.display = "block";
    currentSlideIndex = index;

    // Setăm imaginea și textul
    modalImg.src = galleryImages[currentSlideIndex];
    updateCaption();
}

// 3. Funcția de Închidere
function closeGallery() {
    document.getElementById("imageModal").style.display = "none";
}

// 4. Navigare (Next/Prev)
function changeSlide(n) {
    currentSlideIndex += n;

    // Dacă ajungem la final, o luăm de la capăt
    if (currentSlideIndex >= galleryImages.length) {
        currentSlideIndex = 0;
    }
    // Dacă suntem la început și dăm înapoi, mergem la ultima
    if (currentSlideIndex < 0) {
        currentSlideIndex = galleryImages.length - 1;
    }

    document.getElementById("modalImage").src = galleryImages[currentSlideIndex];
    updateCaption();
}

// 5. Update Text (ex: Image 1 of 5)
function updateCaption() {
    const captionText = document.getElementById("caption");
    captionText.innerHTML = `Image ${currentSlideIndex + 1} of ${galleryImages.length}`;
}

// Închidere cu tasta ESC
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeGallery();
    }
    if (event.key === "ArrowRight") {
        changeSlide(1);
    }
    if (event.key === "ArrowLeft") {
        changeSlide(-1);
    }
});