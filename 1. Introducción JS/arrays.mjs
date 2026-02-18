let a1 = [1, 2, 3, 4];
console.log(a1);
let a2 = Array(10);
console.log(a2);
a1.push(5);  // O(1)
a1.push(6);
console.log(a1);
console.log(a1.pop()); // O(1)
console.log(a1);
a2.push(7);
console.log(a2);
console.log(a1.shift()); // O(N)
console.log(a1);
console.log(a1.length); // O(1)
console.log(a2.length);
