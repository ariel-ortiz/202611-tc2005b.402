const miBoton = document.getElementById('mi-buton');
const miContador = document.getElementById('mi-contador');
let contador = 0;

function actualizaContador() {
  contador++;
  miContador.innerText = contador;
  if (contador % 5 == 0) {
    miBoton.style.display = 'none'; // Desaparecer a miBoton
    setTimeout(() => {
      miBoton.style.display = 'block'; // Reaparecer a miBoton
    }, 5000);
  }
}

function reiniciarContador() {
  contador = 0;
  miContador.innerText = contador;
}

miBoton.addEventListener('click', actualizaContador);
miBoton.addEventListener('focus', () => {
  console.log('focus...');
});
miContador.addEventListener('click', reiniciarContador);
