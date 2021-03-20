//*Получить число из строки ‘100$’
let value = '100$';
value = parseFloat(value);

//* Получить первую и последнюю буквы строки
let string = "some test string";
let value;
value = string.length;
value = string[0]; //* s
value = string[string.length - 1]; //* g */

//* Сделать первую и последнюю буквы в верхнем регистре
let string = "some test string";
let value;
value = string[0].toUpperCase(); //* S
value = string[string.length - 1].toUpperCase(); //* G

//* Найти положение слова ‘string’ в строке
let string = "some test string";
let value;
value = string.indexOf('string'); //* 10

//* Найти положение второго пробела (“вручную” ничего не считать)
let string = "some test string";
let value;
value = string.lastIndexOf(' '); //* 9

//* Получить строку с 5-го символа длиной 4 буквы
let string = "some test string";
let value;
value = string.substr(5, 4); //* test

//* Получить строку с 5-го по 9-й символы
let string = "some test string";
let value;
value = string.slice(5, 10); //* test

//* Получить новую строку из исходной путем удаления последних 6-и символов (то есть исходная строка без последних 6и символов)
let string = "some test string";
let value;
value = string.slice(0, -6); //* test

//* Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”
const a = 20,
    b = 16;
const strFromNum = String(a) + String(b);
console.log(strFromNum);