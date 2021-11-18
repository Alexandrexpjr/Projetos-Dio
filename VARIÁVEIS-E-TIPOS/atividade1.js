// Versão longa

function isPalindrome(word) {
  const splitedWord = word.split('');
  const reverseArray = splitedWord.reverse();
  const reverseString = reverseArray.join('');
  const palindrome = word === reverseString;
  return palindrome;
}

// Versão reduzida

function isPalindromeMinified(word) {
  return (word === word.split('').reverse().join(''));
}

// Segunda versão, menos lógica e mais braçal

function checkPalindrome(word) {
  const numberOfIterations = Math.floor(word.length / 2); // Quando o tamanho for ímpar, é indiferente qual a letra do meio
  if (numberOfIterations === 0) return true; // Se a palavra só tiver uma letra, sempre será um palíndromo

  let isPalindrome = true; // É um palindromo até que se prove o contrário

  for(let i = 0; i < numberOfIterations; i += 1) {
    const lastIndex = word.length - 1;
    if(word[i] !== word[lastIndex - i]) {
      isPalindrome = false;
      break
    }
  }
  return isPalindrome;
}

console.log(checkPalindrome('ar'));