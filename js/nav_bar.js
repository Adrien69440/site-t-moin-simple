// File: js/nav_bar.js

// Function to toggle the menu on mobile devices
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

// Attach the toggle function to the menu toggle button
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  menuToggle.addEventListener('click', toggleMenu);
});
