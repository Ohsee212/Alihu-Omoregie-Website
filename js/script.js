// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // Hero background slideshow: crossfade through .hero-slide images every few seconds.
  var slides = document.querySelectorAll('.hero-slide');
  if (slides.length > 1) {
    var currentSlide = 0;
    setInterval(function () {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }, 5000);
  }

  // Contact form: currently just prevents a real submit since there's no backend yet.
  // EDIT ME: replace this with a real submit (e.g. fetch() to your form endpoint / mailto service).
  var form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thanks! This form is not yet connected to an email/backend service. Add that in js/script.js.');
      form.reset();
    });
  }
});
