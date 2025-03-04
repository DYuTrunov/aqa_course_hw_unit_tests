/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (typeof word !== 'string') return false;
  if (word.toLowerCase().split('').reverse().join('') === word.toLocaleLowerCase()) return true;
  return false;
}

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  if (typeof sentence !== 'string' || !sentence.length) return [];
  const arrayWords = sentence.split(' ');
  return arrayWords.filter((elem) => elem.length === Math.max(...arrayWords.map((elem) => elem.length)));
}

export { isPalindrom, findLongestWords };
