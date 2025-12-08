
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![VUT](https://img.shields.io/badge/VUT-FIT-red?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)

# 🏰 Cluj-Napoca Discover

**ITWE (Web Design) Course Project - Brno University of Technology (VUT)**

A modern, responsive web presentation designed to showcase the tourism potential, history, and vibrant life of **Cluj-Napoca**, the heart of Transylvania.

This project was developed as a team assignment for the **ITWE** course, demonstrating proficiency in core web technologies **without the use of external CSS frameworks** (like Bootstrap or Tailwind).

![Project Preview](preview.png)
*(Note: Please ensure a 'preview.png' screenshot exists in the root folder or update this link)*

## 🚀 Features

* **Multi-Page Architecture:** A comprehensive site structure with over 20 linked HTML documents.
* **Custom Mega Menu:** A complex, pure CSS dropdown navigation system organizing content into logical columns.
* **Dynamic Functionality (Vanilla JS):**
    * **Smart Search:** An overlay search engine with keyword mapping (redirects users based on input like "hotel", "food", "bus").
    * **Lightbox Gallery:** Custom JavaScript image viewer for the "Experience" and "Accommodation" pages.
* **Responsive Layouts:**
    * **CSS Grid & Flexbox:** Used for event calendars, photo galleries, and information cards.
    * **Horizontal Scroll:** Netflix-style scrolling for accommodation and sightseeing categories.
* **Modern Aesthetics:** Dark-themed design ("Dark Mode"), video backgrounds, and clean typography using Google Fonts (Montserrat).

## 🛠️ Technologies Used

* **HTML5** - Semantic structure (header, nav, main, article, footer).
* **CSS3** - 100% Custom styling. No frameworks used.
    * Flexbox & Grid Layouts.
    * CSS Transitions & Animations.
    * Media Queries for responsiveness.
* **JavaScript (Vanilla)** - DOM manipulation for search, modal galleries, and navigation logic.
* **Google Maps Embeds** - Integration for location services.

## 📂 Project Structure

```bash
/Cluj-Napoca-Discover
│
├── css/
│   ├── style.css       # Global styles (Header, Footer, Reset, Typography)
│   └── detail.css      # Specific styles for inner pages (Cards, Galleries, Grids)
│
├── js/
│   └── main.js         # JavaScript logic (Search Engine & Lightbox)
│
├── img/                # Organized assets folder
│   ├── history/        # Images for historical sites
│   ├── sites/          # Images for parks and landmarks
│   ├── culture/        # Images for museums and theaters
│   ├── food/           # Images for restaurants
│   ├── experience/     # Images for festivals and nightlife
│   └── accommodation/  # Images for hotels and hostels
│
├── index.html          # Landing Page
├── discover.html       # Main category page
├── experience.html     # Events & Nightlife hub
├── accommodation.html  # Hotels & Hostels listing
├── info.html           # General Information hub
└── [detail_pages].html # Individual pages (e.g., untold.html, samsara.html, etc.)


## 💡 Technical Highlights

This project adheres to strict **Vanilla Web Development** principles:

* **Zero Frameworks:** No Bootstrap, Tailwind, or jQuery. Every pixel is styled with custom CSS.
* **Custom Search Engine:** Built a JavaScript-based keyword mapping system that redirects users to specific sections (e.g., typing *"bus"* redirects to `info.html`, typing *"untold"* redirects to `untold.html`).
* **CSS-Only Mega Menu:** Complex dropdown navigation built entirely with CSS `:hover` states and positioning, ensuring accessibility without heavy scripts.
* **Dynamic Lightbox:** A custom JavaScript modal system that scans the DOM for images and creates an immersive gallery experience automatically.
* **Responsive Design:** Fully fluid layouts using CSS Grid and Flexbox that adapt from Desktop to Mobile.

👥 Authors (Team)
This project was created by:

Paul Nicoară - Project Coordination & Development

Rareș Baciu - UI/UX Design & Implementation

Csaba Gyorfi - Content Strategy & Research

Supervisors:

Ing. Radek Burget, Ph.D.

doc. Ing. Jiří Hynek, Ph.D.
