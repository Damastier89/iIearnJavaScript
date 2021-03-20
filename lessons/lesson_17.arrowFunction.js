//* Обе функции эквивалентны
const plus = (x, y) => x + y;

const plusRes = plus(1, 2);
console.log(plusRes); //* 3

function plusFoo(x, y) {
    return x + y;
}
//* Запить без аргументов
const withoutArgs = () => console.log('Hello world');
//* Запись с одним агрументом
const singlArgs = x => x * 2; //* 4
//* Запись с одним агрументом по умолчанию
const singlArg = (x = 1) => x * 2; //* 4
//* Можно присваивать значения по умолчанию и если не чего не указывать, выведуться они.
/* const plusOne = (x = 0, y = 0) => x + y; */
//* Больше одного деййствия
const moreActions = (a, b) => {
    a *= 2;
    b *= 3;
    return a + b;
};
//* Использование стрелочных функций для того чтобы вернуть объект.
const returnObj = (str = '') => {
    return {
        value: str,
        length: str.length,
    };
}; //* {value: "hello world", length: 11}
//*
/* const returnObj = (str = '') => ({
    value: str,
    length: str.length,
}); */ //* Круглые скобки для того чтобы интерпретатор зазобрался что к чему. Более краткая запись {value: "hello world", length: 11}

//* Основные отличия от обыкновенных функций
//* У обычной функции есть псевдоколлекция arguments

function plusFonc(x, y) {
    console.log(arguments);
    return x + y;
}

plusFonc(1, 2, 3, 'hello');

//* Стрелочные функции не имею собственного контекста (this) и берут его на уровень выше. Уровень выше над объектом это глобальный объект window 

/* const obj = {
    firstName: 'Sergey',
    age: 30,
    getFirstName() {
        console.log(this);
    },
    getAge: () => console.log(this)
}; */

/* obj.getFirstName();  */ //* {firstName: "Sergey", age: 30, getFirstName: ƒ, getAge: ƒ}
/* obj.getAge(); */ //* Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}

const objct = {
    firstName: 'Sergey',
    age: 30,
    getFirstName() {
        console.log(this);
    },
    getAgeArrow: null,
    //* Мы объявили метод , внутри мы берем свойства, так так этот метод getAg имеет доступ к объекту objct и this у него работает правильно. Мы получаем доступ к свойству которое изначально было null  и присваиваем туда () => console.log(this);
    getAge() {
        this.getAgeArrow = () => console.log(this);
        //* Передать стрелочную функцию как callback внутри setTimeout()
        setTimeout(() => console.log(this));
    }
};

objct.getAge();
objct.getAgeArrow(); //* {firstName: "Sergey", age: 30, getFirstName: ƒ, getAgeArrow: ƒ, getAge: ƒ}