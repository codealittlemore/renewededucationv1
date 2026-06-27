/* RECI — shared interactions */
(function(){
  'use strict';

  const navItems = [
    ['/', 'Home'],
    ['/about', 'About'],
    ['/programs', 'Programs'],
    ['/stories', 'Impact'],
    ['/get-involved', 'Get Involved'],
    ['/news', 'News'],
    ['/contact', 'Contact']
  ];

  const markUrl = new URL('./assets/reci-mark.png', import.meta.url).href;
  const logoUrl = new URL('./assets/reci-logo-full.png', import.meta.url).href;

  const icon = {
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h3l-7.5 8.6L22 22h-6.8l-5-6.5L4.4 22H1.4l8-9.2L2 2h6.9l4.5 6z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM0 8h5v16H0zM7.5 8H12v2.2h.1c.6-1.1 2.1-2.3 4.3-2.3 4.6 0 5.5 3 5.5 6.9V24h-5v-7.3c0-1.7 0-4-2.4-4s-2.8 1.9-2.8 3.9V24h-5z"/></svg>'
  };

  function renderSharedChrome(){
    const headerMount = document.querySelector('[data-site-header]');
    if(headerMount){
      const navLinks = navItems.map(([href, label]) => `<li><a href="${href}">${label}</a></li>`).join('');
      const mobileLinks = navItems.map(([href, label]) => `<a href="${href}">${label}</a>`).join('');
      headerMount.outerHTML = `
<header class="site-header">
  <div class="container wide">
    <nav class="nav">
      <a class="brand" href="/" aria-label="RECI home">
        <img src="${markUrl}" alt="RECI">
        <div class="brand-text"><b>RECI</b><span>Renewed Education for Children Initiative</span></div>
      </a>
      <ul class="nav-links">${navLinks}</ul>
      <div class="nav-cta"><button class="nav-toggle" aria-label="Open menu">${icon.menu}</button></div>
    </nav>
  </div>
</header>
<div class="mobile-menu">
  <div class="mm-top">
    <a class="brand" href="/"><img src="${markUrl}" alt="RECI" style="height:40px"><div class="brand-text"><b>RECI</b><span>Renewed Education for Children Initiative</span></div></a>
    <button class="mm-close" aria-label="Close menu">${icon.close}</button>
  </div>
  ${mobileLinks}
</div>`;
    }

    const footerMount = document.querySelector('[data-site-footer]');
    if(footerMount){
      footerMount.outerHTML = `
<footer class="site-footer">
  <div class="container wide">
    <div class="footer-grid">
      <div class="footer-brand">
        <img src="${logoUrl}" alt="Renewed Education for Children Initiative for Children Initiative" style="height:84px;background:#fff;padding:10px 14px;border-radius:14px">
        <p style="margin-top:18px;max-width:34ch;color:#9499bd">Renewing minds, inspiring hope, and equipping young people to lead positive change across Nigeria and Africa.</p>
        <div class="social-row" style="margin-top:20px">
          <span aria-label="Instagram">${icon.instagram}</span>
          <span aria-label="X">${icon.x}</span>
          <span aria-label="LinkedIn">${icon.linkedin}</span>
        </div>
      </div>
      <div><h4>Explore</h4><a href="/about">About Us</a><a href="/programs">Programs</a><a href="/stories">Impact &amp; Stories</a><a href="/news">News &amp; Events</a></div>
      <div><h4>Get Involved</h4><a href="/donate">Donate</a><a href="/get-involved">Volunteer</a><a href="/get-involved">Become a Mentor</a><a href="/get-involved">Partner With Us</a></div>
      <div><h4>Contact</h4><a href="mailto:hello@reci.org">hello@reci.org</a><a href="tel:+2348000000000">+234 800 000 0000</a><a href="/contact">Lagos, Nigeria</a></div>
    </div>
    <div class="footer-bottom"><span>© 2026 Renewed Education for Children Initiative for Children Initiative. All rights reserved.</span><span>Renewing Minds, Shaping Futures.</span></div>
  </div>
</footer>`;
    }
  }

  renderSharedChrome();

  /* Sticky header shadow on scroll */
  const header = document.querySelector('.site-header');
  if(header){
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, {passive:true});
  }

  /* Mobile menu */
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.mobile-menu');
  const close = document.querySelector('.mm-close');
  function setMenu(open){
    if(!menu) return;
    menu.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }
  if(toggle) toggle.addEventListener('click', ()=>setMenu(true));
  if(close) close.addEventListener('click', ()=>setMenu(false));
  if(menu) menu.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>setMenu(false)));

  /* Active nav link based on filename */
  function normalizePath(path){
    const clean = path.replace(/\/+$/, '') || '/';
    if(clean === '/index.html') return '/';
    return clean.replace(/\.html$/, '');
  }
  const cleanPath = normalizePath(location.pathname);
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a=>{
    const href = normalizePath(a.getAttribute('href')||'');
    if(href === cleanPath) a.classList.add('active');
  });

  /* Scroll reveal */
  const reveals = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window && reveals.length){
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, {threshold:0.12, rootMargin:'0px 0px -8% 0px'});
    reveals.forEach(el=>io.observe(el));
  } else {
    reveals.forEach(el=>el.classList.add('in'));
  }

  /* Animated counters */
  const counters = document.querySelectorAll('[data-count]');
  function animateCount(el){
    const target = parseFloat(el.dataset.count);
    const dur = 1800;
    const dec = (el.dataset.count.split('.')[1]||'').length;
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const start = performance.now();
    function tick(now){
      const p = Math.min((now-start)/dur, 1);
      const eased = 1 - Math.pow(1-p, 3);
      const val = target * eased;
      el.textContent = prefix + (dec ? val.toFixed(dec) : Math.round(val).toLocaleString()) + suffix;
      if(p<1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  if('IntersectionObserver' in window && counters.length){
    const co = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ animateCount(e.target); co.unobserve(e.target);} });
    }, {threshold:0.4});
    counters.forEach(el=>co.observe(el));
  } else {
    counters.forEach(el=>{ el.textContent=(el.dataset.prefix||'')+el.dataset.count+(el.dataset.suffix||''); });
  }
  /* Web3Forms AJAX submit — show success inline instead of redirecting */
  document.querySelectorAll('form[action*="web3forms"]').forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const origText = btn.textContent;
      btn.disabled = true;
      btn.textContent = 'Sending…';

      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
        });
        const data = await res.json();

        if (data.success) {
          form.innerHTML = `
            <div style="text-align:center;padding:28px 20px;">
              <div style="width:56px;height:56px;border-radius:50%;background:var(--green-tint);color:var(--green-700);display:inline-grid;place-items:center;margin-bottom:16px;">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"/></svg>
              </div>
              <h3 style="font-size:1.3rem;margin:0 0 8px;color:var(--navy);">Thank you!</h3>
              <p style="color:var(--slate);margin:0;font-size:.98rem;">Your message has been received. We'll be in touch soon.</p>
            </div>`;
        } else {
          btn.disabled = false;
          btn.textContent = origText;
          alert('Something went wrong. Please try again.');
        }
      } catch {
        btn.disabled = false;
        btn.textContent = origText;
        alert('Network error. Please check your connection and try again.');
      }
    });
  });

})();
