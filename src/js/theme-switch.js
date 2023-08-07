const toggleSwitch = document.getElementById('theme-switch');
const currentTheme = localStorage.getItem('theme');
const mainElement = document.querySelector('body');

if (currentTheme) {
  mainElement.classList.add(currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    mainElement.classList.remove('theme-light');
    mainElement.classList.add('theme-dark');

    localStorage.setItem('theme', 'theme-dark');
  } else {
    mainElement.classList.remove('theme-dark');
    mainElement.classList.add('theme-light');

    localStorage.setItem('theme', 'theme-light');
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);
