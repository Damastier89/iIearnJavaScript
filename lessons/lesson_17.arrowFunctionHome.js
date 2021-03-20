//* Переделать функцию с использованием функции-стрелки (в методе reduce тоже использовать arrow function):
function sum() {
    const params = Array.prototype.slice.call(arguments);
    if (!params.length) {return 0;}
    return params.reduce(function (prev, next) {
        return prev + next;
    });
}
sum(1, 2, 3, 4); // 10
sum(); // 0
//* Метод reduce() применяет функцию reducer к каждому элементу массива (слева-направо), возвращая одно результирующее значение.
const summ = (params) => {
    if (!params.length) return 0;
    return params.reduce((prev, next) => prev + next);
};

//* Переделать функцию с использованием функции-стрелки
function convertToObject(num) {
    const obj = {
        value: num,
        isOdd: Boolean(num % 2)
    }
    return obj;
}
//* 
const convertToObject = (num) => ({
    value: num,
    isOdd: Boolean(num % 2)
});