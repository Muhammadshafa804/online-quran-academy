// pricing.js - Pricing page functionality
document.addEventListener('DOMContentLoaded', function () {
    console.log('Pricing page loaded');

    // Pricing toggle functionality
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

    // Plan button click handlers
    const planButtons = document.querySelectorAll('.plan-btn');
    planButtons.forEach(button => {
        button.addEventListener('click', function () {
            const planName = this.closest('.pricing-card').querySelector('h3').textContent;
            alert(`Thank you for choosing ${planName} plan! Redirecting to payment.`);
        });
    });

    // FAQ Toggle Functionality - YEH ADD KARNA HAI
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        item.addEventListener('click', function () {
            // Check if already active
            const isActive = this.classList.contains('active');

            // Close all FAQ items first
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            // Open clicked item if it wasn't active
            if (!isActive) {
                this.classList.add('active');
            }
        });
    });

    console.log('FAQ functionality loaded');
});
