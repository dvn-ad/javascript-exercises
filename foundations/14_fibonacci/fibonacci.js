const fibonacci = function(n) {
  const newN = Number(n);
  const newNinput = Number(n);
  if (newNinput< 0) return 'OOPS';
  if (newN <= 0) return 0;
  if (newN === 1) return 1;
  return fibonacci(newN - 1) + fibonacci(newN - 2);
};

// Do not edit below this line
module.exports = fibonacci;
