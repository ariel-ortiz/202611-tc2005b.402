import fs from 'fs/promises';

async function main() {
  try {
    let resultado = '';
    let nombres = ['001.txt', '002.txt', '003.txt'];
    for (let nombre of nombres) {
      resultado += await fs.readFile(nombre, 'utf-8');
    }
    await fs.writeFile('final.txt', resultado);
    console.log('¡Éxito!');
  } catch (err) {
    console.error('¡¡¡Error!!!');
    console.error(err);
    process.exit(1);
  }
}

console.log('Inicio');
main();
console.log('Final');
