/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]} two integers in an array, ie: [index1, index2]
 */
var twoSum = function(numbers, target) {
  
  var map = {};

  for (var i = 0 ; i < numbers.length ; i++) {

    if (map.hasOwnProperty(numbers[i])) {
      
      return [map[numbers[i]] + 1, i + 1];

    } else if (!map.hasOwnProperty(target - numbers[i])) {

      map[target - numbers[i]] = i;

    }


  }

  return [-1, -1];

};