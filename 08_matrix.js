// Перевернуть матрицу 3х3
// Напишите функцию,которая принимает матрицу 3х3 и переворачивает на 90 градусов
// по часовой стрелке.
// Дополнительно:Напишите еще 2 функции,которые переворачивают матрицу на 180 и 270
// градусов
// [1, 2, 3]  ->  [7, 4, 1]
// [4, 5, 6]  ->  [8, 5, 2]
// [7, 8, 9]  ->  [9, 6, 3]
/*
 * 00 01 02	=> 02 12 22
 * 10 11 12 => 01 11 21
 * 20 21 22	=> 00 10 20
 */
// Input:Number[][]
// Output:Number[][]
// const matrix = [
// [1, 2, 3],
// [4, 5, 6],
// [7, 8, 9]
// ]
// function rotate(source) {
// todo
// }
// console.log(rotate(martix))
// ==================================================================

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function rotate(source) {
  const rotated = source[0].map((_) => []);
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < source[i].length; j++) {
      rotated[j][source.length - 1 - i] = source[i][j];
    }
  }
  return rotated;
}

function rotate180(source) {
  return rotate(rotate(source));
}
function rotate270(source) {
  return rotate(rotate180(source));
}
function rotate360(source) {
  return rotate(rotate270(source));
}

function print(array) {
  array.forEach((i) => console.log(i));
}

print(rotate(matrix));
console.log("----------");
print(rotate180(matrix));
console.log("----------");
print(rotate270(matrix));
console.log("----------");
print(rotate360(matrix));
// [ 7, 4, 1 ]
// [ 8, 5, 2 ]
// [ 9, 6, 3 ]
// ----------
// [ 9, 8, 7 ]
// [ 6, 5, 4 ]
// [ 3, 2, 1 ]
// ----------
// [ 3, 6, 9 ]
// [ 2, 5, 8 ]
// [ 1, 4, 7 ]
// ----------
// [ 1, 2, 3 ]
// [ 4, 5, 6 ]
// [ 7, 8, 9 ]
