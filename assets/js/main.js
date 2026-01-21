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

function generateCharacter() {
  const name = document.getElementById("nameInput").value || "Traveler";
  const output = document.getElementById("output");

  const chosen = CLASSES[Math.floor(Math.random() * CLASSES.length)];

  output.classList.remove("fade-in");
  output.innerHTML = "";
  void output.offsetWidth;

  const traitsHTML = chosen.traits.map(t => `<li>${t}</li>`).join("");

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
}
