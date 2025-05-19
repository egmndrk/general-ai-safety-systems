// Main JavaScript file for General AI Safety Systems

document.addEventListener('DOMContentLoaded', function() {
    // Dark mode toggle functionality
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    if (darkModeToggle) {
        // Check for saved user preference or system preference
        let darkMode = localStorage.getItem('darkMode');
        
        // If no preference is set, check system preference
        if (darkMode === null) {
            darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
            localStorage.setItem('darkMode', darkMode);
        } else {
            darkMode = darkMode === 'true';
        }
        
        // Apply dark mode if needed
        if (darkMode) {
            document.documentElement.classList.add('dark');
            darkModeToggle.checked = true;
        }
        
        // Add event listener for toggle
        darkModeToggle.addEventListener('change', function() {
            if (this.checked) {
                document.documentElement.classList.add('dark');
                localStorage.setItem('darkMode', 'true');
            } else {
                document.documentElement.classList.remove('dark');
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
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    }

    // Animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.scroll-animate');
        
        elements.forEach(element => {
            const position = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Check if element is in viewport (with offset for smoother appearance)
            if (position.top < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    };
    
    // Run on scroll with throttling for better performance
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(function() {
                scrollTimeout = null;
                animateOnScroll();
            }, 100);
        }
    });
    
    // Run once on page load after a slight delay to allow page rendering
    setTimeout(animateOnScroll, 100);
}); 