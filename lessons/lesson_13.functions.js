//* Два типа обьявления финкции functin declaration and funcrion expression

//* functin declaration (они всплываю)
//* функция | имя функции | ((аргументы)пареметры функции)
function sayHello() {
    //* вся логика функции
}
//* функция не должнай изменять глобальные данные
function sayHello(firstName, lastName) {
    console.log(firstName, lastName);
    console.log('Hello World');
    return `Hello ${firstName} ${lastName}`; //* для того чтобы функция что-то возвращала.
    console.log(firstName, lastName);
    console.log('Hello World'); //* Unreachable code detected
}

let res = sayHello('Sergey', 'Lancev'); //* Hello Sergey Lancev
//* Одна функция для разных типов данных выполняет одно и тоже действие
let resOne = sayHello('Olga', 'Lanceva') + '!'; //* Hello Olga Lanceva!

console.log(resOne); //* undefined

//* Так же можно устанавливать параметры по умолчанию: (firstName = 'Default', lastName = 'Default')
function sayHello(firstName, lastName) {
    if (!firstName) return console.error('Error');
    console.log(firstName, lastName);
    console.log('Hello World');
    return `Hello ${firstName} ${lastName}`;
}

let resTwo = sayHello('Sergey', 'Lancev');
let resThree = sayHello('Olga', 'Lanceva');
let resFour = sayHello(); //* Error
console.log(resFour); //* undefined

//* Облать видимости функции

let x = 10;

function foo() {
    x = 20; //* не обьявленная переменная с начала ищется в рамках функции, далее в параметрах функции, далее поиск переходит в глобальное пространство.
    console.log(x); //* 20 , 20
}

foo();

console.log(x);

let i = 10;

function foo() {
    let i = 20; //* эта переменная локальна и доступна только в нитри функции.
    console.log(i);
}

foo();

console.log(i);

const user = {
    name: 'Sergey',
    age: 30
};

function getObj(obj) {
    obj.name = 'Damastier';
    obj.age = 31;
    obj.country = "Russia";
    console.log(user);
}

getObj(user);

//* funcrion expression Функция присваювается в переменуную.

const square = function (x) {
    return x * x;
};

//* Самовызывающаяся функция , анонимная, вызывается самостоятельно. Нужно для того чтобы инкапсулировать и закрыть доступ к коду, чтобы не было конфликтов имен.

(function (msg) {
    console.log(msg);
})('Hello world');

// arguments - Данная коллекция существует только внутри фанкции.
function foo (x) {
    /* console.log(x);
    console.log(arguments[1]); */
        for(let i = 0; i < arguments.length; i++){
          console.log(arguments[i]);  
        }

}

foo(11, "some string", [1, 2, 3,]);