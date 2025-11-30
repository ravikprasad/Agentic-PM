// Dynamic slide navigation
// Total slides is now pulled from config.js

// Get hidden slides from config
function getHiddenSlides() {
    return window.presentationConfig?.hiddenSlides || [];
}

// Get total slides from config
function getTotalSlides() {
    return window.presentationConfig?.event?.totalSlides || 1;
}

// Check if a slide is hidden
function isSlideHidden(slideNumber) {
    return getHiddenSlides().includes(slideNumber);
}

// Find next visible slide
function findNextVisibleSlide(currentSlide, direction) {
    const totalSlides = getTotalSlides();
    let nextSlide = currentSlide + direction;
    
    // Keep searching in the direction until we find a visible slide or reach the bounds
    while (nextSlide >= 1 && nextSlide <= totalSlides) {
        if (!isSlideHidden(nextSlide)) {
            return nextSlide;
        }
        nextSlide += direction;
    }
    
    return null; // No visible slide found in this direction
}

function getCurrentSlideNumber() {
    const currentPage = window.location.pathname.split('/').pop();
    const match = currentPage.match(/slide(\d+)\.html/);
    return match ? parseInt(match[1]) : null;
}

function navigateToSlide(slideNumber) {
    const totalSlides = getTotalSlides();
    if (slideNumber && slideNumber >= 1 && slideNumber <= totalSlides) {
        window.location.href = `slide${slideNumber}.html`;
    }
}

// Keyboard navigation for slides
document.addEventListener('keydown', (e) => {
    const currentSlide = getCurrentSlideNumber();
    
    if (!currentSlide) return;
    
    if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        const nextSlide = findNextVisibleSlide(currentSlide, 1);
        navigateToSlide(nextSlide);
    } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        const prevSlide = findNextVisibleSlide(currentSlide, -1);
        navigateToSlide(prevSlide);
    }
});

// Update navigation buttons and indicators
window.addEventListener('DOMContentLoaded', () => {
    const currentSlide = getCurrentSlideNumber();
    
    if (!currentSlide) return;
    
    const totalSlides = getTotalSlides();
    const slideIndicator = document.querySelector('.slide-indicator');
    const navbar = document.querySelector('.navbar .container-fluid');
    
    // Update slide indicator and move it to navbar
    if (slideIndicator) {
        slideIndicator.textContent = `${currentSlide} / ${totalSlides}`;
        // Move the indicator to the navbar if it's not already there
        if (navbar && slideIndicator.parentElement.classList.contains('nav-controls')) {
            navbar.appendChild(slideIndicator);
        }
    }
    
    // Mobile touch navigation
    let touchStartX = 0;
    let touchEndX = 0;
    let touchStartY = 0;
    let touchEndY = 0;
    
    // Swipe gesture handling
    document.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });
    
    document.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 50; // Minimum distance for swipe
        const xDiff = touchEndX - touchStartX;
        const yDiff = Math.abs(touchEndY - touchStartY);
        
        // Only trigger if horizontal swipe is greater than vertical (not scrolling)
        if (Math.abs(xDiff) > swipeThreshold && Math.abs(xDiff) > yDiff) {
            if (xDiff > 0) {
                // Swipe right - previous slide
                const prevSlide = findNextVisibleSlide(currentSlide, -1);
                navigateToSlide(prevSlide);
            } else {
                // Swipe left - next slide
                const nextSlide = findNextVisibleSlide(currentSlide, 1);
                navigateToSlide(nextSlide);
            }
        }
    }
    
    // Click/Tap navigation (left/right sides of screen) - PowerPoint-like behavior
    document.addEventListener('click', (e) => {
        // Ignore clicks on links and interactive elements
        if (e.target.tagName === 'A' || e.target.closest('a')) {
            return;
        }
        
        // Ignore clicks on slideshow controls and within slideshow container
        if (e.target.closest('.slideshow-prev') || 
            e.target.closest('.slideshow-next') || 
            e.target.closest('.slideshow-dot') ||
            e.target.closest('.slideshow-container')) {
            return;
        }
        
        const screenWidth = window.innerWidth;
        const clickX = e.clientX;
        
        // Mobile/tablet: 25% zones, Desktop: 50% zones (PowerPoint-like)
        const clickZone = screenWidth < 1024 ? screenWidth * 0.25 : screenWidth * 0.5;
        
        if (clickX < clickZone) {
            // Click/tap on left side - previous slide
            const prevSlide = findNextVisibleSlide(currentSlide, -1);
            navigateToSlide(prevSlide);
        } else if (clickX > screenWidth - clickZone) {
            // Click/tap on right side - next slide
            const nextSlide = findNextVisibleSlide(currentSlide, 1);
            navigateToSlide(nextSlide);
        }
    });
});

// Add smooth page transition effect
window.addEventListener('load', () => {
    document.querySelector('.slide').classList.add('active');
});
