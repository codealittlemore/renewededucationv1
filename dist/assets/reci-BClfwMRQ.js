(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function f(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=f(r);fetch(r.href,o)}})();(function(){const h=[["/","Home"],["/about","About"],["/programs","Programs"],["/stories","Impact"],["/get-involved","Get Involved"],["/news","News"],["/contact","Contact"]],s=new URL("/assets/reci-mark-D7vyBSnC.png",import.meta.url).href,f=new URL("/assets/reci-logo-full-puY8FC3c.png",import.meta.url).href,a={menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',instagram:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',x:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h3l-7.5 8.6L22 22h-6.8l-5-6.5L4.4 22H1.4l8-9.2L2 2h6.9l4.5 6z"/></svg>',linkedin:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM0 8h5v16H0zM7.5 8H12v2.2h.1c.6-1.1 2.1-2.3 4.3-2.3 4.6 0 5.5 3 5.5 6.9V24h-5v-7.3c0-1.7 0-4-2.4-4s-2.8 1.9-2.8 3.9V24h-5z"/></svg>'};function r(){const e=document.querySelector("[data-site-header]");if(e){const t=h.map(([l,d])=>`<li><a href="${l}">${d}</a></li>`).join(""),i=h.map(([l,d])=>`<a href="${l}">${d}</a>`).join("");e.outerHTML=`
<header class="site-header">
  <div class="container wide">
    <nav class="nav">
      <a class="brand" href="/" aria-label="RECI home">
        <img src="${s}" alt="RECI">
        <div class="brand-text"><b>RECI</b><span>Renewed Education for Children Initiative</span></div>
      </a>
      <ul class="nav-links">${t}</ul>
      <div class="nav-cta"><button class="nav-toggle" aria-label="Open menu">${a.menu}</button></div>
    </nav>
  </div>
</header>
<div class="mobile-menu">
  <div class="mm-top">
    <a class="brand" href="/"><img src="${s}" alt="RECI" style="height:40px"><div class="brand-text"><b>RECI</b><span>Renewed Education for Children Initiative</span></div></a>
    <button class="mm-close" aria-label="Close menu">${a.close}</button>
  </div>
  ${i}
</div>`}const n=document.querySelector("[data-site-footer]");n&&(n.outerHTML=`
<footer class="site-footer">
  <div class="container wide">
    <div class="footer-grid">
      <div class="footer-brand">
        <img src="${f}" alt="Renewed Education for Children Initiative for Children Initiative" style="height:84px;background:#fff;padding:10px 14px;border-radius:14px">
        <p style="margin-top:18px;max-width:34ch;color:#9499bd">Renewing minds, inspiring hope, and equipping young people to lead positive change across Nigeria and Africa.</p>
        <div class="social-row" style="margin-top:20px">
          <span aria-label="Instagram">${a.instagram}</span>
          <span aria-label="X">${a.x}</span>
          <span aria-label="LinkedIn">${a.linkedin}</span>
        </div>
      </div>
      <div><h4>Explore</h4><a href="/about">About Us</a><a href="/programs">Programs</a><a href="/stories">Impact &amp; Stories</a><a href="/news">News &amp; Events</a></div>
      <div><h4>Get Involved</h4><a href="/donate">Donate</a><a href="/get-involved">Volunteer</a><a href="/get-involved">Become a Mentor</a><a href="/get-involved">Partner With Us</a></div>
      <div><h4>Contact</h4><a href="mailto:educationrenewed4@gmail.com">educationrenewed4@gmail.com</a><a href="tel:+2348183515952">+234 818 351 5952</a><a href="/contact">Lagos, Nigeria</a></div>
    </div>
    <div class="footer-bottom"><span>© 2026 Renewed Education for Children Initiative for Children Initiative. All rights reserved.</span><span>Renewing Minds, Shaping Futures.</span></div>
  </div>
</footer>`)}r();const o=document.querySelector(".site-header");if(o){const e=()=>o.classList.toggle("scrolled",window.scrollY>12);e(),window.addEventListener("scroll",e,{passive:!0})}const c=document.querySelector(".nav-toggle"),u=document.querySelector(".mobile-menu"),m=document.querySelector(".mm-close");function v(e){u&&(u.classList.toggle("open",e),document.body.style.overflow=e?"hidden":"")}c&&c.addEventListener("click",()=>v(!0)),m&&m.addEventListener("click",()=>v(!1)),u&&u.querySelectorAll("a").forEach(e=>e.addEventListener("click",()=>v(!1)));function b(e){const n=e.replace(/\/+$/,"")||"/";return n==="/index.html"?"/":n.replace(/\.html$/,"")}const C=b(location.pathname);document.querySelectorAll(".nav-links a, .mobile-menu a").forEach(e=>{b(e.getAttribute("href")||"")===C&&e.classList.add("active")});const p=document.querySelectorAll(".reveal");if("IntersectionObserver"in window&&p.length){const e=new IntersectionObserver(n=>{n.forEach(t=>{t.isIntersecting&&(t.target.classList.add("in"),e.unobserve(t.target))})},{threshold:.12,rootMargin:"0px 0px -8% 0px"});p.forEach(n=>e.observe(n))}else p.forEach(e=>e.classList.add("in"));const g=document.querySelectorAll("[data-count]");function L(e){const n=parseFloat(e.dataset.count),t=1800,i=(e.dataset.count.split(".")[1]||"").length,l=e.dataset.prefix||"",d=e.dataset.suffix||"",k=performance.now();function w(E){const x=Math.min((E-k)/t,1),I=1-Math.pow(1-x,3),y=n*I;e.textContent=l+(i?y.toFixed(i):Math.round(y).toLocaleString())+d,x<1&&requestAnimationFrame(w)}requestAnimationFrame(w)}if("IntersectionObserver"in window&&g.length){const e=new IntersectionObserver(n=>{n.forEach(t=>{t.isIntersecting&&(L(t.target),e.unobserve(t.target))})},{threshold:.4});g.forEach(n=>e.observe(n))}else g.forEach(e=>{e.textContent=(e.dataset.prefix||"")+e.dataset.count+(e.dataset.suffix||"")});document.querySelectorAll('form[action*="web3forms"]').forEach(e=>{e.addEventListener("submit",async n=>{n.preventDefault();const t=e.querySelector('button[type="submit"]'),i=t.textContent;t.disabled=!0,t.textContent="Sending…";try{(await(await fetch(e.action,{method:"POST",body:new FormData(e)})).json()).success?e.innerHTML=`
            <div style="text-align:center;padding:28px 20px;">
              <div style="width:56px;height:56px;border-radius:50%;background:var(--green-tint);color:var(--green-700);display:inline-grid;place-items:center;margin-bottom:16px;">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"/></svg>
              </div>
              <h3 style="font-size:1.3rem;margin:0 0 8px;color:var(--navy);">Thank you!</h3>
              <p style="color:var(--slate);margin:0;font-size:.98rem;">Your message has been received. We'll be in touch soon.</p>
            </div>`:(t.disabled=!1,t.textContent=i,alert("Something went wrong. Please try again."))}catch{t.disabled=!1,t.textContent=i,alert("Network error. Please check your connection and try again.")}})})})();
