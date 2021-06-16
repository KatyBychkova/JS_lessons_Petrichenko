'use strict';

const str = "teSt";
const arr = [1, 2, 3];

console.log(str.length); /*.length - это свойство, узнается через точку, не скобками*/
console.log(arr.length);

// console.log(str[2]);
// console.log(str[2] = 'd'); /* это работать не будет, в слове букву не заменит, тк напрямую это не работает. строка это уельная строка*/
// console.log(str);

console.log(str.toUpperCase()); /* str.toUpperCase() -  напрямую не изменяет ту строку, возвращает новое значение, кот можно использовать где-то либо записать в другую переменную */
console.log(str.toLowerCase());
console.log(str); 

const fruit = "Apple is a fruit";
console.log(fruit.indexOf("fruit"));
console.log(fruit.indexOf("q"));

const logg = "Hello world";
console.log(logg.slice(6, 11)); /* вырежет и выведет в консоль эелементы с 6 до 11*/
console.log(logg.slice(6));  /* вырежет и выведет в консоль эелементы с 6 до конца строки*/
console.log(logg.slice(-5, -1));

console.log(logg.substring(6, 11)); /*не поддерживае отрицательные аргументы*/

console.log(logg.substr(6, 5)); /*начало и кол-во символов*/


const num = 12.2;
console.log(Math.round(num)); /*округляет число до целлого*/

const test = "12.2px";
console.log(parseInt(test)); /*округляет число до целлого и переводит в число*/
console.log(parseFloat(test)); /*не округляет число до целлого и переводит в число*/