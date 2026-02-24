import fs from 'fs';

function main() {
  console.log('Inicio main');
  fs.readFile('pablitos.txt', 'utf-8', (err, data) => {
    if (err) {
      console.error('No se pudo leer archivo');
      console.error(err);
      process.exit(1);
    }
    let mayus = data.toUpperCase();
    fs.writeFile('PABLITO.txt', mayus, err => {
      if (err) {
        console.error('No se pudo escribir archivo');
        console.error(err);
        process.exit(1);
      }
      console.log('¡Éxito!');
    });
  });

  console.log('Final main');
}

main();
