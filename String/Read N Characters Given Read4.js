/**
 * Definition for read4()
 * 
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function(read4) {
    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Maximum number of characters to read
     * @return {number} The number of characters read
     */
    return function(buf, n) {
        
    };
};

// file size may larger than total n characters to read
const solution = read4 => (buf, n) => {
  let eof = false; // end of file flag
  let total = 0; // total bytes have read
  const tmp = []; // temp buffer
  while (!eof && total < n) {
    let count = read4(tmp);
    // check if it's the end of the file
    eof = count < 4;
    // get the actual count
    count = Math.min(count, n - total);
    // copy from temp buffer to buf
    for (let i = 0; i < count; i++) {
      buf[total++] = tmp[i];
    }
  }
  return total;
};

// 6/2/2018
var solution = function(read4) {
  /**
   * @param {character[]} buf Destination buffer
   * @param {number} n Maximum number of characters to read
   * @return {number} The number of characters read
   */
  return function(buf, n) {
    let total = 0;
    const tmp = [];
    while (total < n) {
      let count = read4(tmp)
      if (count === 0) break;
      count = Math.min(count, n - total);
      for (let i = 0; i < count; i++) {
        buf[total++] = tmp[i];
      }
    }
    return total;
  };
};

