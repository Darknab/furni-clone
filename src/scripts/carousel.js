const slides = document.querySelectorAll('.testimonial-item');

// Hide all slides
slides.forEach((slide) => {
  slide.classList.add('hidden');
})

let currentIndex = 0;
let activeSlide = slides[currentIndex];

function nextSlide() {
  if (currentIndex === (slides.length - 1)) {
    currentIndex = 0;
  } else currentIndex = currentIndex + 1;

  return currentIndex;
}

function previousSlide() {
  if (currentIndex === 0) {
    currentIndex = slides.length - 1
  } else currentIndex = currentIndex - 1;

  return currentIndex;
}

const next = document.querySelector('#next');

const previous = document.querySelector('#previous');

if (activeSlide) {
  activeSlide.classList.toggle('hidden');

  next.addEventListener('click', () => {
    hideToRight(activeSlide);
    currentIndex = nextSlide();
    activeSlide = slides[currentIndex];
    activeSlide.classList.toggle('hidden');
    showToRight(activeSlide);
  });

  previous.addEventListener('click', () => {
    hideToleft(activeSlide);
    currentIndex = previousSlide();
    activeSlide = slides[currentIndex];
    activeSlide.classList.toggle('hidden');
    showToleft(activeSlide);
  })  
}




const animationList = ['show-to-right', 'show-to-left', 'hide-to-right', 'hide-to-left'];

function hideToRight(slide) {
  slide.classList.remove(...animationList);
  slide.classList.add('hide-to-right');
  slide.addEventListener('animationend', () => {
    slide.classList.toggle('hidden');
  }, { once: true });
}

function showToRight(slide) {
  slide.classList.remove(...animationList);
  slide.classList.add('show-to-right');
}

function hideToleft(slide) {
  slide.classList.remove(...animationList);
  slide.classList.add('hide-to-left');
  slide.addEventListener('animationend', () => {
    slide.classList.toggle('hidden');
  }, {once: true});
}

function showToleft(slide) {
  slide.classList.remove(...animationList);
  slide.classList.add('show-to-left');
}
