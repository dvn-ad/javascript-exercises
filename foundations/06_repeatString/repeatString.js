const repeatString = function(str, num) {
    let result = str;
    if(num<0) return "ERROR";
    if(num===0) return "";
    for(let i=1; i<num; i++) result+=str;
    return result;
};

// Do not edit below this line
module.exports = repeatString;
