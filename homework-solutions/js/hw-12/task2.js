/* Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
     Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
     После получения респонса проверьте что статус === 201. Если статус не 201 - пробросить ошибку
     Преобразуйте респонс из JSON в объект
     Сравните данные, полученные из респонса с теми, что вы передавали в запрос. Если данные не равны в каком-то ключе - кинуть ошибку
     Функция должна возвращать полученный объект из респонса
     Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена */

const url = 'https://jsonplaceholder.typicode.com/todos';
async function createTodo(todoBody) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(todoBody),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.status !== 201) {
      throw new Error(`Response failed with ${response.status}`);
    }
    const data = await response.json();
    for (let key in todoBody) {
      if (todoBody[key] !== data[key]) {
        throw new Error(`Данные не совпадают: ${key} в запросе = ${todoBody[key]}, в ответе = ${data[key]}`);
      }
    }
    return data;
  } catch (err) {
    console.error(err.message);
    throw err;
  } finally {
    console.log('Работа функции createTodo завершена');
  }
}
