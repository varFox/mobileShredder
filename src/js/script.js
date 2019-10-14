document.addEventListener('DOMContentLoaded', () => {
  const popup = document.querySelector('#popup'),
    popupPolitic = document.querySelector('#popup-politic'),
    mobilMenu = document.querySelector('.menu-mobil'),
    pun = document.querySelector('header .main-menu'),
    pun2 = document.querySelector('section#contacts .main-menu'),
    texth2 = document.querySelector('section#question h2');

  document.querySelector('.showPopup').addEventListener('click', () => {
    popup.style.display = 'block';
    document.body.style.overflow = 'hidden';
  });
  document.querySelector('#showPolitic').addEventListener('click', () => {
    popupPolitic.style.display = 'block';
    document.body.style.overflow = 'hidden';
  });
  document.querySelectorAll('.popup-bg, .close').forEach(item => {
    item.addEventListener('click', event => {
      if (event.target.classList.contains('popup-bg') ||
        event.target.classList.contains('close')) {
        popup.style.display = '';
        popupPolitic.style.display = '';
        document.body.style.overflow = '';
      }

    });
  });
  const showMobMenu = () => {
    const imgMenu = document.querySelector('header .main-menu .icon img');
    if (window.innerWidth <= 540) {
      if (!pun.classList.contains('mobil')) pun.classList.add('mobil');
      if (!pun2.classList.contains('mobil')) pun2.classList.add('mobil');
      imgMenu.src = './images/molil-menu.png';
      texth2.innerHTML = 'Остались вопросы?</br> Свяжитесь с нами.';
      document.body.addEventListener('click', event => {
        if (((event.target.classList.contains('close') || event.target.href) && event.target.closest('.menu-mobil')) ||
          !event.target.closest('.menu-mobil') && mobilMenu.classList.contains('active-menu')) {
          mobilMenu.classList.remove('active-menu');
        }
        if (event.target.src && event.target.closest('.main-menu')) {
          mobilMenu.classList.add('active-menu');
        }
      });
    } else {
      imgMenu.src = './images/scissors.png';
      if (pun.classList.contains('mobil')) pun.classList.add('mobil');
      if (pun2.classList.contains('mobil')) pun2.classList.add('mobil');
      texth2.innerHTML = 'У Вас остались вопросы?</br>Свяжитесь с нами.';

    }
  };
  (function () {
    var throttle = function (type, name, obj) {
      obj = obj || window;
      var running = false;
      var func = function () {
        if (running) {
          return;
        }
        running = true;
        requestAnimationFrame(function () {
          obj.dispatchEvent(new CustomEvent(name));
          running = false;
        });
      };
      obj.addEventListener(type, func);
    };

    /* init - you can init any event */
    throttle("resize", "optimizedResize");
  })();
  showMobMenu();
  window.addEventListener("optimizedResize", function () {
    showMobMenu(); // вызов той самой функции
  });



});