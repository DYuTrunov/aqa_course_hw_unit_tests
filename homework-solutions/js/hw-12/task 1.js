const line = (task) => {
  console.log(`-/-/-/-/-/-/-/-/-/-/-/TASK${task}/-/-/-/-/-/-/-/-/-/-/-`);
};
// 1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds
const message = 'Куку ляля чичи гага';
function delayTwoSeconds(callback) {
  setTimeout(callback, 2000);
}
delayTwoSeconds(() => {
  line(1);
  console.log(message);
});

// 2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат
//   его резолва в консоль
const newResolvePromise = new Promise((resolve) => {
  resolve(1);
});
newResolvePromise.then((result) => {
  line(2);
  console.log(result);
});

// 3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed".
//   Обработайте промис методом .catch и выведите результат его резолва в консоль
const newRejectPromise = new Promise((resolve, reject) => {
  reject('Promise failed');
});
newRejectPromise.catch((result) => {
  line(3);
  console.log(result);
});

// 4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.
function promiseNumber(number) {
  return new Promise((resolve, reject) => {
    if (typeof number !== 'number' || isNaN(number)) {
      reject(new Error(`The value of "${number}" must be a number`));
    } else {
      resolve(number);
    }
  });
}
promiseNumber(1).then((result) => {
  line(4);
  console.log(result);
});

// 5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль результаты работы каждого промиса через .then
Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then(([promise1, promise2, promise3]) => {
  line(5);
  console.log(promise1);
  console.log(promise2);
  console.log(promise3);
});

// 6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль статус и результат каждого промиса через .then
Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then(([promise1, promise2, promise3]) => {
  line(6);
  console.log(promise1);
  console.log(promise2);
  console.log(promise3);
});

// 7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch
async function runPromiseAll() {
  try {
    const [promise1, promise2, promise3] = await Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
    line(7.1);
    console.log(promise1);
    console.log(promise2);
    console.log(promise3);
  } catch (error) {
    line(7.1);
    console.error(error.message);
  }
}
runPromiseAll();

async function runPromiseAllSettled() {
  try {
    const [promise1, promise2, promise3] = await Promise.allSettled([
      promiseNumber(1),
      promiseNumber(2),
      promiseNumber(3),
    ]);
    line(7.2);
    console.log(promise1);
    console.log(promise2);
    console.log(promise3);
  } catch (error) {
    line(7.2);
    console.error(error.message);
  }
}
runPromiseAllSettled();
