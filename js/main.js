/* --- FUNCȚII PENTRU SEARCH UI (Deschidere/Închidere) --- */

function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
    // Punem focus automat pe scris ca să poți tasta direct
    setTimeout(function() {
        document.getElementById("searchInput").focus();
    }, 100);
}

function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}

/* --- LOGICA DE CĂUTARE (Mapping Actualizat) --- */

// Harta cuvintelor cheie către paginile tale
/* --- LOGICA DE CĂUTARE (Mapping Complet) --- */

// Harta cuvintelor cheie către paginile tale
const pageMap = {
    // --- CATEGORIA HISTORY ---
    "history": "discover.html#history",
    "matthias": "matthias-house.html",
    "corvinus": "matthias-house.html",
    "tailor": "tailors-tower.html",
    "tower": "tailors-tower.html",
    "banffy": "banffy-castle.html",
    "bonțida": "banffy-castle.html",
    "castle": "banffy-castle.html",
    "casino": "casino.html",
    "culture center": "casino.html",
    "cathedral": "dormition-cathedral.html",
    "church": "dormition-cathedral.html",
    "union square": "old-town.html",
    "old town": "old-town.html",
    "center": "old-town.html",

    // --- CATEGORIA SITES ---
    "park": "central-park.html",
    "central park": "central-park.html",
    "botanical": "botanical-garden.html",
    "garden": "botanical-garden.html",
    "flowers": "botanical-garden.html",
    "cetatuia": "cetatuia-hill.html",
    "hill": "cetatuia-hill.html",
    "view": "cetatuia-hill.html",
    "hoia": "hoia-baciu.html",
    "baciu": "hoia-baciu.html",
    "haunted": "hoia-baciu.html",
    "forest": "hoia-baciu.html",

    // --- CATEGORIA CULTURE ---
    "museum": "national-art-museum.html",
    "art": "national-art-museum.html",
    "opera": "romanian-opera.html",
    "theatre": "hungarian-theatre.html",
    "hungarian": "hungarian-theatre.html",
    "steampunk": "steampunk-museum.html",
    "pharmacy": "pharmacy-museum.html",
    "hintz": "pharmacy-museum.html",

    // --- CATEGORIA FOOD ---
    "food": "discover.html#food",
    "samsara": "samsara.html",
    "vegan": "samsara.html",
    "panemar": "panemar.html",
    "bakery": "panemar.html",
    "bread": "panemar.html",
    "soviet": "soviet.html",
    "communist": "soviet.html",
    "enigma": "enigma-cafe.html",
    "kinetic": "enigma-cafe.html",
    "cafe": "enigma-cafe.html",
    "piezisa": "piezisa.html",
    "student": "piezisa.html",

    // --- CATEGORIA EXPERIENCE (EVENTS & LEISURE) ---
    "untold": "untold.html",
    "festival": "untold.html",
    "electric": "electric-castle.html",
    "ec": "electric-castle.html",
    "tiff": "tiff.html",
    "film": "tiff.html",
    "cinema": "cinema-city.html",
    "movie": "cinema-city.html",
    "jazz": "jazz-in-the-park.html",
    "iulius": "iulius-mall.html",
    "mall": "iulius-mall.html",
    "shopping": "iulius-mall.html",
    "escape": "escape-room.html",
    "game": "escape-room.html",
    "noa": "noa-club.html",
    "club": "noa-club.html",
    "party": "piezisa.html",
    "form": "form-space.html",
    "space": "form-space.html",

    // --- CATEGORIA ACCOMMODATION ---
    "hotel": "accommodation.html",
    "accommodation": "accommodation.html",
    "beyfin": "hotel-beyfin.html",
    "premier": "hotel-premier.html",
    "napoca": "grand-hotel-napoca.html",
    "grand hotel": "grand-hotel.html",
    "italia": "grand-hotel.html",
    "luxury": "grand-hotel.html",
    "vivaldi": "vivaldi-studios.html",
    "apartment": "vivaldi-studios.html",
    "west": "west-city-tower.html",
    "tower hotel": "west-city-tower.html",
    "zen": "zen-hostel.html",
    "hostel": "zen-hostel.html",
    "budget": "zen-hostel.html",

    // --- CATEGORIA INFORMATION ---
    "transport": "public-transport.html",
    "bus": "public-transport.html",
    "taxi": "public-transport.html",
    "facts": "facts-figures.html",
    "population": "facts-figures.html",
    "faq": "faq.html",
    "question": "faq.html",
    "contact": "contact.html",
    "team": "contact.html",
    "feedback": "feedback.html"
};

function performSearch() {
    // 1. Luăm ce a scris utilizatorul
    let query = document.getElementById("searchInput").value;

    // 2. Transformăm în litere mici
    query = query.toLowerCase().trim();

    // 3. Verificăm dacă avem cuvântul în lista noastră
    // Căutare parțială (ex: dacă scrie "untold festival" să găsească "untold")
    let foundPage = null;

    // Verificăm potrivire exactă
    if (pageMap[query]) {
        foundPage = pageMap[query];
    } else {
        // Verificăm dacă textul conține un cuvânt cheie
        for (let key in pageMap) {
            if (query.includes(key)) {
                foundPage = pageMap[key];
                break;
            }
        }
    }

    if (foundPage) {
        window.location.href = foundPage;
    } else {
        alert("Sorry, we couldn't find that. Try keywords like: untold, hotel, museum, park.");
    }
}

// Permitem apăsarea tastei ENTER
var input = document.getElementById("searchInput");
if(input){
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            performSearch();
        }
    });
}

/* --- LOGICA PENTRU GALERIE FOTO (LIGHTBOX) --- */

let currentSlideIndex = 0;
let galleryImages = [];

document.addEventListener('DOMContentLoaded', () => {
    // MODIFICARE AICI: Selectăm și clasele vechi (.gallery-item) și pe cele noi (.exp-gallery-item)
    const images = document.querySelectorAll('.gallery-large, .gallery-item, .exp-gallery-large, .exp-gallery-item');

    if (images.length > 0) {
        images.forEach((img, index) => {
            // Extragem URL-ul imaginii din stilul background-image
            let style = window.getComputedStyle(img);
            let bgImage = style.backgroundImage;

            // Curățăm string-ul
            if (bgImage && bgImage !== 'none') {
                let src = bgImage.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
                // Eliminăm ghilimelele dacă există
                src = src.replace(/"/g, "");

                galleryImages.push(src);

                // Adăugăm funcția de click
                img.addEventListener('click', () => {
                    openGallery(index);
                });
            }
        });
    }
});

function openGallery(index) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");

    if (!modal) return;

    modal.style.display = "block";
    currentSlideIndex = index;

    if(galleryImages.length > 0) {
        modalImg.src = galleryImages[currentSlideIndex];
        updateCaption();
    }
}

function closeGallery() {
    document.getElementById("imageModal").style.display = "none";
}

function changeSlide(n) {
    currentSlideIndex += n;

    if (currentSlideIndex >= galleryImages.length) {
        currentSlideIndex = 0;
    }
    if (currentSlideIndex < 0) {
        currentSlideIndex = galleryImages.length - 1;
    }

    document.getElementById("modalImage").src = galleryImages[currentSlideIndex];
    updateCaption();
}

function updateCaption() {
    const captionText = document.getElementById("caption");
    if(captionText) {
        captionText.innerHTML = `Image ${currentSlideIndex + 1} of ${galleryImages.length}`;
    }
}

// Închidere cu tasta ESC și Săgeți
document.addEventListener('keydown', function(event) {
    if (document.getElementById("imageModal") && document.getElementById("imageModal").style.display === "block") {
        if (event.key === "Escape") {
            closeGallery();
        }
        if (event.key === "ArrowRight") {
            changeSlide(1);
        }
        if (event.key === "ArrowLeft") {
            changeSlide(-1);
        }
    }
});