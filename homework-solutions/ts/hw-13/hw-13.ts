// 1. Объявите переменные для каждого из следующих типов данных с явным указанием типа после символв "двоеточие":
//     - Число: переменная num1, значение 42.
//     - Строка: переменная str, значение "Hello, TypeScript!".
//     - Булево: переменная isComplete, значение true.
//     - Массив чисел: переменная numbers, значения [1, 2, 3, 4, 5].
//     - Массив строк: переменная cities, значения ["Minsk", "Warsaw", "London"].
//     - Объект: переменная person, объект с полями name: "Alice", age: 30, city: "Minsk".

const num1: number = 42;
const str: string = 'Hello, TypeScript!';
const isComplete: boolean = true;
const numbers: number[] = [1, 2, 3, 4, 5];
const cities: string[] = ['Minsk', 'Warsaw', 'London'];
const person: { name: string; age: number; city: string } = {
  name: 'Alice',
  age: 30,
  city: 'Minsk',
};

// 2. Создайте псевдонимы типов:
//     - Тип User, который содержит поля name (строка), age (число), и опциональное поле email (строка).
//     - Тип Grade, который может принимать одно из значений: 'junior' | 'middle' | 'senior'.

type User = { name: string; age: number; email?: string };
type Grade = 'junior' | 'middle' | 'senior';

// 3. Создайте интерфейс для объекта Car, который должен содержать поля:
//     - brand (строка),
//     - model (строка),
//     - опциональное поле year (число).

interface ICar {
  brand: string;
  model: string;
  year?: number;
}

// 4. Создайте интерфейсы для:
//     - Интерфейса Address с полями street (строка), city (строка), и zipCode (число).
//     - Интерфейса FullAddress, который наследует интерфейс Address и добавляет поле country (строка).

interface IAddress {
  street: string;
  city: string;
  zipCode: number;
}

interface IFullAddress extends IAddress {
  country: string;
}

// 5. Создайте объединение типов:
//     - Тип Product с полями id (число), name (строка), и price (число).
//     - Тип DiscountedProduct, который объединяет Product и добавляет поле discount (число).

type Product = { id: number; name: string; price: number };
type DiscountedProduct = Product & { discount: number };

// 6. Создайте функцию calculateDiscount, которая принимает объект типа DiscountedProduct и возвращает итоговую цену с учетом скидки.
//    Затипизировать явно и входные и выходные данные. Используйте следующие данные:

const product: DiscountedProduct = {
  id: 1,
  name: 'Laptop',
  price: 1000,
  discount: 10,
};

function calculateDiscount(obj: DiscountedProduct): number {
  return obj.price - (obj.price * obj.discount) / 100;
}

console.log(calculateDiscount(product)); // Ожидается: 900

// Создайте функцию validatePassword, которая принимает строку (пароль) и возвращает true,
// если пароль соответствует следующим правилам:
//   - Пароль должен содержать хотя бы одну заглавную букву.
//   - Пароль должен содержать хотя бы одну букву в нижнем регистре.
//   - Пароль должен содержать хотя бы одну цифру.
//   - Пароль должен быть не менее 8 символов.
//   - Пароль не должен состоять из одних пробелов
// Функция должна возвращать false, если хотя бы одно из условий не выполнено.

function validatePassword(pass: string): boolean {
  if (!/[A-Z]/.test(pass)) {
    return false;
  }
  if (!/[a-z]/.test(pass)) {
    return false;
  }
  if (!/\d/.test(pass)) {
    return false;
  }
  if (pass.length < 8) {
    return false;
  }
  if (!pass.trim().length) {
    return false;
  }
  return true;
}
