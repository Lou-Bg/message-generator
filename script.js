// Inspirational message generator

const openers = [
    "Success begins",
    "The journey starts",
    "Happiness is found",
    "Courage thrives",
    "Greatness is born"
  ];
  
  const middles = [
    "when courage meets action",
    "as you embrace challenge",
    "in your daily mindset",
    "with consistent effort",
    "through small victories"
  ];
  
  const endings = [
    "on your path to greatness.",
    "in every step you take.",
    "as the sun rises anew.",
    "even when no one sees it.",
    "and change becomes growth."
  ];
  
  function getRandomPart(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  
  function generateQuote() {
    const part1 = getRandomPart(openers);
    const part2 = getRandomPart(middles);
    const part3 = getRandomPart(endings);
    return `${part1} ${part2} ${part3}`;
  }
  
  console.log(generateQuote());
  