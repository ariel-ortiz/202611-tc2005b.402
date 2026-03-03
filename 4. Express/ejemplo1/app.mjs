import express from 'express';

const app = express();
const port = process.env.PORT ?? '8080';
const ipAddress = process.env.C9_HOSTNAME ?? 'localhost';

app.get('/', (req, res) => {
  res.json({
    message: '¡Hola, mundo!',
    value: 42
  });
});

app.get('/fecha', (req, res) => {
  const rightNow = new Date();
  res.json(rightNow.toString());
});

app.listen(port, () => {
  console.log(`Server listening at http://${ ipAddress }:${ port }`);
});
