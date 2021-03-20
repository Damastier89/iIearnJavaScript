//* На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова будут в верхнем регистре. Использовать for или while.
let str = 'i am in the easycode';
let strNew = '';
for (let i = 0; i < str.length; i++) {
    let letter = str[i];

    if (i === 0 || str[i - 1] === ' ') {
        letter = letter.toUpperCase();
    }

    strNew += letter;
}
console.log(strNew);

//* Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).
let str2 = 'tseb eht ma i';
let strNew2 = '';
for (let i = str2.length - 1; i >= 0; i--) {
    strNew2 += str2[i];
}
console.log(strNew2);

//* Факториал числа - произведение всех натуральных чисел от 1 до n включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.
let num = 10;
let res = 1;
for (let i = num; i > 0; i--) {
    res *= i;
}
console.log(res);

//* На основе строки “JavaScript is a pretty good language” сделать новую строку, где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.
let str4 = 'JavaScript is a pretty good language';
let strNew4 = '';
for (let i = 0; i < str4.length; i++) {
    let letter4 = str4[i];

    if (str4[i - 1] === ' ') {
        letter4 = letter4.toUpperCase();
    }

    strNew4 += letter4;
    strNew4 = strNew4.replace(' ', '');
}
console.log(strNew4);

//* Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
for (let value of arr) {
    if (value % 2 === 1) {
        console.log(value);
    }
}

//* Дан объект:

let list = {
    name: ‘denis’,
    work: ‘easycode’,
    age: 29
}
//* Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.
let list = {
    name: 'denis',
    work: 'easycode',
    age: 29,
};
for (let key in list) {
    if ('string' === typeof list[key]) {
        list[key] = list[key].toUpperCase();
    }
}
console.log(list);