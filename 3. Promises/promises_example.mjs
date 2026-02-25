function creaPromesa() {
  return new Promise((resolve, reject) => {
    const randomValue = Math.random();  // [0.0; 1.0)
    setTimeout(() => {
      if (randomValue < 0.5) {
        resolve('ganaste');
      } else {
        reject('perdiste');
      }
    }, 100);
  });
}

let resultado = [];
console.log('inicio');
creaPromesa()
.then(x => {
  resultado.push(x);
  return creaPromesa();
})
.then(x => {
  resultado.push(x);
  return creaPromesa();
})
.then(x => {
  resultado.push(x);
  console.log(resultado);
})
.catch(x => {
  console.log('¡¡¡eres un loser!!!');
});
console.log('final');


