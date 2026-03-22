// Generate starfield
const field = document.getElementById('starfield');
const count = 120;

for (let i = 0; i < count; i++) {
  const s = document.createElement('div');
  s.classList.add('star');
  const size = Math.random() * 2.5 + 0.5;
  s.style.width = size + 'px';
  s.style.height = size + 'px';
  s.style.left = Math.random() * 100 + '%';
  s.style.top = Math.random() * 100 + '%';
  s.style.setProperty('--dur', (Math.random() * 4 + 2) + 's');
  s.style.setProperty('--min-o', (Math.random() * 0.2).toFixed(2));
  s.style.setProperty('--max-o', (Math.random() * 0.5 + 0.4).toFixed(2));
  s.style.animationDelay = (Math.random() * 5) + 's';
  field.appendChild(s);
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
  // Add smooth scrolling behavior to all anchor links
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add navbar background on scroll
  const navbar = document.querySelector('.nav');
  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 26, 0.95)';
      } else {
        navbar.style.background = 'rgba(10, 10, 26, 0.85)';
      }
    });
  }
});