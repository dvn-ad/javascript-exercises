const reverseString = function(str) {
    let reversed = str.split("");
    reversed.reverse();
    reversed = reversed.join("");
    // return reversed.toString("");
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
