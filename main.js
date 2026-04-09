const numberDisplay = document.getElementById("number-display");
const generateButton = document.getElementById("generate-button");

generateButton.addEventListener("click", () => {
  const lottoCombinations = generateLottoCombinations(5);
  displayCombinations(lottoCombinations);
});

function generateLottoNumbers() {
  const numbers = new Set();
  while (numbers.size < 6) {
    const randomNumber = Math.floor(Math.random() * 45) + 1;
    numbers.add(randomNumber);
  }
  return Array.from(numbers).sort((a, b) => a - b);
}

function generateLottoCombinations(count) {
  const combinations = [];
  for (let i = 0; i < count; i++) {
    combinations.push(generateLottoNumbers());
  }
  return combinations;
}

function displayCombinations(combinations) {
  numberDisplay.innerHTML = "";
  for (const numbers of combinations) {
    const combinationElement = document.createElement("div");
    combinationElement.classList.add("combination");
    for (const number of numbers) {
      const numberElement = document.createElement("div");
      numberElement.classList.add("number");
      numberElement.textContent = number;
      combinationElement.appendChild(numberElement);
    }
    numberDisplay.appendChild(combinationElement);
  }
}
