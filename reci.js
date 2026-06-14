/* RECI — shared interactions */
(function(){
  'use strict';

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
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a=>{
    const href = (a.getAttribute('href')||'').toLowerCase();
    if(href === path || (path==='' && href==='index.html')) a.classList.add('active');
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
})();
