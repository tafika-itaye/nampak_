
'use strict';

let isFirstVisit = !sessionStorage.getItem('nampak_visited');
let splashTimeout;

/* ═══ SPLASH SCREEN ═══ */
function initSplash(){
  if(!isFirstVisit) return showApp();

  const splash = document.getElementById('app-splash');
  if(!splash) return;

  let progress = 0;
  const circle = document.querySelector('.progress-ring-circle');
  const circumference = 2 * Math.PI * 35; // r=35
  circle.style.strokeDasharray = circumference;

  function updateProgress(){
    progress += 4;
    circle.style.strokeDashoffset = circumference * (1 - progress / 100);
    if(progress >= 100){
      clearTimeout(splashTimeout);
      setTimeout(showApp, 300);
    } else {
      splashTimeout = setTimeout(updateProgress, 80);
    }
  }
  updateProgress();
}

function showApp(){
  document.body.classList.add('app-loaded');
  sessionStorage.setItem('nampak_visited', 'true');
  setTimeout(() => {
    document.getElementById('app-splash')?.remove();
  }, 600);
}

/* ═══ MOBILE NAV ═══ */
function toggleNav(){
  document.querySelector('.nav-drawer').classList.toggle('open');
  document.querySelector('.nav-overlay').classList.toggle('open');
  document.querySelector('.hamburger').classList.toggle('active');
}

function closeNav(){
  document.querySelector('.nav-drawer')?.classList.remove('open');
  document.querySelector('.nav-overlay')?.classList.remove('open');
  document.querySelector('.hamburger')?.classList.remove('active');
}

/* ═══ BUTTON RIPPLE ═══ */
function createRipple(e){
  const btn = e.currentTarget;
  const rect = btn.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = e.clientX - rect.left - size / 2;
  const y = e.clientY - rect.top - size / 2;

  const ripple = document.createElement('span');
  ripple.className = 'btn-ripple';
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  btn.appendChild(ripple);

  setTimeout(() => ripple.remove(), 600);
}

/* ═══ SCROLL ANIMATIONS ═══ */
function initScrollAnimations(){
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
}

/* ═══ SKELETON LOADER ═══ */
function showSkeleton(container, count = 8){
  container.innerHTML = Array(count).fill().map(() => `
    <div class="skeleton skeleton-card">
      <div class="skeleton-img"></div>
      <div class="skeleton-text"></div>
      <div class="skeleton-text" style="width:60%"></div>
      <div class="skeleton-text" style="width:40%"></div>
    </div>`).join('');
}

/* ═══ NAMPAK DB & RENDERING (from previous) ═══ */
// [Previous app.js logic here - keeping it modular]
const NampakDB = { /* ... existing data ... */ };

function renderProducts(){ /* ... existing ... */ }
function renderDashboard(){ /* ... existing ... */ }

// ═══ INIT ═══
document.addEventListener('DOMContentLoaded', () => {
  initSplash();
  initScrollAnimations();

  // Mobile nav
  document.querySelector('.hamburger')?.addEventListener('click', toggleNav);
  document.querySelector('.nav-overlay')?.addEventListener('click', closeNav);

  // Ripple effect on buttons
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', createRipple);
  });

  // Existing app logic
  renderProducts();
  renderDashboard();
});
