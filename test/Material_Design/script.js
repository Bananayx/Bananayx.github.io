document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuIcon = document.querySelector('.mobile-menu');
  const navLinks = document.querySelector('.nav-links');

  mobileMenuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});
