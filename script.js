// ==============================
// Neire Freitas Confeitaria — JS
// ==============================

document.addEventListener('DOMContentLoaded', () => {

  // ---- Ano no rodapé ----
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- Menu mobile ----
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle?.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks?.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => navLinks.classList.remove('open'))
  );

  // ---- Navegação entre página principal e páginas internas ----
  const mainSections = ['home', 'menu', 'sobre', 'contato'];
  const innerPages = document.querySelectorAll('.inner-page');

  const showMain = () => {
    innerPages.forEach(p => p.classList.remove('active'));
    document.body.style.overflow = '';
    // Reexibe navbar/footer
    document.querySelector('.navbar').style.display = '';
    document.querySelector('.footer').style.display = '';
    // Reexibe seções principais
    document.querySelectorAll('.hero, .section').forEach(s => s.style.display = '');
  };

  const showInner = (id) => {
    // Esconde tudo do site principal
    document.querySelectorAll('.hero, .section').forEach(s => s.style.display = 'none');
    document.querySelector('.footer').style.display = 'none';
    innerPages.forEach(p => p.classList.remove('active'));
    const target = document.getElementById(id);
    if (target) {
      target.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Clique nos cards abre página interna
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      const targetId = card.dataset.target;
      if (targetId) showInner(targetId);
    });
  });

  // Botão "Voltar"
  document.querySelectorAll('.btn-back').forEach(btn => {
    btn.addEventListener('click', () => {
      showMain();
      setTimeout(() => {
        document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    });
  });

  // ---- Animação de entrada ao scrollar ----
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.card, .menu-block, .kit, .sobre-text, .sobre-img').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    observer.observe(el);
  });
});
