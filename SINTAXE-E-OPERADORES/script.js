// Versão pouco legível e muito reduzida

function checkNumbers(n, m) {
  return `Os números ${n} e ${m} ${(n === m) ? null : 'não'} são iguais. Sua soma é ${n + m}, que é ${(n + m > 10) ? 'maior' : 'menor'} que 10 e ${(n + m > 20) ? 'maior' : 'menor'} que 20.`
}

console.log(checkNumbers(3, 8));

// Versão nada reduzida mas muito legível

function checkNumbersAgain(firstNumber, secondNumber) {
  const isEqual = (firstNumber === secondNumber) ? 'são iguais' : 'não são iguais';
  const sum = firstNumber + secondNumber;
  const biggerThan10 = (sum > 10) ? 'maior que 10' : 'menor que 10';
  const biggerThan20 = (sum > 20) ? 'maior que 20' : 'menor que 20';

  return `Os números ${firstNumber} e ${secondNumber} ${isEqual}. Sua soma é ${sum}, que é ${biggerThan10} e ${biggerThan20}.`; 
}

console.log(checkNumbersAgain(3, 8));