// const { b } = require("../04_mathEquations/mathEquations");

const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  // const arrReduced = arr.reduce((a,b) => a+b, 0);
  // return arrReduced
  
  return arr.reduce((a,b) => a+b, 0);
};

const multiply = function(arr) {
  return arr.reduce((a,b)=>a*b,1);
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
	let factorialSum=a;
  if(a===0)return 1;
  while(a--)if(a!==0)factorialSum*=a;
  return factorialSum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
