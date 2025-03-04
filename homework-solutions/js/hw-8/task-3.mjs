/*
  Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
  и возвращает пропущенное число. Массив не отсортирован и НЕ может содержать дубликаты. 
  Решите эту задачу, используя эффективные методы массива.

  Пример: const arr = [5,2,7,3,8,1,6] //4
*/

function findMissingNumber(numbers = []) {
  let totalSum = 0;
  let arraySum = 0;
  for (let i = 1; i <= numbers.length + 1; i++) {
    totalSum += i;
  }
  arraySum = numbers.reduce((sum, num) => sum + num, 0);
  return totalSum - arraySum;
}

export { findMissingNumber };
