function TwoNum() {}

TwoNum.prototype.find = function(arr, target) {
    if (arr instanceof Array) {
        if (arr.length < 2) {            
            throw new Error('invalid array. length must be equal or greater than 2')
        }
        var mapVal = {}        
        for (i=0; i<arr.length; i++) {            
            if (mapVal[arr[i]] !== undefined) {                 
                return [mapVal[arr[i]], arr[i]]
            } else {             
                let key = target - arr[i]                                      
                mapVal[key] = arr[i]
            }                    
        }
        return []
    }
    
    return [];
};

module.exports = TwoNum;