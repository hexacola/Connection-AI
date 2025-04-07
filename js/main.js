// main.js - Interactive functionality for Connection AI landing page

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the accordion functionality
    initAccordion();
    
    // Add scroll animation for header
    initStickyHeader();
    
    // Initialize screenshot mockups (if needed)
    initMockupImages();
    
    // Initialize scroll and intersection animations
    initAnimations();
});

/**
 * Initialize accordion functionality for FAQ section
 */
function initAccordion() {
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');
        const icon = item.querySelector('.accordion-icon');
        
        header.addEventListener('click', () => {
            // Check if this item is already active
            const isActive = item.classList.contains('active');
            
            // Close all items first
            accordionItems.forEach(accItem => {
                accItem.classList.remove('active');
                accItem.querySelector('.accordion-content').style.maxHeight = '0px';
                accItem.querySelector('.accordion-icon').textContent = '+';
            });
            
            // If the clicked item wasn't active, open it
            if (!isActive) {
                item.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 'px';
                icon.textContent = '−';
            }
        });
    });
}

/**
 * Initialize sticky header behaviors
 */
function initStickyHeader() {
    const header = document.querySelector('.site-header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        // Detect scroll direction
        const currentScrollY = window.scrollY;
        const isScrollingDown = currentScrollY > lastScrollY;
        
        // Add shadow and reduce padding when scrolled down
        if (currentScrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
            header.style.padding = '0.75rem 0';
        } else {
            header.style.boxShadow = 'none';
            header.style.padding = '1rem 0';
        }
        
        lastScrollY = currentScrollY;
    });
}

/**
 * Initialize mockup images for steps
 */
function initMockupImages() {
    // Check if we need to replace missing mockup images with placeholders
    const mockupImages = document.querySelectorAll('.step-mockup');
    
    mockupImages.forEach(img => {
        img.addEventListener('error', () => {
            // If the image fails to load, replace with a colored div
            const parent = img.parentElement;
            const placeholder = document.createElement('div');
            placeholder.className = 'mockup-placeholder';
            placeholder.style.width = '100%';
            placeholder.style.height = '200px';
            placeholder.style.borderRadius = '12px';
            placeholder.style.backgroundColor = 'rgba(165, 110, 255, 0.1)';
            placeholder.style.display = 'flex';
            placeholder.style.alignItems = 'center';
            placeholder.style.justifyContent = 'center';
            
            const placeholderText = document.createElement('div');
            placeholderText.textContent = '📱 ' + img.alt;
            placeholderText.style.color = 'var(--highlight-color)';
            placeholderText.style.fontSize = '1.2rem';
            
            placeholder.appendChild(placeholderText);
            parent.replaceChild(placeholder, img);
        });
    });
    
    // Same for the hero mockup
    const heroMockup = document.querySelector('.hero-image .mockup');
    if (heroMockup) {
        heroMockup.addEventListener('error', () => {
            const parent = heroMockup.parentElement;
            const placeholder = document.createElement('div');
            placeholder.className = 'mockup-placeholder';
            placeholder.style.width = '100%';
            placeholder.style.height = '400px';
            placeholder.style.borderRadius = '12px';
            placeholder.style.backgroundColor = 'rgba(165, 110, 255, 0.1)';
            placeholder.style.display = 'flex';
            placeholder.style.alignItems = 'center';
            placeholder.style.justifyContent = 'center';
            placeholder.style.transform = 'perspective(800px) rotateY(-5deg)';
            placeholder.style.transition = 'transform 0.5s ease';
            
            const placeholderText = document.createElement('div');
            placeholderText.innerHTML = '<i class="fas fa-browser" style="font-size: 3rem; margin-bottom: 1rem;"></i><br>Connection AI in action';
            placeholderText.style.color = 'var(--highlight-color)';
            placeholderText.style.fontSize = '1.5rem';
            placeholderText.style.textAlign = 'center';
            
            placeholder.appendChild(placeholderText);
            parent.replaceChild(placeholder, heroMockup);
            
            // Add hover effect to placeholder
            placeholder.addEventListener('mouseenter', () => {
                placeholder.style.transform = 'perspective(800px) rotateY(0)';
            });
            
            placeholder.addEventListener('mouseleave', () => {
                placeholder.style.transform = 'perspective(800px) rotateY(-5deg)';
            });
        });
    }
}

// Initialize scroll and intersection animations
function initAnimations() {
    // Animate elements when they come into view
    const animatedElements = document.querySelectorAll('.feature-card, .step, .privacy-card, .update-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                // Unobserve after animation is triggered
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
    
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('nav a, .cta-button, .footer-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only process internal links starting with #
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Offset for header
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Optional: Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerOffset = 100; // Account for fixed header
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
}); 