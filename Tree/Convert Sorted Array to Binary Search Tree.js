/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {

    var len = nums.length;
    
    if (len === 0) {
        return null;
    }
    
    var build = function (start, end) {
       
        if (start >= end) {
            return null;
        }
        
        var mid = (start + end) >> 1;
        
        var root = new TreeNode(nums[mid]);
        
        root.left = build(start, mid);
        
        root.right = build(mid + 1, end);
        
        return root;
        
    };
    
    return build(0, len);

};