// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
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
