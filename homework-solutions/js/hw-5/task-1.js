/**
 * Сложить строку с четными числами от 10 до 0, разделенными `-` в переменную evenNumbersResult.
 * Переменная для результата `evenNumbersResult` уже создана и содержит пустую строку.
 * Ожидаемый результат: '10-8-6-4-2-0'
 */

let evenNumbersResult = '';
const evenNumbers = 10;
for (let i = evenNumbers; i >= 0; i--) {
  if (i === 1) {
    evenNumbersResult += 0;
    break;
  } else {
    if (i % 2 !== 1) {
      evenNumbersResult += `${i}-`;
    }
  }
}

/**
 * Создать строку из 5 строк с увеличивающимся количеством смайликов ":)".
 * Переменная для результата `smilePatternResult` уже создана и содержит пустую строку.
 * Ожидаемый результат:
 * :)
 * :):)
 * :):):)
 * :):):):)
 * :):):):):)
 */

let smilePatternResult = '';
const smile = ':)';
for (let i = 0; i < 5; i++) {
  if (i === 4) {
    smilePatternResult += smile.repeat(i + 1);
    break;
  }
  smilePatternResult += smile.repeat(i + 1) + '\n';
}

/**
 * Заменить все пробелы в переменной text на "1".
 * Переменная для результата `replaceSpacesWithOneResult` уже создана и содержит пустую строку.
 * Ожидаемый результат: 'Hello!1I1am1a1JS1student!'
 */
const text = 'Hello! I am a JS student!';
let replaceSpacesWithOneResult = '';
replaceSpacesWithOneResult = text.trim().replaceAll(' ', '1');

export { evenNumbersResult, smilePatternResult, replaceSpacesWithOneResult };
