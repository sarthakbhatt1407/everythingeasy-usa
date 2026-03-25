// Load navigation components dynamically
document.addEventListener('DOMContentLoaded', function() {
  loadNavbar();
  loadFooter();
});

function loadNavbar() {
  fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
      const navContainer = document.getElementById('navbar-container');
      if (navContainer) {
        navContainer.innerHTML = data;
        initNavbarScroll();
      }
    })
    .catch(error => console.log('Error loading navbar:', error));
}

function loadFooter() {
  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      const footerContainer = document.getElementById('footer-container');
      if (footerContainer) {
        footerContainer.innerHTML = data;
      }
    })
    .catch(error => console.log('Error loading footer:', error));
}

function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        navbar.classList.add('shadow');
      } else {
        navbar.classList.remove('shadow');
      }
    });
  }
}

// Smooth scrolling for anchor links
document.addEventListener('click', function(e) {
  const link = e.target.closest('a[href^="#"]');
  if (link) {
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
});
