#!/usr/bin/node

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const num = parseInt(process.argv[2]);
const result = isNaN(num) ? 1 : factorial(num);
console.log(result);
