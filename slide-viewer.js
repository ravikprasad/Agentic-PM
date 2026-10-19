// Turns each .slide-viewer list into a one-at-a-time slide carousel.
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.slide-viewer').forEach((viewer) => {
        const slides = [...viewer.querySelectorAll('.slide-item')];
        const controls = viewer.querySelector('.slide-controls');
        const counter = viewer.querySelector('.slide-counter');
        let current = 0;
        const show = (index) => {
            current = (index + slides.length) % slides.length;
            slides.forEach((slide, i) => slide.classList.toggle('is-current', i === current));
            counter.textContent = `${current + 1} / ${slides.length}`;
            // Preload the neighbors so navigation does not flash.
            [current - 1, current + 1].forEach((i) => {
                const image = slides[(i + slides.length) % slides.length].querySelector('img');
                image.loading = 'eager';
            });
        };
        viewer.classList.add('is-enhanced');
        controls.hidden = false;
        controls.addEventListener('click', (event) => {
            const button = event.target.closest('[data-step]');
            if (button) show(current + Number(button.dataset.step));
        });
        viewer.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowLeft') { event.preventDefault(); show(current - 1); }
            if (event.key === 'ArrowRight') { event.preventDefault(); show(current + 1); }
        });
        let swipeStartX = null;
        const list = viewer.querySelector('.slide-list');
        list.addEventListener('pointerdown', (event) => {
            if (event.pointerType === 'touch') swipeStartX = event.clientX;
        });
        list.addEventListener('pointerup', (event) => {
            if (swipeStartX === null) return;
            const distance = event.clientX - swipeStartX;
            swipeStartX = null;
            if (Math.abs(distance) > 50) {
                list.dataset.swiped = 'true';
                setTimeout(() => delete list.dataset.swiped, 400);
                show(current + (distance < 0 ? 1 : -1));
            }
        });
        // A swipe should change slides, not open the full-size image.
        list.addEventListener('click', (event) => {
            if (list.dataset.swiped) event.preventDefault();
        });
        show(0);
    });
});
