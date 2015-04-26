var wordBreak = function(s, wordDict) {
    var t = [];                                                                                     

    for (var i = 0; i< s.length; i++) {                                                             
        for (var j = 0; j <=i; j ++ ) {                                                             
            var word = s.slice(j, i + 1);                                                           
            if (wordDict.has(word) && (j == 0 || t[j-1] == true )) {                                
                t[i] = true;                                                                        
            }                                                                                       
        }                                                                                           
    }                                                                                               

    return t[s.length - 1] || false; 
};