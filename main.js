// main.js - COMPLETE FIXED VERSION
document.addEventListener('DOMContentLoaded', function () {
    console.log('Online Quran Pak Academy - JS Loaded');

    // Mobile Menu Toggle - FIXED
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const navMenu = document.getElementById('navMenu');

    if (hamburgerMenu && navMenu) {
        hamburgerMenu.addEventListener('click', function (e) {
            e.stopPropagation();
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (e) {
            if (!e.target.closest('.nav-container') && !e.target.closest('.nav-menu')) {
                navMenu.classList.remove('active');
            }
        });

        // Close menu when clicking on links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                navMenu.classList.remove('active');
            });
        });
    }

    // Back to Top Button
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 300) {
                backToTop.style.display = 'block';
            } else {
                backToTop.style.display = 'none';
            }
        });

        backToTop.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Plan button click handlers
    const planButtons = document.querySelectorAll('.plan-btn');
    planButtons.forEach(button => {
        button.addEventListener('click', function () {
            const planName = this.closest('.pricing-card').querySelector('h3').textContent;
            alert(`Thank you for choosing ${planName} plan! Redirecting to payment.`);
        });
    });

    // CTA button handler
    const ctaBtn = document.querySelector('.cta-btn');
    if (ctaBtn) {
        ctaBtn.addEventListener('click', function () {
            alert('Redirecting to free trial registration...');
        });
    }

    // Course buttons
    const courseBtns = document.querySelectorAll('.course-btn');
    courseBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const courseName = this.closest('.course-card').querySelector('h3').textContent;
            alert(`Redirecting to ${courseName} details...`);
        });
    });

    // Contact Form Handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Thank you for your message! We will contact you soon.');
            this.reset();
        });
    }

    // Newsletter Form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            alert(`Thank you for subscribing with ${email}!`);
            this.reset();
        });
    }

    // Pricing Toggle Functionality
    const pricingToggle = document.getElementById('pricingToggle');
    const monthlyPrices = document.querySelectorAll('.price.monthly');
    const yearlyPrices = document.querySelectorAll('.price.yearly');

    if (pricingToggle) {
        pricingToggle.addEventListener('change', function () {
            if (this.checked) {
                // Switch to yearly pricing
                monthlyPrices.forEach(price => price.style.display = 'none');
                yearlyPrices.forEach(price => price.style.display = 'inline');
            } else {
                // Switch to monthly pricing
                monthlyPrices.forEach(price => price.style.display = 'inline');
                yearlyPrices.forEach(price => price.style.display = 'none');
            }
        });
    }
});

// Working Hours Toggle Function
function toggleWorkingHours() {
    const hoursDropdown = document.getElementById('hoursDropdown');
    const hoursToggle = document.querySelector('.hours-toggle');
    
    if (hoursDropdown.style.display === 'none' || hoursDropdown.style.display === '') {
        hoursDropdown.style.display = 'block';
        hoursToggle.textContent = 'Hide Timings';
        hoursToggle.style.color = '#FFD700';
    } else {
        hoursDropdown.style.display = 'none';
        hoursToggle.textContent = 'View Timings';
        hoursToggle.style.color = '#FFFFFF';
    }
}

// Initialize hours dropdown as hidden
document.addEventListener('DOMContentLoaded', function() {
    const hoursDropdown = document.getElementById('hoursDropdown');
    if (hoursDropdown) {
        hoursDropdown.style.display = 'none';
    }
});
