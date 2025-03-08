'use strict';
//# ///////////////////////////////////////
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const nav = document.querySelector('.nav');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

//# ///////////////////////////////////////
//*✅ Modal window
//const openModal = function () {
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//# ///////////////////////////////////////////////////////
//*✅✅ Button Scrolling
btnScrollTo.addEventListener('click', function (e) {
  e.preventDefault();
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.scrollX, scrollY);

  console.log(
    'Height/Width of viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //*✅Scrolling  ( not workin in any browser except 'firfox )
  //* Modern way of scrolling an element
  section1.scrollIntoView({ behavior: 'smooth' }); //? ( not working in any browser except 'firfox )
});

//# /////////////////////////////////////////////////////
//*✅✅Page Navigation ( Through Event Delegation )
// In Event Delegation we basically need two steps:
// 1: Add eventListener to common parent element
// 2: Determine which element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // console.log(e.target);

  // Matching Stretegy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    //console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//# //////////////////////////////////////////////////
//*✅✅Tabbed Component
//tabs.forEach(t => t.addEventListener('click', () => console.log('Tab')));  // this is an old school way
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  //console.log(clicked);

  // Gaurd Class
  if (!clicked) return;

  // Removing active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Active tab
  clicked.classList.add('operations__tab--active');

  // Activate Content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//# /////////////////////////////////////////////////
//*✅✅Menu fade animation
// const handleHover = function (e, opacity) {
const handleHover = function (e) {
  //console.log(this, e.currentTarget);
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    // console.log(link);
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      // console.log(el);
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

//# /////////////////////////////////////////////////
//*✅✅Sticky navigation

//* Using Interscetion Observer API
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);

const stickyNav = function (enteries) {
  const [entry] = enteries;
  console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  //rootMargin: '-90px',
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

//# /////////////////////////////////////////////
//*✅✅ Reveal Sections
//* Using Interscetion Observer API
const allSections = document.querySelectorAll('.section');

const revealSections = function (enteries, observer) {
  const [entry] = enteries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSections, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

//# //////////////////////////////////////////
//*✅✅ lazy Loding Image
//* Using Interscetion Observer API
const imageTargets = document.querySelectorAll('img[data-src]');

const lazyImage = function (enteries, observer) {
  //console.log(enteries);
  //const [entry, entry2, entry3] = enteries;
  //const entry = enteries[0];
  // const [entry, entry2, entry3] = enteries;
  // console.log('image-1', entry);
  // console.log('image-2', entry2);
  // console.log('image-3', entry3);

  const [entry] = enteries;
  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imageObserver = new IntersectionObserver(lazyImage, {
  root: null,
  threshold: 0.2,
});

imageTargets.forEach(function (img) {
  imageObserver.observe(img);
});

//# ///////////////////////////////////////////
//*✅✅ Slider
// Main Function
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  //const slider = document.querySelector('.slider');
  // slider.style.transform = 'scale(0.4) translateX(-800px)';
  // slider.style.overflow = 'visible';

  let curSlide = 0;
  let maxSlide = slides.length;

  // Functions
  const creatDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}" data-name="hameed"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${-100 * (i - slide)}%)`;
      // curSlide = 1: -100%, 0%, 100%, 200%
    });
  };

  // Next Slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) curSlide = 0;
    else curSlide++;
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  // Previous Slide
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    creatDots();
    activateDot(0);
  };
  init();

  // Event Handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') prevSlide();
    e.key === 'ArrowLeft' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      // const name = e.target.dataset.name;
      // console.log(name);
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
