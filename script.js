const themes = {
    inspirational: {
      parts: {
        openers: [
          "Success begins",
          "The journey starts",
          "Happiness is found",
          "Courage thrives",
          "Greatness is born"
        ],
        middles: [
          "when courage meets action",
          "as you embrace challenge",
          "in your daily mindset",
          "with consistent effort",
          "through small victories"
        ],
        endings: [
          "on your path to greatness.",
          "in every step you take.",
          "as the sun rises anew.",
          "even when no one sees it.",
          "and change becomes growth."
        ]
      },
      art: [
        `
         ✨
        ( •_•)
       <)   )╯  
        /   \\  
        "{message}"
        `,
        `
        ★
        /\\_/\\
       ( o.o )  
        > ^ <   "{message}"
        `
      ]
    },
  
    funny: {
      parts: {
        openers: [
          "A penguin",
          "Your left sock",
          "The WiFi router",
          "That weird noise",
          "A raccoon in disguise"
        ],
        middles: [
          "just stole your snacks",
          "wants to fight you",
          "is judging your life choices",
          "sings karaoke badly",
          "ate your homework"
        ],
        endings: [
          "while breakdancing.",
          "under a disco ball.",
          "and vanished into the void.",
          "during a Zoom call.",
          "but left a note."
        ]
      },
      art: [
        `
        😂
       ( ° ͜ʖ °)
       <)   )╯  
        /   \\  "{message}"
        `,
        `
       🤡
      (ಠ_ಠ)  
      <)   )>  
       / \\   "{message}"
        `
      ]
    }
  };
  
  function getRandomPart(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  
  function generateMessage(themeName = "inspirational") {
    const theme = themes[themeName];
  
    if (!theme) {
      return `Theme "${themeName}" not found.`;
    }
  
    const { openers, middles, endings } = theme.parts;
    const quote = `${getRandomPart(openers)} ${getRandomPart(middles)} ${getRandomPart(endings)}`;
    const artTemplate = getRandomPart(theme.art);
    const finalOutput = artTemplate.replace("{message}", quote);
  
    return `🎭 Theme: ${themeName.toUpperCase()}\n\n${finalOutput}`;
  }
  
  // When button clicked
    document.getElementById('generate-btn').addEventListener('click', () => {
    const theme = document.getElementById('theme-select').value;
    const output = document.getElementById('output');
    const message = generateMessage(theme);
  
    // Reset any previous animation
    output.classList.remove('fade-in');
    
    // Update the message
    output.innerText = message;
  
    // Trigger the animation
    void output.offsetWidth; // Trick to re-trigger animation
    output.classList.add('fade-in');
  });
  