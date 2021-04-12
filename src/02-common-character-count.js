/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} _s1
 * @param {String} _s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(_s1, _s2) {
  const arr1 = _s1.split(''); // переводим строку1 в массив
  const obj1 = {};
  arr1.forEach((letter) => {
    if (!obj1[letter]) {
      obj1[letter] = 1; // если в объекте нет такой буквы, добавляем со значением 1
    } else {
      obj1[letter] += 1; // если есть, увеличиваем значение на 1
    }
  });

  const arr2 = _s2.split(''); // то же самое для строки2
  const obj2 = {};
  arr2.forEach((letter) => {
    if (!obj2[letter]) {
      obj2[letter] = 1;
    } else {
      obj2[letter] += 1;
    }
  });

  const resultObj = {}; // результрующий объект
  Object.keys(obj1).forEach((key) => { // проверяем, если в обоих объектах одинаковые ключи
    if (obj2[key]) {
      resultObj[key] = Math.min(obj1[key], obj2[key]); // если есть берем минимальное значение
    }
  });

  let result = 0;
  Object.values(resultObj).forEach((el) => {
    result += el; // складываем все значения результрующего объекта
  });

  return result;
}

module.exports = getCommonCharacterCount;
