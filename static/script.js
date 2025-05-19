// Main JavaScript file for General AI Safety Systems

document.addEventListener('DOMContentLoaded', function() {
    // Dark mode toggle functionality
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    if (darkModeToggle) {
        // Check for saved user preference
        const darkMode = localStorage.getItem('darkMode') === 'true';
        
        // Apply dark mode if previously selected
        if (darkMode) {
            document.body.classList.add('dark-mode');
            darkModeToggle.checked = true;
        }
        
        // Add event listener for toggle
        darkModeToggle.addEventListener('change', function() {
            if (this.checked) {
                document.body.classList.add('dark-mode');
                localStorage.setItem('darkMode', 'true');
            } else {
                document.body.classList.remove('dark-mode');
                localStorage.setItem('darkMode', 'false');
            }
        });
    }

    // PDF loading animation
    const pdfLinks = document.querySelectorAll('.pdf-button');
    
    pdfLinks.forEach(link => {
        link.addEventListener('click', function() {
            const buttonText = this.querySelector('.button-text');
            const loadingSpinner = this.querySelector('.loading');
            
            if (buttonText && loadingSpinner) {
                buttonText.style.display = 'none';
                loadingSpinner.style.display = 'inline-block';
                
                // Reset after PDF opens (or after 2 seconds if something goes wrong)
                setTimeout(() => {
                    buttonText.style.display = 'inline-block';
                    loadingSpinner.style.display = 'none';
                }, 2000);
            }
        });
    });

    // Search functionality for PDFs
    const searchInput = document.getElementById('searchInput');
    const noResultsElement = document.getElementById('noResults');
    
    if (searchInput) {
        searchInput.addEventListener('input', debounce(function() {
            const searchTerm = this.value.toLowerCase().trim();
            const pdfCards = document.querySelectorAll('.pdf-card');
            let resultsFound = false;
            
            pdfCards.forEach(card => {
                const title = card.querySelector('.card-title').textContent.toLowerCase();
                const description = card.querySelector('.card-description').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || description.includes(searchTerm) || searchTerm === '') {
                    card.style.display = 'block';
                    resultsFound = true;
                } else {
                    card.style.display = 'none';
                }
            });
            
            // Show/hide "no results" message
            if (noResultsElement) {
                if (!resultsFound && searchTerm !== '') {
                    noResultsElement.classList.remove('hidden');
                } else {
                    noResultsElement.classList.add('hidden');
                }
            }
        }, 300));
    }
    
    // Helper function to debounce search input
    function debounce(func, wait) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    // Category filter buttons removed as requested

    // Animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.scroll-animate');
        
        elements.forEach(element => {
            const position = element.getBoundingClientRect();
            
            // Check if element is in viewport
            if (position.top < window.innerHeight * 0.9 && position.bottom >= 0) {
                element.classList.add('animate-fadeIn');
            }
        });
    };
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Run once on page load
    setTimeout(animateOnScroll, 100);
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Newsletter form event listeners removed as requested
    
    // Add hover effects to card items for better interactivity
    const pdfCards = document.querySelectorAll('.pdf-card');
    pdfCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = 'var(--shadow-lg)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'var(--shadow-sm)';
        });
    });
}); 