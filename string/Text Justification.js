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