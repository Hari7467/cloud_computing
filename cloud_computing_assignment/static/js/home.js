document.addEventListener('DOMContentLoaded', function() {
    // Dynamic animations for feature cards
    const cards = document.querySelectorAll('.card');
    if (cards.length > 0) {
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('visible');
            }, 200 * index);
            
            card.addEventListener('click', function() {
                this.classList.toggle('expanded');
            });
        });
    }
    
    // Learn More button functionality
    const learnMoreBtn = document.getElementById('learnMore');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function() {
            window.location.href = '/about';
        });
    }
    
    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    const formResponse = document.getElementById('formResponse');
    const resetFormBtn = document.getElementById('resetForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple form validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (name && email && message) {
                // Simulate form submission
                contactForm.style.display = 'none';
                formResponse.classList.remove('hidden');
                
                // Log form data (in a real app, this would be sent to a server)
                console.log({
                    name,
                    email,
                    message
                });
            }
        });
    }
    
    if (resetFormBtn) {
        resetFormBtn.addEventListener('click', function() {
            contactForm.reset();
            contactForm.style.display = 'block';
            formResponse.classList.add('hidden');
        });
    }
    
    // Cloud animation enhancement
    const cloud = document.querySelector('.cloud');
    if (cloud) {
        document.addEventListener('mousemove', function(e) {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            const moveX = (mouseX - 0.5) * 20;
            const moveY = (mouseY - 0.5) * 10;
            
            cloud.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    }
    
    // Add active class to current navigation item
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
