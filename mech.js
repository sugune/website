const getElement = (className) => {
  const element = document.querySelector(`.${className}`);
  if (element) {
    return element;
  } else {
    console.log(`ERROR ${className} does not exist`);
  }
};

//select element
const toggleBtn = getElement('toggle-btn');
const menu = getElement('nav-menu');
const navbar = getElement('navbar');
const links = document.querySelectorAll('.nav-link');

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('is-active');
  menu.classList.toggle('active');
});

// show scroll

window.addEventListener('scroll', () => {
  const scroll = window.pageYOffset;
  const navHeight = navbar.clientHeight;
  if (scroll > navHeight) {
    navbar.classList.add('show');
  } else {
    navbar.classList.remove('show');
  }
});

// scroll

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute('href').slice(1);
    const navHeight = navbar.clientHeight;
    const element = document.querySelector(`#${id}`);
    const topElement = element.offsetTop;
    window.scroll({
      top: topElement -  navHeight
    });
    menu.classList.remove('active');
    toggleBtn.classList.remove('is-active');
  });
});
