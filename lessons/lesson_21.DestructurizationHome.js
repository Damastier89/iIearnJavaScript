//* Используя rest оператор и деструктуризацию, создать функцию, которая принимает любое количество аргументов и возвращает объект, содержащий первый аргумент и массив из остатка:
/* func(‘a’, ‘b’, ‘c’, ‘d’) →

{ first: ‘a’, other: [‘b’, ‘c’, ‘d’] } */

//  function getFirstOther(first, ...other) {
//    return {
//      first, other
//    }
//  }

const getFirstOther = (first, ...other) => ({
    first,
    other
});

console.log(getFirstOther(1, 2, 3, 4, 5));
/* {first: 1, other: Array(4)}
first: 1
other: (4) [2, 3, 4, 5]
__proto__: Object */

//*Организовать функцию getInfo, которая принимает объект вида
/* { name: ..., info: { employees: [...], partners: [ … ] } } */
//* и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:

/* const organisation = {
name: 'Google',
info: { employees: [‘Vlad’, ‘Olga’], partners: ['Microsoft', 'Facebook', 'Xing'] }
};

getInfo(organisation); →
Name: Google
Partners: Microsoft Facebook */
const organisation = {
    name: 'Google',
    info: {
        employees: ['Vlad', 'Olga'],
        partners: ['Microsoft', 'Facebook', 'Xing']
    }
};

function getInfo({
    name = 'Unknow',
    info: {
        partners: [first = 'none', second = 'none', third = 'none'] = []
    } = {}
} = {}) {
    console.log(`Name: ${name}`);
    console.log(`Partners: ${first}, ${second}, ${third}`);
}

getInfo(organisation);
getInfo();