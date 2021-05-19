const tl = gsap.timeline();
tl.from('.hero__title', {
  opacity: 0,
  y: 75,
  duration: 0.5,
  ease: 'back'
});
tl.from('.hero__btn', {
  opacity: 0,
  y: 75,
  duration: 0.5,
  ease: 'back'
}, '-=0.5');
tl.from('.hero__descr', {
  opacity: 0,
  duration: 0.5
});
tl.from('.img1', {
  opacity: 0,
  duration: 0.3
});
tl.from('.img2', {
  opacity: 0,
  duration: 0.3
});
tl.from('.img3', {
  opacity: 0,
  duration: 0.3
});
tl.from('.photos__author', {
  opacity: 0,
  duration: 0.3
}, '-=0.3');

const menu = document.querySelector('.menu');
const tlBurger = gsap.timeline();
tlBurger.from('.menu__top', {
  y: -138,
  opacity: 0,
  duration: 1
});
tlBurger.from('.menu__container', {
  opacity: 0,
  duration: 0.5
});
tlBurger.from('.nav__list', {
  y: 100,
  opacity: 0,
  duration: 0.5
});
tlBurger.from('.social', {
  y: 100,
  opacity: 0,
  duration: 0.5
});
tlBurger.from('.menu__right', {
  y: 100,
  opacity: 0,
  duration: 0.5
}, '-=0.5');

tlBurger.paused(true)

document.querySelector('.burger').addEventListener('click', (e) => {
  e.preventDefault();
  menu.classList.add('menu--open');
  tlBurger.play();
});

document.querySelector('.close').addEventListener('click', (e) => {
  e.preventDefault();
  tlBurger.reverse(0).then(() => { menu.classList.remove('menu--open') });
})
