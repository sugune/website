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

const waifus = [
  {
    waifu: 'Sumireko',
    birthday: 'Birthday: December 31',
    cuteness: 'Cuteness: infinite',
    desc: 'sumireko is one of cyrus\' waifus',
    message: 'Sumireko: "i love cyrus"'
  },
  {
    waifu: 'Nemi',
    birthday: 'Birthday: August 4',
    cuteness: 'Cuteness: infinite',
    desc: 'nemi is one of cyrus\' waifus',
    message: 'Nemi: "i love cyrus"'
  },
  {
    waifu: 'Gura',
    birthday: 'Birthday: June 20',
    cuteness: 'Cuteness: infinite',
    desc: 'gura is one of cyrus\' waifus',
    message: 'Gura: "i love cyrus"'
  },
  {
    waifu: 'Suon',
    birthday: 'Birthday: September 4',
    cuteness: 'Cuteness: infinite',
    desc: 'suon is one of cyrus\' waifus',
    message: 'Suon: "i love cyrus"'
  },
  {
    waifu: 'Sora',
    birthday: 'Birthday: October 4',
    cuteness: 'Cuteness: infinite',
    desc: 'sora is one of cyrus\' waifus',
    message: 'Sora: "i love cyrus"'
  },
  {
    waifu: 'Kinna',
    birthday: 'Birthday: November 4',
    cuteness: 'Cuteness: infinite',
    desc: 'kinna is one of cyrus\' waifus',
    message: 'Kinna: "i love cyrus"'
  },
];

const btns = document.querySelectorAll('.waifu-card button');
const body = document.querySelector('body');

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const data = e.currentTarget.previousElementSibling.innerHTML;
    
    let i;
    if (data === 'sumireko') {
      i = 0;
    } else if (data === 'nemi') {
      i = 1;
    } else if (data === 'gura') {
      i = 2;
    } else if (data === 'suon') {
      i = 3;
    } else if (data === 'sora') {
      i = 4;
    } else if (data === 'kinna') {
      i = 5;
    }
    
    const waifu = waifus[i].waifu;
    const birthday = waifus[i].birthday;
    const cuteness = waifus[i].cuteness;
    const desc = waifus[i].desc;
    const message = waifus[i].message;
    
    /*
    if (data === 'sumireko') {
      waifu = waifus[0].waifu;
      birthday = waifus[0].birthday;
      cuteness = waifus[0].cuteness;
      desc = waifus[0].desc;
      message = waifus[0].message;
    } else if (data === 'nemi') {
      waifu = waifus[1].waifu;
      birthday = waifus[1].birthday;
      cuteness = waifus[1].cuteness;
      desc = waifus[1].desc;
      message = waifus[1].message;
    } else if (data === 'gura') {
      waifu = waifus[2].waifu;
      birthday = waifus[2].birthday;
      cuteness = waifus[2].cuteness;
    } else if (data === 'suon') {
      waifu = waifus[3].waifu;
      birthday = waifus[3].birthday;
      cuteness = waifus[3].cuteness;
    } else if (data === 'sora') {
      waifu = waifus[4].waifu;
      birthday = waifus[4].birthday;
      cuteness = waifus[4].cuteness;
    } else if (data === 'kinna') {
      waifu = waifus[5].waifu;
      birthday = waifus[5].birthday;
      cuteness = waifus[5].cuteness;
    }*/
    
    console.log(waifu)
    console.log(birthday)
    console.log(cuteness)
    
    // create element and append
    const element = document.createElement('div');
    element.classList.add('info');
    element.innerHTML = `
        <div class="info-container">
          <button><i class="fa-solid fa-xmark"></i></button>
          <div class="info-message">
            <h2>${waifu}</h2>
            <p>${birthday}</p>
            <p>${cuteness}</p>
            <p>info: <span id="indent">${desc}</span></p>
            <p id="mess">${message}</p>
        </div>`;
    
    const close = element.querySelector('button');
    const container = element.querySelector('.info-container');
    console.log(container)
    close.addEventListener('click', () => {
      const eliminate = body.querySelector('.info');
      container.classList.remove('pop');
      setTimeout(() => {
        eliminate.remove();
      }, 300)
    });
    
    body.appendChild(element);
    setTimeout(() => {
    container.classList.add('pop');
      
    }, 1)
  });
});
