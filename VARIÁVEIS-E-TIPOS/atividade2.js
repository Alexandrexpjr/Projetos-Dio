const ARRAY_EXEMPLO = [1, 3, 4, 6, 80, 33, 23, 90];

function substituteEvenNumbers(numbers) {
  if (numbers.length === 0) return -1;
  return numbers.map(number => {
    if (number % 2 === 0) {
      return 0;
    }
    return number
  });
}

console.log(substituteEvenNumbers(ARRAY_EXEMPLO));
console.log(substituteEvenNumbers([]));