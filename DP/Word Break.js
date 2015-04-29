
// time: O(dict size * length of str)

/**
 * @param {string} s
 * @param {set<string>} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {

    var l = s.length;

    if (l === 0 || wordDict.length === 0) {
        return false;
    }

    var t = [true];

    for (var i = 0 ; i < l ; i++) {

        if (!t[i]) {
            continue;
        }

        for (var j = 0 ; j < wordDict.length ; j++) {

            var len = wordDict[j].length;
            var end = i + len;

            if (end > l) {
                continue;
            }

            if (t[end]) {
                continue;
            }

            if (s.substring(i, end) === wordDict[j]) {
                t[end] = true;
            }

        }

    }

    return t[l];

};

// var wordBreak = function(s, wordDict) {
//     var t = [];                                                                                     

//     for (var i = 0; i< s.length; i++) {                                                             
//         for (var j = 0; j <=i; j ++ ) {                                                             
//             var word = s.slice(j, i + 1);                                                           
//             if (wordDict.has(word) && (j == 0 || t[j-1] == true )) {                                
//                 t[i] = true;                                                                        
//             }                                                                                       
//         }                                                                                           
//     }                                                                                               

//     return t[s.length - 1] || false; 
// };