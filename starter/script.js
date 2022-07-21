'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const section1 = document.querySelector('#section--1');
const buttonLearnMore = document.querySelector('.btn--scroll-to');
const navLinks = document.querySelector('.nav__links');
const tabsAll = document.querySelector('.operations__tab-container');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
const sections = document.querySelectorAll('.section');
const images=document.querySelectorAll("img[data-src]");
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

buttonLearnMore.addEventListener('click', function () {
  section1.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});

//page navigation
// navLinksList.forEach(function (li) {
//   li.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id=this.getAttribute("href")
//     document.querySelector(id).scrollIntoView({behavior: 'smooth', block: 'start' })
//   });
// });
navLinks.addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector(e.target.getAttribute('href'))?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});

//tabs
tabsAll.addEventListener('click', function (e) {
  e.preventDefault();
  const clicked = e.target.closest('.operations__tab');

  if (!clicked) return;
  const currentActive = tabsAll.querySelector('.operations__tab--active');
  currentActive.classList.remove('operations__tab--active');
  const newActive = clicked;
  newActive.classList.add('operations__tab--active');
  const newActiveNumber = newActive.getAttribute('data-tab');
  [...tabsAll.parentElement.children].forEach(function (el) {
    el.classList.remove('operations__content--active');
  });
  const clickedContent = tabsAll.parentElement.querySelector(
    `.operations__content--${newActiveNumber}`
  );
  clickedContent.classList.add('operations__content--active');
});

//navlink opacity
const handleOverNav = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const allLinks = link.closest('.nav').querySelectorAll('.nav__link ');
    const logo = link.closest('.nav').querySelector('.nav__logo');
    allLinks.forEach(li => {
      if (li !== link) {
        li.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleOverNav.bind(0.5));
nav.addEventListener('mouseout', handleOverNav.bind(1));

//sticky nav
const stickyNav = function (entries, observer) {
  const entry = entries[0];
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${nav.getBoundingClientRect().height}px`,
});
headerObserver.observe(header);

//loading sections
const sectionLoaderCallBack = function (entries, observer) {
  const entry = entries[0];
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionLoader = new IntersectionObserver(sectionLoaderCallBack, {
  root: null,
  threshold: 0.1,
});
sections.forEach(function (sec) {
  sectionLoader.observe(sec);
  // sec.classList.add('section--hidden');
});


//lazy images

const imageLoaderCallBack = function (entries, observer) {
  const entry = entries[0];
  if (!entry.isIntersecting) return;
  entry.target.src=entry.target.dataset.src;
  entry.target.addEventListener("load",function(){
    entry.target.classList.remove("lazy-img");
  })
  observer.unobserve(entry.target);

};

const imageLoader = new IntersectionObserver(imageLoaderCallBack, {
  root: null,
  threshold: 0.3,
});

images.forEach(function(img){
  imageLoader.observe(img);
})

//sliding

const slides=document.querySelectorAll(".slide")
const betnLeft=document.querySelector(".slider__btn--left");
const betnRightt=document.querySelector(".slider__btn--right");
let currSlide=0;
slides.forEach((sl,i)=>{
  sl.style.transform=`translateX(${100*i}%)`
})

betnRightt.addEventListener("click", function(e){
  if(currSlide==3) return
  currSlide++
  e.preventDefault();
  slides.forEach((sl,i)=>{
    sl.style.transform=`translateX(${100*(i-currSlide)}%)` 
  })
})

betnLeft.addEventListener("click", function(e){
  if(currSlide==0) return
  currSlide--
  e.preventDefault();
  slides.forEach((sl,i)=>{
    sl.style.transform=`translateX(${100*(i-currSlide)}%)` 
  })
})


// const message = document.createElement('div');
// message.classList.add('cookie-message');

// message.innerHTML = `We used Cookie for Improved Functionality and anylatics
// . <button class="btn btn--close-cookie">Got it</button>`;

// const header=document.querySelector(".header")
// header.append(message)

// message.style.backgroundColor="#A9A9A9"
// message.style.alignItems="center"
// // console.log(parseFloat(getComputedStyle(message).height));

// const logo=document.querySelector(".nav__logo")
// logo.setAttribute('alt', "Lmaoo");
// console.log(logo.getAttribute('src'))

// const link=document.querySelector('.twitter-link')
// console.log(link.getAttribute('href'));

// logo.classList.toggle("twitter-link",true)
// console.log(logo.classList);

// button.addEventListener('mouseenter', function () {
//   alert('lmaoo');

// });

// const h1=document.querySelector("h1");
// const alertH1=function(){
//   alert("hiii")
//   h1.removeEventListener('mouseenter', alertH1)
// };

// h1.addEventListener("mouseenter",alertH1);

// document.querySelector('.nav').addEventListener("click", function(e){
//   this.style.backgroundColor=" #00FF00"
//   console.log(e.target);
//   console.log(e.currentTarget);

// })
// document.querySelector('.nav__links').addEventListener("click", function(e){
//   this.style.backgroundColor=" #ff0000"
// });
//  document.querySelector('.nav__link').addEventListener("click", function(e){
//   this.style.backgroundColor=" #0000FF"
//   e.stopPropagation();
// });

// const h1=document.querySelector("h1")
// console.log(h1.querySelector('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// console.log(h1.firstElementChild);

// console.log(h1.parentElement);
// console.log(h1.parentNode);

// console.log( );
