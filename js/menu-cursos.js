/* AnalogLab 15.1: navegación agrupada y accesible. */
(()=>{'use strict';const nav=document.getElementById('alCourseNav'),btn=document.querySelector('.al-course-toggle');if(!nav)return;
const groups=[...nav.querySelectorAll('details')];const close=()=>{groups.forEach(x=>x.open=false);nav.classList.remove('al-nav-open');btn?.setAttribute('aria-expanded','false')};
groups.forEach(g=>g.addEventListener('toggle',()=>{if(g.open)groups.filter(x=>x!==g).forEach(x=>x.open=false)}));
btn?.addEventListener('click',()=>{const state=nav.classList.toggle('al-nav-open');btn.setAttribute('aria-expanded',String(state));if(!state)groups.forEach(g=>g.open=false)});
document.addEventListener('click',e=>{if(!nav.contains(e.target)&&!btn?.contains(e.target))close()});document.addEventListener('keydown',e=>{if(e.key==='Escape'){close();btn?.focus()}});
const current=location.pathname.split('/').pop()||'index.html';nav.querySelectorAll('a').forEach(a=>{if(a.getAttribute('href')===current)a.setAttribute('aria-current','page');a.addEventListener('click',close)});
})();
