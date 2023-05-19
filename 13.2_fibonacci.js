const fibonacci = (function () {
  const seq = [1, 1];
  return function (n) {
    console.log("Called with ", n);
    if (seq.length >= n) {
      console.log("No compute!");
      return seq.slice(0, n);
    }
    while (seq.length < n) {
      const last = seq[seq.length - 1];
      const prev = seq[seq.length - 2];
      seq.push(last + prev);
      console.log("Pushed:", seq[seq.length - 1]);
    }
    return seq;
  };
})();

console.log(fibonacci(0));
// Called with 0
// No compute!
// []
console.log(fibonacci(1));
// Called with 1
// No compute
// [ 1 ]
console.log(fibonacci(2));
// Called with 2
// No compute!
// [ 1, 1 ]
console.log(fibonacci(10));
// Called with  10
// Pushed  2
// Pushed  3
// Pushed  5
// Pushed  8
// Pushed  13
// Pushed  21
// Pushed  34
// Pushed  55
// [
//   1,  1,  2,  3,  5,
//   8, 13, 21, 34, 55
// ]
console.log(fibonacci(8));
// Called with  8
// No compute
// [
//   1, 1,  2,  3,
//   5, 8, 13, 21
// ]
