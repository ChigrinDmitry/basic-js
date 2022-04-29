const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
<<<<<<< HEAD
=======

>>>>>>> 6e273ab692255baca4936237ff8760b406b08933
function countCats(arr) {
  let counter = 0;

  for (let elem of arr) {
	  if (elem == '^^') {
		counter++;
	}
  return (counter);
}

}

module.exports = {
  countCats
};