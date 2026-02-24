function main() {

  let f = function (a, b) {
    return a + b;
  };

  f = (a, b) => { return a + b; };
  f = (a, b) => a + b;

  let g = () => { console.log('función g'); };
  let h = x => 2 * x;

  console.log(f(4, 5));
  g();
  console.log(h(5));

  let a = [23, 16, 4, 15, 42, 8];
  a.sort((a, b) => a - b);
  console.log(a);
}

main();
