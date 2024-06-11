const burger = document.querySelector('.header-bar-burger');
const navBarLink = document.querySelector('.header-bar-link');
const navBar = document.querySelector('.header-bar');

burger.addEventListener('click', function () {
  navBarLink.classList.toggle('open');
  navBar.classList.toggle('width');
});

window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
};



