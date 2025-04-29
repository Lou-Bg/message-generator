// messageComponents object holds all parts of the messages
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
  
  // Helper function to get a random item from any array
  function getRandomPart(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  
  // Main function to generate the message
  function generateQuote() {
    const { openers, middles, endings } = messageComponents;
    const part1 = getRandomPart(openers);
    const part2 = getRandomPart(middles);
    const part3 = getRandomPart(endings);
    return `${part1} ${part2} ${part3}`;
  }
  
  // Display the message in the console
  console.log("\n✨ Your Inspirational Message ✨");
  console.log(generateQuote());
  console.log("\n");
  