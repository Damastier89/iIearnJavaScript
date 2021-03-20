//* Замыкания — это функции, ссылающиеся на независимые (свободные) переменные. Другими словами, функция, определённая в замыкании, «запоминает» окружение, в котором она была создана.
//* Свободная переменная - переменная которая не была передана этой функции как параметр и не были объявлены внутри этой функции как локальные переменные.
/* Существует три типа кода в ECMAScript:
- глобальный код ( window и все его свойства и методы );
- код функции ( function foo() { ...some code... } );
- eval код ( eval(‘1 + 1’) ).
 */
//* Каждый тип кода выполняется в своем контексте исполнения (execution context). Существует только один глобальный контекст, и может быть множество экземпляров контекстов функции.

//* При каждом вызове фукнции getFullName() будет создаватья новый контекст исполнения. Есть глобальный контекст исполнения (window, document и т.п.). Так же будет создаваться вложеный контекст исполнения, для вложенной функции и у каждой функции внутри будет образоваться лексическое окружение.
//* Лексическое окружение для getFullName - firstName, lastName , свойство scope.
//* Лексическое окружение для function () - в данном случае аргументов нет , но есть свойство scope (который ведёт на уровень выше, на родительское)
function getFullName(firstName, lastName) {
    return function () {
        return `${firstName} ${lastName}`;  
    };
}

const getName = getFullName('Sergey', 'Lancev');
console.log(getName());

//* Пример замыкания
function upDateValue(val = 0) {
    let x = val;
    return function (num = 0) {
        return (x += num);
    };
}

const updtValue = upDateValue(2);
console.log(updtValue(1)); //* 3

const updtValue1 = upDateValue(3);
console.log(updtValue1(3)); //* 6
//* Вывод - что при каждом вызове создается новый контекст исполнения и новое лексическое окружение. Вызывая одну и туже функцию , она работает с разным контекстом исполнения.

//* Пример замыкания (Скрыть доступ к переменным и вернуть наружу только набор методов которые позволяют как то взаимодействовать с этой переменной)

function checkCred() {
    const login = 'test';
    const password = 'somePassword'; //* это локальные переменные к которым нет доступа снаружи

    //* Переменные которые были объявлены и используются в замыкании, будет храниться в памяти и не будут очищены.

    //* далее мы вернули во внешний мин объект с двумя методами. Эти методы в замыкании получает доступ в переменным login , password и сравниваю их стем value которое будет передано
    return {
        checkLogin(value) {
            return login === value;
        },
        checkPassword(value) {
            return password === value;
        }
    };
}

const check = checkCred();
console.log(check.checkLogin('dsdds')); //* false
console.log(check.checkLogin('test')); //* true

//* Пример замыкания 
function closureExemple() {
    const arrOfFunc = [];
    let valueOne = '';

    for (let i = 0; i < 10; i++) {
        valueOne += i;
        arrOfFunc.push(function () {
            console.log(valueOne, i);
        });
    }
    return arrOfFunc;
}

const res = closureExemple();
res[0](); //* 0123456789 0
res[5](); //* 0123456789 5