'use strict';
// разворот строки
const a = 'Hello';
const reverse = a.split('').reverse().join('');
console.log(reverse);

//случайное число от 0 до 100
const b = Math.floor(Math.random() * 101);
console.log(b);

// пр-й массив, длинна и вывод элементов в консоль
const arr = ['bib', 'bob', 'bab', '1', 'what?'];
console.log(arr.length);
arr.forEach((element) => {
  console.log(element);
});

//все ли эл-ты в массиве одинаковы
const arr2 = [1, 1, 1, 1, 1, 1];
const isAllSame = arr2.every((i, index, arr2) => i === arr2[0]);
console.log(isAllSame);

//чётные нечётные числа в массиве
const arr3 = [1, 2, 3, 0, 3, 7, 11, null, '33', 8, 1, 1, 4, 90, 22];
const arr44 = [];
const arr33 = [];
const arrNn = [];
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] === 0 || typeof arr3[i] !== 'number') {
    arrNn.push(arr3[i]);
  } else if (arr3[i] % 2 === 0) {
    arr44.push(arr3[i]);
  } else {
    arr33.push(arr3[i]);
  }
}
console.log(
  `Количество чётных чисел - ${arr44.length}, нечётных - ${arr33.length}, всякого мусора - ${arrNn.length}. Так и живём.`
);

//map и всякое такое
const object = {
  width: 200,
  height: 300,
};
const map = new Map();
map.set(1, 'Pskov');
map.set('name', 'Pushkin');
map.set(object, true);

map.forEach((value, key, map) => {
  console.log(`ключ - ${key}, значение - ${value}`);
});
