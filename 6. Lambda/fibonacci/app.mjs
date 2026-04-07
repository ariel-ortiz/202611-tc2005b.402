import express from 'express';

const app = express();
const port = process.env.PORT ?? '8080';
const ipAddress = process.env.C9_HOSTNAME ?? 'localhost';

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
