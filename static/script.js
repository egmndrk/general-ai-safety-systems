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
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const pdfCards = document.querySelectorAll('.pdf-card');
            
            pdfCards.forEach(card => {
                const title = card.querySelector('.card-title').textContent.toLowerCase();
                const description = card.querySelector('.card-description').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // Animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.scroll-animate');
        
        elements.forEach(element => {
            const position = element.getBoundingClientRect();
            
            // Check if element is in viewport
            if (position.top < window.innerHeight && position.bottom >= 0) {
                element.classList.add('animate-fadeIn');
            }
        });
    };
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Run once on page load
    animateOnScroll();
}); 