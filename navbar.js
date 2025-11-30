// Common Navbar Component
// This file creates a consistent navbar across all slides

function createNavbar() {
    return `
        <div class="navbar navbar-dark">
            <div class="container-fluid">
                <a href="index.html" class="navbar-brand" style="cursor: pointer; text-decoration: none;">
                    <i class="bi bi-house-door"></i>
                    <span id="navbar-title">Presentation</span>
                </a>
            </div>
        </div>
    `;
}

// Insert navbar into the page
document.addEventListener('DOMContentLoaded', () => {
    const slideElement = document.querySelector('.slide');
    if (slideElement) {
        slideElement.insertAdjacentHTML('afterbegin', createNavbar());
        
        // Update navbar title from config
        if (window.presentationConfig) {
            const navbarTitle = document.getElementById('navbar-title');
            if (navbarTitle) {
                navbarTitle.textContent = window.presentationConfig.event.name;
            }
        }
    }
});
