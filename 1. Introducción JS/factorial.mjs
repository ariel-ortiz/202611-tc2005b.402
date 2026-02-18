
function factorial(n) {
  let resultado = 1n;
  for (let i = 1n; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

console.log(factorial(0n));
console.log(factorial(1n));
console.log(factorial(3n));
console.log(factorial(5n));
console.log(factorial(1000n));
