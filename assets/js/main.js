const CLASSES = [
  {
    title: "Swordmaster",
    role: "Melee DPS",
    flavor: "Steel is not a tool to you — it is an extension of will.",
    description: "Swordmasters perfect combat through discipline and form.",
    traits: ["Perfect Form", "Battle Instinct", "Unbreakable Focus"],
    ending: "Your blade hums as if it knows what is coming."
  },
  {
    title: "Archer",
    role: "Ranged DPS",
    flavor: "Your arrows find their mark before danger is felt.",
    description: "Archers dominate the battlefield from the shadows.",
    traits: ["Eagle Eye", "Silent Step", "Deadly Precision"],
    ending: "The wind itself guides your shot."
  },
  {
    title: "Mage",
    role: "Magic DPS",
    flavor: "The arcane answers those who dare to listen.",
    description: "Mages bend reality through knowledge and will.",
    traits: ["Mana Flow", "Elemental Mastery", "Spell Weaving"],
    ending: "The air crackles with latent power."
  }
];

const nameInput = document.getElementById("nameInput");
const output = document.getElementById("output");
const generateBtn = document.getElementById("generateBtn");

// Generate character
function generateCharacter() {
  const name = nameInput.value.trim() || "Traveler";
  const chosen = CLASSES[Math.floor(Math.random() * CLASSES.length)];

  output.classList.remove("fade-in");
  output.innerHTML = "";
  void output.offsetWidth; // restart animation

  const traitsHTML = chosen.traits.map(trait => `<li>${trait}</li>`).join("");

  output.innerHTML = `
    <h2>${name}, ${chosen.title}</h2>
    <p><em>${chosen.flavor}</em></p>
    <p><strong>Role:</strong> ${chosen.role}</p>
    <p>${chosen.description}</p>
    <h3>Traits</h3>
    <ul class="traits">${traitsHTML}</ul>
    <p class="ending">${chosen.ending}</p>
  `;

  output.classList.add("fade-in");

  // Animate traits
  const traitElements = output.querySelectorAll(".traits li");
  traitElements.forEach((li, i) => {
    li.style.animation = `fadeInUp 0.5s ease forwards ${i * 0.15}s`;
  });
}

generateBtn.addEventListener("click", generateCharacter);
nameInput.addEventListener("keypress", e => {
  if (e.key === "Enter") generateCharacter();
});

// ===== Menu toggle =====
const menuBtn = document.querySelector(".menu-btn");
const dropdown = document.querySelector(".dropdown");

menuBtn.addEventListener("click", () => {
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

// Close menu if clicked outside
window.addEventListener("click", e => {
  if (!menuBtn.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.style.display = "none";
  }
});

