const elements = document.querySelectorAll('.projects__item');

const observerCallback = (entries, observer) => {
  if (entries[0].isIntersecting) {
    entries[0].target.classList.add('appear-animation');
    observer.disconnect();
  }
}

const forEachCallback = (element) => new IntersectionObserver(observerCallback).observe(element);

elements.forEach(forEachCallback);
