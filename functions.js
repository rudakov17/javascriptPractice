//чётные нечётные элементы в массиве
const arr3 = [1, 2, 3, 0, 3, 7, 11, null, '33', 8, 1, 1, 4, 90, 22];
function whatsInside(arr) {
  const arr33 = [];
  const arr44 = [];
  const arrNn = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0 || typeof arr[i] !== 'number') {
      arrNn.push(arr[i]);
    } else if (arr[i] % 2 === 0) {
      arr44.push(arr[i]);
    } else {
      arr33.push(arr[i]);
    }
  }
  console.log(
    `Количество чётных чисел - ${arr44.length}, нечётных - ${arr33.length}, всякого мусора - ${arrNn.length}. Так и живём.`
  );
}
whatsInside(arr3);

//простое составное до 1000
function isPrime(n) {
  if (n < 2) {
    return 'ни то ни другое';
  } else if (n === 2) {
    return 'простое число';
  }
  if (n > 1000) {
    return 'написано же что не больше тысячи, ну';
  }
  let i = 2;
  const limit = Math.sqrt(n);
  while (i <= limit) {
    if (n % i === 0) {
      return 'составное число';
    }
    i += 1;
  }
  return 'простое число';
}
console.log(isPrime(379));
console.log(isPrime(1));
console.log(isPrime(2012));
console.log(isPrime(222));

//задание 6.5 фунеции высшего порядка
function firstFunc(a) {
  return function (b) {
    return a + b;
  };
}
const secondFunc = firstFunc(5);
const sumBoth = secondFunc(7);
console.log(sumBoth);

//таймер от и до
function timerFromFor(a, b) {
  let timing = setInterval(() => {
    console.log(a);
    if (a === b) {
      clearInterval(timing);
    } else {
      a++;
    }
  }, 1000);
}

timerFromFor(4, 7);

//возведение в степень
const exp = (a, b) => {
  return Math.pow(a, b);
};
console.log(exp(4, 3));
