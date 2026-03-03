import fs from 'fs/promises';

async function main() {
  try {
    const data = await fs.readFile('ejemplo.json', 'utf-8');
    const objeto = JSON.parse(data);
    console.log(objeto.nombre);
    console.log(objeto['casado']);
  } catch (err) {
    console.error('Error al abrir archivo');
    process.exit(1);
  }
}

main();
