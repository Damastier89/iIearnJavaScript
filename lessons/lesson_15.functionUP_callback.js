//* В JavaScript функции расматриваются как особый вид объектов. Функции первого класса.
function foo() {
    console.log('Hello World');
}

foo();
foo.field = 'Sergey'; //* field - поле

console.log(foo.field);

//* Финкции высшего порядка это - финкции которые в качестве аргумента(параметров) принемают другие функции или возвращают другие функции.

const array = ['Sergey', 'Olga', 'Irina', 'Svetlana', 'Anastacia'];
let arr = [];
for (let i = 0; i < array.length; i++) {
    arr.push(array[i].length);
}
console.log(arr); //* [ 6, 4, 5, 8, 9 ]

const arrayOne = ['Sergey', 'Olga', 'Irina', 'Svetlana', 'Anastacia'];
let arrOne = [];
for (let i = 0; i < arrayOne.length; i++) {
    arrOne.push(arrayOne[i].toUpperCase());
}
console.log(arrOne); //* [ 'SERGEY', 'OLGA', 'IRINA', 'SVETLANA', 'ANASTACIA' ] 

const names = ['Sergey', 'Olga', 'Irina', 'Svetlana', 'Anastacia'];

function mapArray(arr, fn) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(fn(arr[i]));
    }
    return res;
}
//* Отдельная функция обработчик
function nameLength(el) {
    return el.length; //* длина каждого элемента из массива
}
//* Отдельная функция обработчик
function nameToUpperCase(el) {
    return el.toUpperCase();
}

const result = mapArray(names, nameLength);
const resultTwo = mapArray(names, nameToUpperCase);
console.log(result, resultTwo); //* [ 6, 4, 5, 8, 9 ] - длина каждого  элемента из массива | [ 'SERGEY', 'OLGA', 'IRINA', 'SVETLANA', 'ANASTACIA' ]

//* Функция высшего порядка возвращает другую функцию
function greeting(firstName) {
    return function (lastName) {
        return `Hello, ${firstName} ${lastName}`;
    };
}

/* const testGreeting = greeting('Sergey');
const fullName = testGreeting('Lancev'); 
console.log(fullName);//*Hello, Sergey Lancev */

const fullName = greeting('Sergey')('Lancev');
console.log(fullName); //*Hello, Sergey Lancev

function qustion(job) {
    const jobDictionaty = {
        developer: 'что такое JavaScript',
        teacher: 'какой предмет вы ведёте'
    };
    return function (name) {
        return `${name}, ${jobDictionaty[job]}?`;
    };

    /* if (job === 'developer') {
        return function (name) {
            return `${name}, что такое JavaScript?`;
        };
    } else if (job === 'teacher') {
        return function (name) {
            return `${name}, какой предмет вы ведёте? `;
        };
    } */
}
const candidateQustion = qustion('developer');
console.log(candidateQustion('Sergey')); //* Sergey, что такое JavaScript? (Возвращает тот же результат , но код более для редактирования, достаточно вписать в объект необходимые знаечения )
/* const developerQustion = qustion('developer');
console.log(developerQustion('Sergey')); //* Sergey, что такое JavaScript?
const teacherQustion = qustion('teacher');
console.log(teacherQustion('Sergey')); //* Sergey, какой предмет вы ведёте?  */