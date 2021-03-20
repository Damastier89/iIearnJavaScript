//*Создайте функцию которая бы умела делать:
minus(10)(6); // 4
minus(5)(6); // -1
minus(10)(); // 10
minus()(6); // -6
minus()(); // 0
//* Подсказка, функция minus должна возвращать другую функцию.
function minus(numOne = 0) {
    return function (numTwo = 0) {
        return numOne - numTwo;
    };
}

console.log(minus(222)(434)); //* -212

//* Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
/* function multiplyMaker...
const multiply = multiplyMaker(2);
multiply(2); // 4 (2 * 2)
multiply(1); // 4 (4 * 1)
multiply(3); // 12 (4 * 3)
multiply(10); // 120 (12 * 10) */

function multiplyMaker(num1 = 0) {
    return function (num2 = 0) {
        return num1 *= num2;
    };
}

const multiply = multiplyMaker(2);
console.log(multiply(5)); //* 10 
console.log(multiply(5)); //* 50 
console.log(multiply(5)); //* 250 
console.log(multiply(5)); //* 1250 

/* Реализовать модуль, который работает со строкой и имеет методы:
a. установить строку
i. если передано пустое значение, то установить пустую строку
ii. если передано число, число привести к строке
b. получить строку
c. получить длину строки
d. получить строку-перевертыш */

const strModule = (function () {
    let str = '';

    function setStr(val = '') {
        str = String(val);
        return str;
    }

    function getStr() {
        return str;
    }

    function getStrLength() {
        return str.length;
    }

    function reversStr() {
        return str.split('').reverse().join('');
    }

    return {
        setStr,
        getStr,
        getStrLength,
        reversStr
    };
}());


//* Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень. Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).

const numModule = (function () {
    let num = 0;

    function setNumber(val = 0) {
        num = Number(val);
        return this;
    }

    function plus(val) {
        num += Number(val);
        return this;
    }

    function minus(val) {
        num -= Number(val);
        return this;
    }

    function multiplication(val) {
        num *= Number(val);
        return this;
    }

    function devide(val) {
        num /= Number(val);
        return this;
    }

    function pow(ex = 2) {
        num = Math.pow(num, ex); //* Метод Math.pow() возвращает основание, возведённое в степень показатель, то есть, значение выражения основаниепоказатель
        return this;
    }

    function getNumber() {
        return Number(num.toFixed(2)) || 0;
    }

    return {
        setNumber,
        plus,
        minus,
        multiplication,
        devide,
        pow,
        getNumber
    };
}());

console.log(numModule.setNumber(5).multiplication(2).minus(5).getNumber() //* 5
);