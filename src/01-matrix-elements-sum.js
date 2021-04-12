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
  let result = 0;
  let previusNullIndex = [];
  let temp = [];
  _matrix.forEach((subArr) => {
    subArr.forEach((num, numIndex) => {
      if (!previusNullIndex.length || !previusNullIndex.includes(numIndex)) {
        result += num;
      }

      if (num === 0) {
        temp.push(numIndex);
      }
    });

    previusNullIndex = [...temp];
    temp = [];
  });

  return result;
}

module.exports = getMatrixElementsSum;
