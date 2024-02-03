const slides = [
  {
    title: 'Maria Jones 1',
    subTitle: 'CEO, Co-Founder, XYZ Inc.',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ut nesciunt temporibus qui sit harum officia sint, soluta, cum, ea quas accusantium ab deserunt consectetur quibusdam nisi aliquam sed mollitia!',
    img: {
      url: '/src/images/person-1.jpg',
      alt: 'Picture of Maria Jones',
    },
  },
  {
    title: 'Maria Jones 2',
    subTitle: 'CEO, Co-Founder, XYZ Inc.',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ut nesciunt temporibus qui sit harum officia sint, soluta, cum, ea quas accusantium ab deserunt consectetur quibusdam nisi aliquam sed mollitia!',
    img: {
      url: '/src/images/person-1.jpg',
      alt: 'Picture of Maria Jones',
    },
  },
  {
    title: 'Maria Jones 3',
    subTitle: 'CEO, Co-Founder, XYZ Inc.',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ut nesciunt temporibus qui sit harum officia sint, soluta, cum, ea quas accusantium ab deserunt consectetur quibusdam nisi aliquam sed mollitia!',
    img: {
      url: '/src/images/person-1.jpg',
      alt: 'Picture of Maria Jones',
    },
  },
];

// Set the first slide as active
let currentIndex = 0;
let activeSlide = slides[currentIndex];
const activeItem = document.querySelector('.testimonial-item');

function displayActiveItem() {
  const slideText = document.createElement('p');
  slideText.textContent = activeSlide.text;

  const slideTitle = document.createElement('h3');
  slideTitle.textContent = activeSlide.title;

  const slideSubTitle = document.createElement('p');
  slideSubTitle.textContent = activeSlide.subTitle;

  const slideImage = document.createElement('img');
  slideImage.classList.add('slide-image');
  slideImage.src = activeSlide.img.url;
  slideImage.alt = activeSlide.img.alt;

  activeItem.append(slideText, slideImage, slideTitle, slideSubTitle);
}

function nextSlide() {
  if (currentIndex === 2) {
    currentIndex = 0;
  } else currentIndex = currentIndex + 1;

  return currentIndex;
}

function previousSlide() {
  if (currentIndex === 0) {
    currentIndex = 2
  } else currentIndex = currentIndex - 1;

  return currentIndex;
}
console.log(currentIndex)
displayActiveItem();

const next = document.querySelector('#next');

next.addEventListener('click', () => {
  activeItem.innerHTML = '';
  currentIndex = nextSlide();
  console.log(currentIndex)
  activeSlide = slides[currentIndex];
  displayActiveItem();
})

const previous = document.querySelector('#previous');

previous.addEventListener('click', () => {
  activeItem.innerHTML = '';
  currentIndex = previousSlide();
  activeSlide = slides[currentIndex];
  displayActiveItem();
})
