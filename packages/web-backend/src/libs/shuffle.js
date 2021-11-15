/**
 * Return a random sorted array
 * @param array
 * @returns {*}
 */
function shuffle(array) {
  if (!Array.isArray(array)) {
    throw new Error('Sorry, this is not a valid array');
  }
  return array.slice().sort(() => Math.random() - 0.5);
}

module.exports = shuffle;
