const storyData = {
    start: {
      text: "A chill runs down your spine as you stand before the dilapidated mansion. Legends whisper of its haunted halls and the spirits trapped within. Do you dare to enter?",
      image: "1.jpg", 
      choices: [
        { text: "Enter the mansion", consequence: "foyer" },
        { text: "Turn back and run", consequence: "runaway" }
      ]
    },
    foyer: {
      text: "Dust-covered furniture and cobwebs greet you in the grand foyer. A flickering chandelier casts eerie shadows that dance across the walls. You see two doors: one on your left, leading to a library, and another straight ahead, leading to a grand staircase.",
      image: "2.jpg", 
      choices: [
        { text: "Enter the library", consequence: "library" },
        { text: "Ascend the staircase", consequence: "staircase" }
      ]
    },
    library: {
      text: "The library is filled with ancient books, their pages whispering secrets in the silence. You feel a presence behind you...",
      image: "3.jpg", 
      choices: [
        { text: "Turn around and face the presence", consequence: "ghost1" },
        { text: "Search for an escape route", consequence: "secretPassage" }
      ]
    },
    staircase: {
      text: "The stairs creak ominously beneath your feet. A cold wind blows from above, extinguishing your lantern and plunging you into darkness.",
      image: "4.jpg", 
      choices: [
        { text: "Continue up the stairs in darkness", consequence: "attic" },
        { text: "Fumble for a light source", consequence: "fall" }
      ]
    },
    ghost1: {
      text: "You turn to face a shimmering figure, its sorrowful eyes locked on you. It reaches out a hand, as if seeking help.",
      image: "5.jpg", 
      choices: [
        { text: "Take its hand", consequence: "spiritWorld" },
        { text: "Recoil in fear", consequence: "trapped" }
      ]
    },
    secretPassage: {
      text: "You discover a hidden passage behind a bookshelf. It leads to a secret room...",
      image: "6.jpg", 
      choices: [
        { text: "Enter the secret room", consequence: "treasure" },
        { text: "Return to the library", consequence: "library" }
      ]
    },
    attic: {
      text: "You stumble your way through the dark attic, your hands brushing against cobwebs and unknown objects. You sense you are not alone...",
      image: "7.jpg", 
      choices: [
        { text: "Call out into the darkness", consequence: "monster" },
        { text: "Try to find your way back", consequence: "staircase" }
      ]
    },
    fall: {
      text: "You trip and tumble down the stairs, your neck snapping upon impact. The mansion claims another victim.",
      image: "8.jpg", 
      choices: [] // Ending
    },
    spiritWorld: {
      text: "The ghost's touch sends you into the spirit world. You are now one with the mansion, forever bound to its ghostly presence.",
      image: "9.jpg", 
      choices: [] // Ending
    },
    trapped: {
      text: "The ghost cries out in anguish as you recoil, its form becoming menacing. It traps you within the mansion for eternity.",
      image: "10.jpg", 
      choices: [] // Ending
    },
    treasure: {
      text: "The secret room holds a chest filled with gold and jewels! You have escaped the mansion with riches beyond your wildest dreams.",
      image: "11.jpg", 
      choices: [] // Ending
    },
    monster: {
      text: "A monstrous figure leaps from the shadows, sinking its teeth into your flesh. Your screams are cut short as you become another victim of the haunted mansion.",
      image: "12.jpg", 
      choices: [] // Ending
    },
    runaway: {
      text: "You run as fast as you can, never looking back. The mansion's secrets remain hidden, but you are safe... for now.",
      image: "13.jpg", 
      choices: [] // Ending
    }
  };
  
  let currentStage = "start";
  
  const storyTextElement = document.getElementById("story-text");
  const storyImageElement = document.getElementById("story-image");
  const choicesContainer = document.getElementById("choices-container");
  
  function startGame() {
    currentStage = "start";
    updatePage();
  }
  
  function updatePage() {
    const stageData = storyData[currentStage];
    storyTextElement.textContent = stageData.text;
    storyImageElement.src = stageData.image;
    storyImageElement.alt = currentStage; // Set alt text for accessibility
  
    choicesContainer.innerHTML = ""; // Clear previous choices
    stageData.choices.forEach(choice => {
      const button = document.createElement("button");
      button.textContent = choice.text;
      button.addEventListener("click", () => {
        currentStage = choice.consequence;
        updatePage();
      });
      choicesContainer.appendChild(button);
    });
  }
  
  startGame();
  