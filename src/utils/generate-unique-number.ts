export function generateUniqueNumber(max = 1000) {
  const usedNumbers = new Set();
  let randomNumber;

  do {
    randomNumber = Math.floor(Math.random() * max) + 1;
  } while (usedNumbers.has(randomNumber));

  usedNumbers.add(randomNumber);

  return randomNumber;
}