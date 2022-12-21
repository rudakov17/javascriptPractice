// создал, добавил, удалил. и метод ещё есть.
const obj1 = {};

obj1.name = 'Vlad';
obj1.secondName = 'Tepes';
obj1.dateOfBirth = 1428;
obj1.dateOfDeath = 1479;
obj1.howOld = function () {
  return 2022 - obj1.dateOfBirth;
};
delete obj1.dateOfDeath;
obj1.age = obj1.howOld();
console.log(obj1);
