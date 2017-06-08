/**
 * console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 3));
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {

  var res = [];

  if (!words) {
    return res;
  }

  var len = words.length;

  if (len === 0) {
    return res;
  }

  var count = 0, last = 0, i, j, k,
      str,
      spaceNum,
      extraNum;

  for (i = 0 ; i < len ; i++) {

    if ((count + words[i].length + (i - last)) > maxWidth)  {

      spaceNum = 0;
      extraNum = 0;

      if (i - last - 1 > 0) {
        spaceNum = ((maxWidth - count) / (i - last - 1)) >> 0;
        extraNum = (maxWidth - count) % (i - last - 1);        
      }

      str = '';

      for (j = last ; j < i ; j++) {

        str += words[j];

        if (j < i - 1) {

          for (k = 0 ; k < spaceNum ; k++) {

            str += ' ';

          }

          if (extraNum > 0) {
            str += ' ';
          }

          extraNum--;

        }

      }

      for (j = str.length ; j < maxWidth ; j++) {

        str += ' ';

      }

      res.push(str);
      count = 0;
      last = i;
    }

    count += words[i].length;
  }

  str = '';

  for (i = last ; i < len ; i++) {

    str += words[i];
    if (str.length < maxWidth) {

      str += ' ';

    }

  }

  for (i = str.length ; i < maxWidth ; i++) {
    str += ' ';    
  }

  res.push(str);

  return res;

};

// 4/14/2017
// O(n ^ 2)
const fullJustify = (words, maxWidth) => {
  const res = [];
  let i = 0;
  while (i < words.length) {
    let j = i;
    let len = 0;
    while (j < words.length && len + words[j].length + j - i <= maxWidth) {
      len += words[j++].length;
    }
    let out = '';
    // how many empty space left;
    let space = maxWidth - len;
    for (let k = i; k < j; k++) {
      out += words[k];
      if (space > 0) {
        let t; // total of space needs to add
        // if it is the end of the line
        if (j === words.length) {
          // no gap
          if (j - k === 1) t = space;
          // this is gap between words
          else t = 1;
        } else {
          // j - k - 1 represent how many gap between words in this line
          if (j - k - 1 > 0) {
            if (space % (j - k - 1) === 0) {
              // if space we needs can be divide with number of gaps
              t = (space / (j - k - 1)) >> 0;
            } else {
              t = ((space / (j - k - 1)) >> 0) + 1;
            }
          } else {
            t = space;
          }
        }
        for (let z = 0; z < t; z++) {
          out += ' ';
        }
        space -= t;
      }
    }
    res.push(out);
    i = j;
  }
  return res;
};