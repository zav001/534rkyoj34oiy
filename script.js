const SITE_CONFIG = {
  name: "DonutClient",
  version: "1.0.0",
  minecraftVersion: "1.21.11",
  releasePageUrl: "https://github.com/zav001/534rkyoj34oiy/releases/tag/T",
  releaseTag: "T",
  jarName: "DonutClient-1.21.11.jar"
};

const FEATURES = [
  ["↯","Performance","Optimized for smooth DonutSMP gameplay."],
  ["▣","Custom HUD","Build a HUD that fits your DonutSMP playstyle."],
  ["◉","Visuals","Useful visuals, overlays and DonutSMP utilities."],
  ["✚","Mod Support","Designed for Fabric 1.21.11 and DonutSMP."],
  ["☷","Configurable","Customize 80+ modules and settings to your preferences."],
  ["⌁","Lightweight","Keep the client lightweight and responsive."]
];

const FAQS = [
  ["What is DonutClient?","DonutClient is a focused Minecraft client for DonutSMP built around the Fabric ecosystem and Minecraft 1.21.11."],
  ["Which Minecraft version is supported?","The current site configuration targets Minecraft 1.21.11. Update SITE_CONFIG in script.js when the supported version changes."],
  ["Does DonutClient require Fabric?","Yes. DonutClient is presented as a Fabric-based client, so install the matching Fabric Loader and Fabric API before launching."],
  ["How do I install DonutClient?","Download the JAR, install Fabric for Minecraft 1.21.11, place the DonutClient JAR in your .minecraft/mods folder, then launch the matching Fabric profile."],
  ["Where can I download DonutClient?","Use any of the Download DonutClient buttons on this page. They point to the configured GitHub release asset."],
];

function renderFeatures(){
  document.querySelector("#feature-grid").innerHTML = FEATURES.map(([icon,name,description]) => `
    <article class="feature-card reveal">
      <div class="feature-icon">${icon}</div>
      <h3>${name}</h3>
      <p>${description}</p>
    </article>
  `).join("");
}

function renderFaq(){
  document.querySelector("#faq-list").innerHTML = FAQS.map(([q,a]) => `
    <div class="accordion-item">
      <button class="accordion-button" type="button" aria-expanded="false">
        <span>${q}</span><span>+</span>
      </button>
      <div class="accordion-answer"><p>${a}</p></div>
    </div>
  `).join("");

  document.querySelectorAll(".accordion-button").forEach(button => {
    button.addEventListener("click", () => {
      const answer = button.nextElementSibling;
      const open = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!open));
      button.querySelector("span:last-child").textContent = open ? "+" : "−";
      answer.style.maxHeight = open ? null : `${answer.scrollHeight}px`;
    });
  });
}

function setConfig(){
  document.querySelectorAll("[data-site-version]").forEach(el => el.textContent = SITE_CONFIG.version);
  document.querySelectorAll("[data-mc-version]").forEach(el => el.textContent = SITE_CONFIG.minecraftVersion);
  document.querySelectorAll('a[download]').forEach(a => {
    a.href = `https://github.com/zav001/534rkyoj34oiy/releases/download/${encodeURIComponent(SITE_CONFIG.releaseTag)}/${encodeURIComponent(SITE_CONFIG.jarName)}`;
    a.setAttribute("download", SITE_CONFIG.jarName);
  });
}

function init(){
  setConfig();
  renderFeatures();
  renderFaq();

  const nav = document.querySelector(".nav-wrap");
  const menu = document.querySelector(".menu-toggle");
  const links = document.querySelector("#nav-links");

  menu.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(open));
  });

  links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    links.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
  }));

  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 8);
  }, {passive:true});

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {threshold:.08});

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", init);
