/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/

let resultUnique;
let resultNull;
const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
let uniquePizza = [];
let competitorPizzasMini = [];
for (const pizza of competitorPizzas) {
  competitorPizzasMini.push(pizza.toLocaleLowerCase());
}
for (let i = 0; i < myPizzasT1.length; i++) {
  if (!competitorPizzasMini.includes(myPizzasT1[i].toLocaleLowerCase())) {
    uniquePizza.push(myPizzasT1[i]);
  }
}
uniquePizza.length ? (resultUnique = [...uniquePizza]) : (resultNull = null);

let uniquePizza2 = [];
for (let i = 0; i < myPizzasT2.length; i++) {
  if (!competitorPizzasMini.includes(myPizzasT2[i].toLocaleLowerCase())) {
    uniquePizza2.push(myPizzasT1[i]);
  }
}
uniquePizza2.length ? (resultUnique = [...uniquePizza]) : (resultNull = null);

export { resultNull, resultUnique };
