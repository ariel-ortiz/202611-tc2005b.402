function piramide(n) {
  let resultado = [];
  for (let i = 1; i <= n; i++) {
    resultado.push('*'.repeat(i));
  }
  console.log(resultado.join('\n'));
}

