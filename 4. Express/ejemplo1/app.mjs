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

const monthNames = [
  'enero',
  'febrero',
  'marzo',
  'abril',
  'mayo',
  'junio',
  'julio',
  'agosto',
  'septiembre',
  'octubre',
  'noviembre',
  'diciembre'
];

const weekDayNames = [
  'domingo',
  'lunes',
  'martes',
  'miércoles',
  'jueves',
  'viernes',
  'sábado'
];

app.get('/fecha', (req, res) => {
  const rightNow = new Date();
  res.json({
    year: rightNow.getFullYear(),
    month: monthNames[rightNow.getMonth()],
    day: rightNow.getDate(),
    dayOfWeek: weekDayNames[rightNow.getDay()],
    hour: rightNow.getHours(),
    minute: rightNow.getMinutes(),
    second: rightNow.getSeconds(),
    feeling: '\u263a\u03A8😆'
  });
});

function fibo(n) {
  const result = [0, 1];
  while (result.length < n) {
    result.push(result.at(-1) + result.at(-2));
  }
  return result.slice(0, n);
}

app.get('/fibonacci/:num', (req, res) => {
  const num = parseInt(req.params.num) || 0;
  if (num < 0) {
    res.status(400).json({
      message: `WTF! Can't work with negative numbers: ${ num }`
    });
  } else {
    res.json({
      n: num,
      values: fibo(num)
    });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://${ ipAddress }:${ port }`);
});
