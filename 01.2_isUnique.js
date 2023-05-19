function isUnique(string) {
  const set = new Set();
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (set.has(char)) {
      return false;
    }
    set.add(char);
  }
  return true;
}

console.log(isUnique("abcdef")); // true
console.log(isUnique("1234567")); // true
console.log(isUnique("abcABC")); // true
console.log(isUnique("abcadef")); // false
