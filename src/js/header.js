(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    closeMenuLnk1: document.querySelector('[link1-menu-close]'),
    closeMenuLnk2: document.querySelector('[link2-menu-close]'),
    closeMenuLnk3: document.querySelector('[link3-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuLnk1.addEventListener('click', toggleMenu);
  refs.closeMenuLnk2.addEventListener('click', toggleMenu);
  refs.closeMenuLnk3.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();
