const sumAll = function(a, b) {
    let total = 0;
    if (a < 0 || b < 0) {
        return ('ERROR');
    }
    if (Number.isInteger(a) && Number.isInteger(b)) {
        let diff;
        if ((b - a) > 0) {
            diff = b - a;
        } else {
            diff = a - b;
        }
        for (let i = 0; i <= diff; i++) {
            total = total + i + Math.min(a , b);
            
        }
        return total;
    } else {
        return ('ERROR');
    }
};

// Do not edit below this line
module.exports = sumAll;
