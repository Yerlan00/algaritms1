function fibonacci(number) {
  if (number < 1) {
    return 0;
  }
  if (number <= 2) {
    return 1;
  }
  return fibonacci(number - 2) + fibonacci(number - 1);
}

console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(10)); // 55
console.log(fibonacci(8)); // 21
