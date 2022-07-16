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
  section1.scrollIntoView({ behavior: 'smooth', block: 'start' });
});




//page navigation
// navLinksList.forEach(function (li) {
//   li.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id=this.getAttribute("href")
//     document.querySelector(id).scrollIntoView({behavior: 'smooth', block: 'start' })
//   });
// });
navLinks.addEventListener("click",function(e){
  e.preventDefault()
  document.querySelector(e.target.getAttribute("href"))?.scrollIntoView({behavior: 'smooth', block: 'center' })    
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


