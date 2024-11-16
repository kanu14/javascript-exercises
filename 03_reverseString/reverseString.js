const reverseString = function(str) {
    let string = str.split("");
    let reverse = string.reverse();
    let new_str = reverse.join("");
    return new_str;
};

// Do not edit below this line
module.exports = reverseString;
