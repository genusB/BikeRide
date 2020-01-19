window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const sounds_bot = document.querySelectorAll(".sound_bot");
  const pads = document.querySelectorAll(".pads div");
  const pads_bot = document.querySelectorAll(".pads_bot div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#4E0E2E",
    "#947B89",
    "#AEB8C3",
    "#E1E7EB",
    "#AEB8C3",
    "#947B89",
    "#4E0E2E"
  ];

  const keys = [
    81,
    87,
    69,
    82,
    73,
    79,
    80
  ];

  const keys_bot = [
    65,
    83,
    68,
    70,
    74,
    75,
    76
  ];


  pads.forEach((pad, index) => {
    pad.addEventListener("click", function() {
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubble(index);
    });
    document.addEventListener("keydown", event => {
      if (event.keyCode == keys[index]) {
          sounds[index].currentTime = 0;
          sounds[index].play();
          createBubble(index);
      }
    });
  });

  pads_bot.forEach((pad_bot, index) => {
    pad_bot.addEventListener("click", function() {
      sounds_bot[index].currentTime = 0;
      sounds_bot[index].play();
      createBubble(index);
    });
    document.addEventListener("keydown", event => {
      if (event.keyCode == keys_bot[index]) {
          sounds_bot[index].currentTime = 0;
          sounds_bot[index].play();
          createBubble(index);
      }
    });
  });

  const createBubble = index => {
    //Create bubbles
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = `jump 1s ease`;
    bubble.addEventListener("animationend", function() {
      visual.removeChild(this);
    });
  };
});
