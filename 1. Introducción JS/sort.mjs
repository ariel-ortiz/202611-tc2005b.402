let meses = [
  'enero', 'febrero', 'marzo',
  'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre',
  'octubre', 'noviembre', 'diciembre'
];

function reverseCompare(a, b) {
  if (a > b) {
    return -1;
  }
  if (a < b) {
    return 1;
  }
  return 0;
}

function lengthCompare(a, b) {
  if (a.length < b.length) {
    return -1;
  }
  if (a.length > b.length) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}

// console.log(meses);
// meses.sort(reverseCompare);  // callback
// meses.sort(lengthCompare);  // callback
// console.log(meses);

let nums = [9, 21, 451, 1099, 15, 3];
console.log(nums);
nums.sort((a, b) => b - a);
console.log(nums);

