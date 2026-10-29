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

  // Contact form: submits to Netlify Forms via AJAX so the page doesn't reload.
  var form = document.querySelector('#contact-form');
  if (form) {
    var formMessage = document.querySelector('#form-message');

    var encodeFormData = function (data) {
      return Object.keys(data)
        .map(function (key) { return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]); })
        .join('&');
    };

    var showMessage = function (text, isError) {
      if (!formMessage) { return; }
      formMessage.textContent = text;
      formMessage.className = 'form-message ' + (isError ? 'form-message-error' : 'form-message-success');
      formMessage.hidden = false;
    };

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var data = {};
      new FormData(form).forEach(function (value, key) { data[key] = value; });

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeFormData(data)
      })
        .then(function () {
          form.hidden = true;
          showMessage("Thanks! Your message has been sent — we'll get back to you soon.", false);
        })
        .catch(function () {
          showMessage('Something went wrong sending your message. Please email us directly at alihuyomoregieco@gmail.com.', true);
        });
    });
  }
});
