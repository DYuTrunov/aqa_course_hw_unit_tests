import { textChangeRangeIsUnchanged } from 'typescript';

/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...arr) {
  const mergeArrays = [];
  for (const singleArr of arr) mergeArrays.push(...singleArr);
  return mergeArrays;
}

/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
function devideBy(text) {
  if (!text.length) return text;
  let textToLower = text.replaceAll(' ', '_').toLowerCase();
  let resultText = textToLower[0];
  for (let i = 1; i < textToLower.length; i++) {
    if (textToLower[i - 1] === '_' && textToLower[i] === '_') continue;
    textToLower[i - 1] === '_' ? (resultText += textToLower[i].toUpperCase()) : (resultText += textToLower[i]);
  }
  return resultText;
}

/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
function fibonacci(n) {
  const fibArr = [0, 1];
  if (n === 0 || n === 1) return fibArr[n];
  let nnoeFib = 0;
  for (let i = 2; i <= n; i++) fibArr[i] = fibArr[i - 2] + fibArr[i - 1];
  nnoeFib = +fibArr.slice(-1);
  return nnoeFib;
}
console.log(fibonacci(1));

export { mergeArrays, fibonacci, devideBy };
