// Последовательность Фибоначчи
// Напишите функцию, которая будет генерировать
// последовательность Фибоначчи длинны n, которую
// передали как аргумент
// Input: Number
// Output: Number[]
// function fibonacci(n) {
//   todo
// }
// console.log(fibonacci(8)) // [1, 1, 2, 3, 5, 8, 13, 21]
// ========================================================================

function fibonacci(n) {
  const seq = [1, 1];
  if (n <= 2) {
    return seq.slice(0, n);
  }
  while (seq.length < n) {
    const last = seq[seq.length - 1];
    const prev = seq[seq.length - 2];
    seq.push(last + prev);
  }
  return seq;
}

console.log(fibonacci(0)); // []
console.log(fibonacci(1)); // [1]
console.log(fibonacci(2)); // [1, 1]
console.log(fibonacci(10)); // [(1, 1, 2, 3, 5, 8, 13, 21, 34, 55)]
console.log(fibonacci(8)); // [(1, 1, 2, 3, 5, 8, 13, 21)]
console.log(fibonacci(12)); // [(1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144)]
