const scrollUpBtn = document.querySelector('.scroll-up-btn');

window.addEventListener('scroll', toggleScrollUpBtn);
scrollUpBtn.addEventListener('click', scrollToTop);


function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function toggleScrollUpBtn() {
  if (window.scrollY > 1000) {
    scrollUpBtn.style.display = 'block';
  } else {
    scrollUpBtn.style.display = 'none';
  }
}