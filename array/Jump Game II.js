/**
 * Greedy
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

var jump = function(nums) {
    

  var l = nums.length;

  if (l === 0) {
    return 0;
  }

  var reach = 0;
  var step = 0;
  var mx = 0

  for (var i = 0 ; i < l ; i++) {

    if (reach >= l - 1) {
      break;
    }

    while (i <= reach) {
      reach = Math.max(reach, nums[i] + i);
      // var mx = Math.max(mx, nums[i] + i);
      i++
    }

    step++;
    // reach = mx;

  }

  return step;

};

// var jump = function(nums) {
    

//   var l = nums.length;

//   if (l === 0) {
//     return 0;
//   }

//   var reach = 0;
//   var step = 0;
//   var last = 0

//   for (var i = 0 ; i <= reach && i < l ; i++) {

//     if (i > last) {
//       step++;
//       last = reach;
//     }

//     reach = Math.max(reach, nums[i] + i);

//   }

//   if (reach < l - 1) {
//     return 0;
//   }

//   return step;

// };

// public int jump(int[] A) {
//     if(A==null || A.length==0)
//         return 0;
//     int lastReach = 0;
//     int reach = 0;
//     int step = 0;
//     for(int i=0;i<=reach&&i<A.length;i++)
//     {
//         if(i>lastReach)
//         {
//             step++;
//             lastReach = reach;
//         }
//         reach = Math.max(reach,A[i]+i);
//     }
//     if(reach<A.length-1)
//         return 0;
//     return step;
// }