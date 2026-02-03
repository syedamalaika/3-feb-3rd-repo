/* script.js */
document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');

    // Header Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Simple Cart Counter (Simulation)
    let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
    const countDisplay = document.getElementById('cart-count');

    if (countDisplay) {
        countDisplay.textContent = cartCount;
    }

    // Product Card Interaction (Simulated)
    const overlayBtns = document.querySelectorAll('.product-overlay');
    overlayBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            cartCount++;
            localStorage.setItem('cartCount', cartCount);
            if (countDisplay) {
                countDisplay.textContent = cartCount;
                // Simple animation
                countDisplay.style.transform = 'scale(1.3)';
                setTimeout(() => {
                    countDisplay.style.transform = 'scale(1)';
                }, 200);
            }
            alert('Item added to your collection.');
        });
    });

    // Reveal animations on scroll (Basic)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.product-card, .footer-col');
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 1s ease-out';
        observer.observe(el);
    });
});
