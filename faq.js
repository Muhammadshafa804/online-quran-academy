// FAQ Page Functionality
document.addEventListener('DOMContentLoaded', function () {
    // FAQ Toggle Functionality
    const faqItems = document.querySelectorAll('.faq-item');

    // Smooth animation setup
    faqItems.forEach(item => {
        const answer = item.querySelector('.faq-answer');
        // Initially hide all answers with animation
        answer.style.maxHeight = '0';
        answer.style.overflow = 'hidden';
        answer.style.transition = 'max-height 0.3s ease';
    });

    // Enhanced toggle with animation
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const toggleIcon = item.querySelector('.faq-toggle i');

        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    const otherIcon = otherItem.querySelector('.faq-toggle i');
                    otherAnswer.style.maxHeight = '0';
                    otherItem.classList.remove('active');
                    otherIcon.classList.remove('fa-chevron-up');
                    otherIcon.classList.add('fa-chevron-down');
                }
            });

            // Toggle current item
            if (item.classList.contains('active')) {
                answer.style.maxHeight = '0';
                toggleIcon.classList.remove('fa-chevron-up');
                toggleIcon.classList.add('fa-chevron-down');
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                toggleIcon.classList.remove('fa-chevron-down');
                toggleIcon.classList.add('fa-chevron-up');
            }

            item.classList.toggle('active');
        });
    });

    // Category Filter Functionality
    const categoryBtns = document.querySelectorAll('.category-btn');
    const faqCategories = document.querySelectorAll('.faq-category');

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const category = btn.getAttribute('data-category');

            // Show/hide categories based on selection
            faqCategories.forEach(cat => {
                if (category === 'all' || cat.getAttribute('data-category') === category) {
                    cat.style.display = 'block';
                } else {
                    cat.style.display = 'none';
                }
            });
        });
    });

    // Search Functionality
    const searchInput = document.getElementById('faqSearch');

    searchInput.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();

        // Auto-close other categories when searching
        if (searchTerm.length > 0) {
            // Show all categories during search
            faqCategories.forEach(cat => {
                cat.style.display = 'block';
            });
        } else {
            // Restore category filtering when search is empty
            const activeCategory = document.querySelector('.category-btn.active').getAttribute('data-category');
            faqCategories.forEach(cat => {
                if (activeCategory === 'all' || cat.getAttribute('data-category') === activeCategory) {
                    cat.style.display = 'block';
                } else {
                    cat.style.display = 'none';
                }
            });
        }

        // Filter items based on search
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question h3').textContent.toLowerCase();
            const answer = item.querySelector('.faq-answer p').textContent.toLowerCase();

            if (question.includes(searchTerm) || answer.includes(searchTerm)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    });

    console.log('FAQ functionality loaded successfully!');
});