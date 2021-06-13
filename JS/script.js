'use strict';

if (4 == 9) {
     console.log('Ok!');
} else {
    console.log('Error!');
}

const num = 50 ;

if (num < 49) {
    console.log('Error');
} else if (num > 100){
    console.log('Too much');
} else {
    console.log('Ok!');
}

// Тернарный оператор (три аргумента):
// имеется условие:
// num равно 50
// ? - это тернарный оператор
// console.log('Ok!') - действие, которое происходит в случае правдивого условия
// console.log('Error') - действие, которое выполниться если это условие не выполнилось

(num === 50) ? console.log('Ok!') : console.log('Error');

const num = 50;
// switch всегда на строгое сравнение
switch (num) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 50:
        console.log('В точку!');
        break; 
    default:
        console.log('Не в этот раз!');
        break;
}