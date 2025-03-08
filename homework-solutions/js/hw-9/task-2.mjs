/*
 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
     Объект должен иметь поля name (string) и age (number)
 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
 */

const characters = [
  { name: 'Barney', age: 35 },
  { name: 'Fred', age: 39 },
  { name: 'Jack', age: 49 },
];

function addCharacter(character) {
  const isValidObject = ['name', 'age'].every((key) => key in character);
  if (!isValidObject) throw new Error(`Invalid object - "${JSON.stringify(character)}"`);
  characters.push({ name: character.name, age: character.age });
  return characters;
}

function getCharacter(name) {
  return characters.find((elem) => elem.name === name);
}

function getCharactersByAge(minAge) {
  if (typeof minAge !== 'number') throw new Error(`Invalid type of minAge - "${minAge}"`);
  return characters.filter((elem) => elem.age >= minAge);
}

function updateCharacter(name, newCharacter) {
  const isValidObject = ['name', 'age'].every((key) => key in newCharacter);
  if (!isValidObject) throw new Error(`Invalid object - "${JSON.stringify(newCharacter)}"`);
  const updateChar = getCharacter(name);
  if (!updateChar) throw new Error(`Name "${name}" not found`);
  Object.assign(updateChar, newCharacter);
  return characters;
}

function removeCharacter(name) {
  const index = characters.findIndex((elem) => elem.name === name);
  if (index === -1) throw new Error(`Name "${name}" not found`);
  characters.splice(index, 1);
  return characters;
}

export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };
