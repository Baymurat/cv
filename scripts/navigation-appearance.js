const body = document.querySelector('body');
const sideBar = document.querySelector('.page-header__inner');

const scrollUp = 'scroll-up';
const scrollDown = 'scroll-down';

let lastScroll = 0;

const scrollListener = (e) => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    body.classList.remove(scrollUp);
    return;
  }
 
  const isOpenedSideBar = sideBar.classList.contains('active')
  if (!isOpenedSideBar && currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    // down
    body.classList.remove(scrollUp);
    body.classList.add(scrollDown);
  } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
    // up
    body.classList.remove(scrollDown);
    body.classList.add(scrollUp);
  }
  lastScroll = currentScroll;
}

window.addEventListener('scroll', scrollListener);