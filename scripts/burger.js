const burger = document.querySelector('.page-header__burger-button');
const burgerLine = burger.querySelector('.page-header__burger-line');
const inner = document.querySelector('.page-header__inner');
const navItems = document.querySelectorAll('nav.page-header-nav ul li');

function clickListener (e) {
  burgerLine.classList.toggle('active');
  inner.classList.toggle('active');
}

burger.addEventListener('click', clickListener);

navItems.forEach((item) => {
  item.addEventListener('click', clickListener)
})