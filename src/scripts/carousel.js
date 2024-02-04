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

activeSlide.classList.toggle('hidden');

const next = document.querySelector('#next');

next.addEventListener('click', () => {
  activeSlide.classList.toggle('hidden');
  currentIndex = nextSlide();
  activeSlide = slides[currentIndex];
  activeSlide.classList.toggle('hidden');
})

const previous = document.querySelector('#previous');

previous.addEventListener('click', () => {
  activeSlide.classList.toggle('hidden');
  currentIndex = previousSlide();
  activeSlide = slides[currentIndex];
  activeSlide.classList.toggle('hidden');
})
