/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    if (!nums) {
        return false;
    }
    
    var len = nums.length;
    
    if (len === 0) {
        return false;
    }
    
    var i = 0, map = {};
    
    for (; i < len ; i++) {
        
        if (map.hasOwnProperty(nums[i])) {
            return true;
        }
        
        map[nums[i]] = true;
        
    }
    
    return false;

};