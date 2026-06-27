(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function h(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=h(t);fetch(t.href,r)}})();(function(){const f=[["/","Home"],["/about","About"],["/programs","Programs"],["/stories","Impact"],["/get-involved","Get Involved"],["/news","News"],["/contact","Contact"]],s=new URL("/assets/reci-mark-D7vyBSnC.png",import.meta.url).href,h=new URL("/assets/reci-logo-full-puY8FC3c.png",import.meta.url).href,a={menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',instagram:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',x:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h3l-7.5 8.6L22 22h-6.8l-5-6.5L4.4 22H1.4l8-9.2L2 2h6.9l4.5 6z"/></svg>',linkedin:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM0 8h5v16H0zM7.5 8H12v2.2h.1c.6-1.1 2.1-2.3 4.3-2.3 4.6 0 5.5 3 5.5 6.9V24h-5v-7.3c0-1.7 0-4-2.4-4s-2.8 1.9-2.8 3.9V24h-5z"/></svg>'};function t(){const e=document.querySelector("[data-site-header]");if(e){const n=f.map(([c,l])=>`<li><a href="${c}">${l}</a></li>`).join(""),u=f.map(([c,l])=>`<a href="${c}">${l}</a>`).join("");e.outerHTML=`
<header class="site-header">
  <div class="container wide">
    <nav class="nav">
      <a class="brand" href="/" aria-label="RECI home">
        <img src="${s}" alt="RECI">
        <div class="brand-text"><b>RECI</b><span>Renewed Education</span></div>
      </a>
      <ul class="nav-links">${n}</ul>
      <div class="nav-cta"><button class="nav-toggle" aria-label="Open menu">${a.menu}</button></div>
    </nav>
  </div>
</header>
<div class="mobile-menu">
  <div class="mm-top">
    <a class="brand" href="/"><img src="${s}" alt="RECI" style="height:40px"><div class="brand-text"><b>RECI</b><span>Renewed Education</span></div></a>
    <button class="mm-close" aria-label="Close menu">${a.close}</button>
  </div>
  ${u}
</div>`}const o=document.querySelector("[data-site-footer]");o&&(o.outerHTML=`
<footer class="site-footer">
  <div class="container wide">
    <div class="footer-grid">
      <div class="footer-brand">
        <img src="${h}" alt="Renewed Education for Children Initiative" style="height:84px;background:#fff;padding:10px 14px;border-radius:14px">
        <p style="margin-top:18px;max-width:34ch;color:#9499bd">Renewing minds, inspiring hope, and equipping young people to lead positive change across Nigeria and Africa.</p>
        <div class="social-row" style="margin-top:20px">
          <span aria-label="Instagram">${a.instagram}</span>
          <span aria-label="X">${a.x}</span>
          <span aria-label="LinkedIn">${a.linkedin}</span>
        </div>
      </div>
      <div><h4>Explore</h4><a href="/about">About Us</a><a href="/programs">Programs</a><a href="/stories">Impact &amp; Stories</a><a href="/news">News &amp; Events</a></div>
      <div><h4>Get Involved</h4><a href="/donate">Donate</a><a href="/get-involved">Volunteer</a><a href="/get-involved">Become a Mentor</a><a href="/get-involved">Partner With Us</a></div>
      <div><h4>Contact</h4><a href="mailto:hello@reci.org">hello@reci.org</a><a href="tel:+2348000000000">+234 800 000 0000</a><a href="/contact">Lagos, Nigeria</a></div>
    </div>
    <div class="footer-bottom"><span>© 2026 Renewed Education for Children Initiative. All rights reserved.</span><span>Renewing Minds, Shaping Futures.</span></div>
  </div>
</footer>`)}t();const r=document.querySelector(".site-header");if(r){const e=()=>r.classList.toggle("scrolled",window.scrollY>12);e(),window.addEventListener("scroll",e,{passive:!0})}const i=document.querySelector(".nav-toggle"),d=document.querySelector(".mobile-menu"),g=document.querySelector(".mm-close");function v(e){d&&(d.classList.toggle("open",e),document.body.style.overflow=e?"hidden":"")}i&&i.addEventListener("click",()=>v(!0)),g&&g.addEventListener("click",()=>v(!1)),d&&d.querySelectorAll("a").forEach(e=>e.addEventListener("click",()=>v(!1)));function b(e){const o=e.replace(/\/+$/,"")||"/";return o==="/index.html"?"/":o.replace(/\.html$/,"")}const L=b(location.pathname);document.querySelectorAll(".nav-links a, .mobile-menu a").forEach(e=>{b(e.getAttribute("href")||"")===L&&e.classList.add("active")});const p=document.querySelectorAll(".reveal");if("IntersectionObserver"in window&&p.length){const e=new IntersectionObserver(o=>{o.forEach(n=>{n.isIntersecting&&(n.target.classList.add("in"),e.unobserve(n.target))})},{threshold:.12,rootMargin:"0px 0px -8% 0px"});p.forEach(o=>e.observe(o))}else p.forEach(e=>e.classList.add("in"));const m=document.querySelectorAll("[data-count]");function E(e){const o=parseFloat(e.dataset.count),n=1800,u=(e.dataset.count.split(".")[1]||"").length,c=e.dataset.prefix||"",l=e.dataset.suffix||"",C=performance.now();function w(I){const x=Math.min((I-C)/n,1),M=1-Math.pow(1-x,3),y=o*M;e.textContent=c+(u?y.toFixed(u):Math.round(y).toLocaleString())+l,x<1&&requestAnimationFrame(w)}requestAnimationFrame(w)}if("IntersectionObserver"in window&&m.length){const e=new IntersectionObserver(o=>{o.forEach(n=>{n.isIntersecting&&(E(n.target),e.unobserve(n.target))})},{threshold:.4});m.forEach(o=>e.observe(o))}else m.forEach(e=>{e.textContent=(e.dataset.prefix||"")+e.dataset.count+(e.dataset.suffix||"")})})();
