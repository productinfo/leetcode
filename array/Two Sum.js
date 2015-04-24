/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]} two integers in an array, ie: [index1, index2]
 */
var twoSum = function(numbers, target) {
  
  var map = {}, result = [];

  for (var i = 0 ; i < numbers ; i++) {

    if (map.hasOwnProperty(numbers[i])) {

      result.push(map[numbers[i]] + 1);
      result.push(i + 1);

      return result;

    } else if (!map.hasOwnProperty(target - numbers[i]])) {

      map[target - numbers[i]] = i;

    }


  }

  return result;

};