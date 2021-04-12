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
  const arr1 = _s1.split('');
  const obj1 = {};
  arr1.forEach((letter) => {
    if (!obj1[letter]) {
      obj1[letter] = 1;
    } else {
      obj1[letter] += 1;
    }
  });

  const arr2 = _s2.split('');
  const obj2 = {};
  arr2.forEach((letter) => {
    if (!obj2[letter]) {
      obj2[letter] = 1;
    } else {
      obj2[letter] += 1;
    }
  });

  const resultObj = {};
  Object.keys(obj1).forEach((key) => {
    if (obj2[key]) {
      resultObj[key] = Math.min(obj1[key], obj2[key]);
    }
  });

  let result = 0;
  Object.values(resultObj).forEach((el) => {
    result += el;
  });

  return result;
}

module.exports = getCommonCharacterCount;
