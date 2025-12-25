const mobileMenu = document.querySelector('[data-menu]');
const openMenuBtn = document.querySelector('[data-menu-open]');
const closeMenuBtns = document.querySelectorAll('[data-menu-close]');

function toggleMenu() {
  const isOpen = mobileMenu.classList.contains('is-open');

  if (isOpen) {
    mobileMenu.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  } else {
    mobileMenu.classList.add('is-open');
    document.body.classList.add('menu-open');
  }
}

openMenuBtn.addEventListener('click', toggleMenu);

closeMenuBtns.forEach(function(btn) {
  btn.addEventListener('click', toggleMenu);
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
    toggleMenu();
  }
});
