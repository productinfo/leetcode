var ts = function (numbers, target) {
  
  var map = {};
  
  var l = numbers.length;
  
  if (l === 0) {
    return [0, 0];
    }
  
  
  var front = 0, total, back = l - 1;
  
  while (front < back) {

    var total = numbers[front] + numbers[back];
    
    if (total === target) {
      return [front + 1, back + 1];
    } else if (total < target) {
      front++;
    } else {
      back--;
    }
    
  }
  
  return [-1, -1];
  
  
};