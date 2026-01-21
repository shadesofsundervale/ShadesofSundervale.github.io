/* ===== Character Classes ===== */
const CLASSES = [
  {
    title:"Swordmaster", role:"Melee DPS", flavor:"Steel is not a tool to you — it is an extension of will.",
    description:"Swordmasters perfect combat through discipline and form.",
    traits:["Perfect Form","Battle Instinct","Unbreakable Focus"],
    ending:"Your blade hums as if it knows what is coming."
  },
  {
    title:"Archer", role:"Ranged DPS", flavor:"Your arrows find their mark before danger is felt.",
    description:"Archers dominate the battlefield from the shadows.",
    traits:["Eagle Eye","Silent Step","Deadly Precision"],
    ending:"The wind itself guides your shot."
  },
  {
    title:"Mage", role:"Magic DPS", flavor:"The arcane answers those who dare to listen.",
    description:"Mages bend reality through knowledge and will.",
    traits:["Mana Flow","Elemental Mastery","Spell Weaving"],
    ending:"The air crackles with latent power."
  }
];

/* ===== Character Generator ===== */
function generateCharacter() {
  const nameInput = document.getElementById("nameInput");
  const output = document.getElementById("output");
  if(!nameInput || !output) return;

  const name = nameInput.value.trim() || "Traveler";
  const chosen = CLASSES[Math.floor(Math.random() * CLASSES.length)];

  output.classList.remove("fade-in");
  output.innerHTML="";
  void output.offsetWidth;

  output.innerHTML=`
    <h2>${name}, ${chosen.title}</h2>
    <p><em>${chosen.flavor}</em></p>
    <p><strong>Role:</strong> ${chosen.role}</p>
    <p>${chosen.description}</p>
    <h3>Traits</h3>
    <ul class="traits">${chosen.traits.map(t=>`<li>${t}</li>`).join("")}</ul>
    <p class="ending">${chosen.ending}</p>
  `;

  output.classList.add("fade-in");
}

/* ===== Three-dot Menu ===== */
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
if(menuBtn && menu){
  menuBtn.addEventListener("click",()=>{ menu.style.display = menu.style.display==="flex"?"none":"flex"; });
  document.addEventListener("click",(e)=>{
    if(!menu.contains(e.target) && !menuBtn.contains(e.target)){
      menu.style.display="none";
    }
  });
}

/* ===== Gallery Lightbox ===== */
const galleryImages = document.querySelectorAll(".gallery-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
if(galleryImages.length && lightbox && lightboxImg){
  galleryImages.forEach(img=>{
    img.addEventListener("click",()=>{
      lightbox.style.display="flex";
      lightboxImg.src=img.src;
    });
  });
  lightbox.addEventListener("click",()=>{
    lightbox.style.display="none";
    lightboxImg.src="";
  });
}
