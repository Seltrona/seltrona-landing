document.getElementById('year').textContent = new Date().getFullYear();
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));

// Configuración de los canales comerciales
const contact = window.SELTRONA_CONTACT || {};

const emailLink = document.getElementById('contact-email');
const whatsappLink = document.getElementById('contact-whatsapp');
const facebookLink = document.getElementById('contact-facebook');

// Correo electrónico
if (contact.email && emailLink) {
    emailLink.href = `mailto:${contact.email}`;
} else if (emailLink) {
    emailLink.hidden = true;
}

// WhatsApp
if (contact.whatsapp && whatsappLink) {
    const phone = String(contact.whatsapp).replace(/\D/g, '');

    if (phone) {
        whatsappLink.href = `https://wa.me/${phone}`;
        whatsappLink.target = '_blank';
        whatsappLink.rel = 'noopener noreferrer';
        whatsappLink.hidden = false;
    }
}

// Facebook
if (contact.facebook && facebookLink) {
    facebookLink.href = contact.facebook;
    facebookLink.hidden = false;
}

// Carrusel accesible de capturas de SELTRONA SaaS
const carousel = document.querySelector('[data-carousel]');
if (carousel) {
  const slides = Array.from(carousel.querySelectorAll('[data-slide]'));
  const dots = Array.from(carousel.querySelectorAll('[data-go]'));
  const prev = carousel.querySelector('[data-prev]');
  const next = carousel.querySelector('[data-next]');
  let current = 0;

  const showSlide = (index) => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      const active = i === current;
      slide.hidden = !active;
      slide.classList.toggle('is-active', active);
    });
    dots.forEach((dot, i) => {
      const active = i === current;
      dot.classList.toggle('is-active', active);
      if (active) dot.setAttribute('aria-current', 'true');
      else dot.removeAttribute('aria-current');
    });
  };

  prev?.addEventListener('click', () => showSlide(current - 1));
  next?.addEventListener('click', () => showSlide(current + 1));
  dots.forEach((dot) => dot.addEventListener('click', () => {
    showSlide(Number(dot.dataset.go));
  }));
}


// Ampliar capturas reales de la portada y del carrusel
const lightbox = document.getElementById('screenshot-lightbox');
const lightboxImage = document.getElementById('lightbox-image');
if (lightbox && lightboxImage) {
  document.querySelectorAll('[data-zoom-image]').forEach((control) => {
    control.addEventListener('click', () => {
      lightboxImage.src = control.dataset.zoomImage;
      lightboxImage.alt = control.dataset.zoomAlt || 'Captura ampliada de SELTRONA SaaS';
      if (typeof lightbox.showModal === 'function') lightbox.showModal();
    });
  });
  lightbox.querySelector('[data-lightbox-close]')?.addEventListener('click', () => lightbox.close());
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) lightbox.close();
  });
  lightbox.addEventListener('close', () => {
    lightboxImage.removeAttribute('src');
  });
}
