const menu=document.querySelector(".menu"), links=document.querySelector(".nav-links");
menu?.addEventListener("click",()=>{const open=links.classList.toggle("open"); menu.textContent=open?"×":"☰";});
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",()=>links?.classList.remove("open")));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.08});
document.querySelectorAll(".feature-grid article,.steps article,.showcase-screen").forEach(el=>observer.observe(el));