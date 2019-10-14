document.addEventListener('DOMContentLoaded', () => {
  const popup = document.querySelector('#popup'),
    popupPolitic = document.querySelector('#popup-politic'),
    mobilMenu = document.querySelector('.menu-mobil');
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
    if (screen.width <= 540) {
      const imgMenu = document.querySelector('header .main-menu .icon img');
      imgMenu.src = './images/molil-menu.png';
      document.body.addEventListener('click', event => {
        if (((event.target.classList.contains('close') || event.target.href) && event.target.closest('.menu-mobil')) ||
          !event.target.closest('.menu-mobil') && mobilMenu.classList.contains('active-menu')) {
          mobilMenu.classList.remove('active-menu');
        }
        if (event.target.src && event.target.closest('.main-menu')) {
          mobilMenu.classList.add('active-menu');
        }
      });      
    }
  }
  showMobMenu();




});