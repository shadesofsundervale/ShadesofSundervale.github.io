// ==============================
// CLASS DATABASE
// ==============================
const CLASSES = [
  {
    id: "archer",
    name: "Archer",
    role: "Ranged DPS",
    intro: "You walk the path of the unseen hunter.",
    description: "Archers master distance, patience, and lethal precision.",
    traits: ["Keen Eyesight", "Silent Movement", "Deadly Accuracy"],
    welcome: "The forests whisper your name as you step into the world."
  },
  {
    id: "swordmaster",
    name: "Swordmaster",
    role: "Melee DPS",
    intro: "Steel is not a tool to you — it is an extension of will.",
    description: "Swordmasters perfect combat through discipline and form.",
    traits: ["Perfect Form", "Battle Instinct", "Unbreakable Focus"],
    welcome: "Your blade hums as if it knows what is coming."
  },
  {
    id: "pugilist",
    name: "Pugilist",
    role: "Close Combat",
    intro: "Your fists speak louder than words.",
    description: "Pugilists refine the body into a living weapon.",
    traits: ["Iron Body", "Explosive Strikes", "Endless Stamina"],
    welcome: "Pain is merely another teacher to you."
  },
  {
    id: "mage",
    name: "Mage",
    role: "Arcane Caster",
    intro: "The arcane does not obey — it bargains.",
    description: "Mages manipulate reality through knowledge and risk.",
    traits: ["Spell Weaving", "Mana Control", "Forbidden Knowledge"],
    welcome: "The air bends subtly in your presence."
  },
  {
    id: "shaman",
    name: "Shaman",
    role: "Spiritual Medium",
    intro: "You walk between worlds, never fully belonging to either.",
    description: "Shamans commune with spirits and ancestral forces.",
    traits: ["Spirit Sight", "Totemic Rituals", "Ancestral Guidance"],
    welcome: "Something unseen has already noticed you."
  },
  {
    id: "druid",
    name: "Druid",
    role: "Nature Mystic",
    intro: "Nature does not speak — it acts.",
    description: "Druids embody the raw will of the wild.",
    traits: ["Wildshape", "Natural Harmony", "Primal Magic"],
    welcome: "Roots stir beneath your feet as you arrive."
  }
];

// ==============================
// LOGIC
// ==============================
function getRandomClass() {
  const index = Math.floor(Math.random() * CLASSES.length);
  return CLASSES[index];
}

function generateCharacter() {
  const name =
    document.getElementById("nameInput").value || "Unknown Traveler";

  const chosen = getRandomClass();

  document.getElementById("output").innerHTML = `
    <h2>${name}, ${chosen.name}</h2>
    <p><i>${chosen.intro}</i></p>

    <p><b>Role:</b> ${chosen.role}</p>
    <p>${chosen.description}</p>

    <p><b>Traits:</b></p>
    <ul>
      ${chosen.traits.map(t => `<li>${t}</li>`).join("")}
    </ul>

    <p>${chosen.welcome}</p>
  `;
}
