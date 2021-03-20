//* Принимает любое колличество чисел и возвращает их произведение(умножение)
function multiply() {
    if (!arguments.length) return 0;
    let int = 1;

    for (let i = 0; i < arguments.length; i++) {
        int *= arguments[i];
    }

    return int;
}

console.log(multiply(2, 2, 2, 2));

//* Функция принемает строку и возвращает перевётрыш строки
function reverseString(str) {
    let string = String(str);
    let int = '';

    for (let i = string.length; i--;) {
        int += string[i];
    }

    return int;
}

console.log(reverseString('test'));
console.log(reverseString(''));
console.log(reverseString(null));
console.log(reverseString(undefined));
console.log(reverseString());

//* Принемает в качестве аргумента строку, числа , null, undefined и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа. 
function getCodeStringFromText(str) {
    let string = String(str);
    let int = '';

    for (let i = 0; i < string.length; i++) {
        int += string[i].charCodeAt() + ' ';
    }

    return int;   /* .trim(); */
}

console.log(getCodeStringFromText('hello'));
console.log(getCodeStringFromText(''));
console.log(getCodeStringFromText(null));
console.log(getCodeStringFromText(undefined));
console.log(getCodeStringFromText(1234));
console.log(getCodeStringFromText('My name is Sergey and me 31'));

//*  Угадать число
function guessTheNumber(num) {
    const number = Number(num);

    if (typeof number !== "number" || isNaN(number)) {
        return new Error("Please provide a valid number");
    } 
    if (number < 0 || number > 10) {
        return new Error("Please provide number in range 0 - 10");
    }
    
    const random = Math.ceil(Math.random() * 10);

    if (random === number) {
        return "You win!"; 
    } 

    return `You are lose, your number is ${number}, the random number is ${random}`;
}

console.log(guessTheNumber(5));