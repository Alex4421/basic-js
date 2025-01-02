const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let min = n.toString();
  const possibleNumbers = Array.from(min).map((_, i) => {
    return parseInt(min.slice(0, i) + min.slice(i + 1), 10);
});
return Math.max(...possibleNumbers);
}

module.exports = {
  deleteDigit
};
