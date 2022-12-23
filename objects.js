// создал, добавил, удалил. и метод ещё есть. и прототип.
const objZero = {
  country: 'Romania',
  source: 'my mind',
};

const obj1 = {};

obj1.name = 'Vlad';
obj1.secondName = 'Tepes';
obj1.dateOfBirth = 1428;
obj1.dateOfDeath = 1479;
obj1.howOld = function () {
  return 2022 - obj1.dateOfBirth;
};

obj1.__proto__ = objZero;

delete obj1.dateOfDeath;
obj1.age = obj1.howOld();
console.log(obj1);

// задание 1
function getAllKeys(obj) {
  for (key in obj)
    if (obj.hasOwnProperty(key)) {
      console.log(key);
    }
}

getAllKeys(obj1);

// задание 2
function hasThisKey(str, obj) {
  for (key in obj) {
    if (str === key) {
      return true;
    }
  }
  return false;
}

console.log(hasThisKey('age', obj1));
console.log(hasThisKey('allo', obj1));

//задание 3
const emptyObj = Object.create(null);
console.log(emptyObj);
