// Inspirational message parts
const messageComponents = {
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
  };
  
  // Array of ASCII art templates with a placeholder for the message
  const asciiArtTemplates = [
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
    `,
    `
    ☀️
   (✿◕‿◕)  
    /︶\\    {message}
    `,
    `
    🌟
    (•̀ᴗ•́)و  
    /|\\       "{message}"
    / \\
    `
  ];
  
  // Helper function to get a random item from an array
  function getRandomPart(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  
  // Generates the full inspirational message
  function generateQuote() {
    const { openers, middles, endings } = messageComponents;
    const part1 = getRandomPart(openers);
    const part2 = getRandomPart(middles);
    const part3 = getRandomPart(endings);
    return `${part1} ${part2} ${part3}`;
  }
  
  // Combines quote with ASCII art
  function displayMessageWithArt() {
    const quote = generateQuote();
    const template = getRandomPart(asciiArtTemplates);
    const finalOutput = template.replace("{message}", quote);
    
    console.log("\n✨ Your Inspirational Message ✨\n");
    console.log(finalOutput);
  }
  
  // Run the generator
  displayMessageWithArt();
  