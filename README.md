# ALIHU .Y. OMOREGIE & CO — Website

A static, framework-free website. Plain HTML/CSS/JS, no build step — open a file in a browser and it works.

## Structure

- `index.html` — Home
- `about.html` — About Us / Team
- `services.html` — Services
- `properties.html` — Property listings
- `contact.html` — Contact info + form
- `css/style.css` — All styling. Colors/fonts are set as CSS variables at the top (`:root`) — change them there to re-theme the whole site.
- `js/script.js` — Mobile nav toggle + contact form handling.

## What still needs real content

Search each file for `EDIT ME` / `[Placeholder]` — these mark:
- Company address, phone, email (footer + contact page)
- Real property listings and photos (currently placeholder gray blocks)
- Team member names/photos/bios
- Company history, mission/vision text
- Stats (years in business, properties handled, etc.)

## Adding a real property listing

In `properties.html`, copy one `<div class="card">...</div>` block and edit the text/price/tag. Replace `<div class="img-placeholder">...</div>` with `<img src="assets/your-photo.jpg" alt="...">` once you have real photos (drop them in `assets/`).

## Contact form

The form in `contact.html` doesn't send anywhere yet — it just shows a confirmation alert. To make it functional, either:
- Point it at a form service (e.g. Formspree, Getform) by setting the form's `action` and `method`, or
- Wire up `js/script.js` to `fetch()` a backend/email API.

## Viewing locally

Just open `index.html` in a browser. No server or install required.
