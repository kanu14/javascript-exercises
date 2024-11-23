const removeFromArray = function(array, ...remove) {
    // if (!Array.isArray(remove)) {
    //     remove = [remove];
    // }
    // let deleteItem = [remove];

    for (let i = 0; i < remove.length; i++) {
        // iterate backwards so that the loop doesnt impact the array order
        for(let k = array.length - 1; k >= 0; k--) {
            
            if ( array[k] === remove[i]) {
                array.splice(k, 1);
                
            }   
        }
    }
    return array;
};


// Do not edit below this line
module.exports = removeFromArray;
