// ============================================
// HARD.LION — script.js
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // ---------- Gestion du formulaire de contact ----------
  const form = document.querySelector('#contact form');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = form.querySelector('input[type="text"]').value.trim();
      const email = form.querySelector('input[type="email"]').value.trim();
      const message = form.querySelector('textarea').value.trim();

      if (!name || !email) {
        alert('Merci de remplir ton nom et ton email avant d\'envoyer.');
        return;
      }

      // Construit un mailto: pré-rempli vers l'adresse du coach
      const subject = encodeURIComponent('Demande de coaching — HARD.LION');
      const body = encodeURIComponent(
        `Nom: ${name}\nEmail: ${email}\n\nObjectif:\n${message}`
      );

      window.location.href = `mailto:daoudinizar599@gmail.com?subject=${subject}&body=${body}`;

      form.reset();
    });
  }

  // ---------- Mise en surbrillance du lien de navigation actif au scroll ----------
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  const highlightNav = () => {
    let current = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.style.color = '';
      if (link.getAttribute('href') === `#${current}`) {
        link.style.color = 'var(--gold-bright)';
      }
    });
  };

  window.addEventListener('scroll', highlightNav);
  highlightNav();

  // ---------- Fondu en entrée des sections au scroll ----------
  const animatedItems = document.querySelectorAll(
    '.program-card, .method-item, .testimonial, .why-item'
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  animatedItems.forEach((item) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
  });

});
