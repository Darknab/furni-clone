// TODO Find out why astro:page-load isn't working

// document.addEventListener('astro:page-load', () => {
  document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-list').classList.toggle('expanded');
  });
// })