/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} _matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(_matrix) {
  let result = 0; // переменная для результата
  let previusNullIndex = []; // массив из индексов, в которых были нули в прошлом ряду
  let temp = []; // временная переменная для индекса чилса, которое равно нулю
  _matrix.forEach((subArr) => { // пробегаемся по основному массиву
    subArr.forEach((num, numIndex) => { // пробегаемся по массиву в массиве
      if (!previusNullIndex.length || !previusNullIndex.includes(numIndex)) { // если длина не равна
        result += num; // нулю или индекс числа над ним не равен нулю,
      } // то идем дальше, прибавляем значение числа к результату

      if (num === 0) { // паралельно проверяем само число, если это ноль, закидываем в temp
        temp.push(numIndex);
      }
    });

    previusNullIndex = [...temp]; // закидываем в previusNullindex массив из индексов,
    temp = []; // которые соответствуют значению числа ноль
  });

  return result;
}

module.exports = getMatrixElementsSum;
//
