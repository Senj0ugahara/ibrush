const swiper = new Swiper('.more-posts__swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    }
  }
});

const select1 = new ItcCustomSelect('#select-1');
const select2 = new ItcCustomSelect('#select-2');
const select3 = new ItcCustomSelect('#select-3');

const btnOpenDialog = document.querySelectorAll('.header-btn');
const dialog = document.querySelector('.dialog');
const dialogClose = document.querySelector('.dialog-close');
const overlay = document.querySelector('.overlay');

btnOpenDialog.forEach(btn => {
  btn.addEventListener('click', () => {
    dialog.classList.add('is-active');
    overlay.classList.add('is-active');
    nav.classList.remove('is-active');
    burger.classList.remove('is-active');
  })
})

overlay.addEventListener('click', () => {
  dialog.classList.remove('is-active');
  overlay.classList.remove('is-active');
})

dialogClose.addEventListener('click', () => {
  dialog.classList.remove('is-active');
  overlay.classList.remove('is-active');
})

const burger = document.querySelector('.header-burger__line');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
  burger.classList.toggle('is-active');
  nav.classList.toggle('is-active');
})

if (window.innerWidth <= 540) {
  document.querySelector('.way-image__descr').innerText = 'Можно выделить три основных направления для прогресса JavaScript Middle...'
}