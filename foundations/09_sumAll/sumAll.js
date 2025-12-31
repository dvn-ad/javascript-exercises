const sumAll = function(inputA, inputB) {
    let sum=0;
    
    if(!(Number.isInteger(inputA) && Number.isInteger(inputB)) || (inputA<0||inputB<0)) return "ERROR";

    if(inputA>inputB){
        let tmp=inputB;
        inputB=inputA;
        inputA=tmp;
    }

    let idx = inputA-1;

    while(idx++<inputB) sum+=idx;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
