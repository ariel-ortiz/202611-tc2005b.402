function ejem1() {
  console.log('ejem1');
}

console.log('inicio');
setTimeout(ejem1, 1000);
setTimeout(() => {
  console.log('ejem2');
  setTimeout(() => {
    console.log('ejem3');
  }, 250);
}, 500);
console.log('fin');
