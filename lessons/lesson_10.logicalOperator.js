/* Операторы ставнения > Больше | < Меньше | >= Больше или равно | <= Меньше или равно | == Не строгое равенство | === Строгое равенство | != Не строгое не равенство | !== Строгое не равенство   */ 

let value ;
value = 1 > 2;//* false
value = 2 <= 2;//* true
value = 1 == 1; //* true
value = 1 == "1";//* true НЕ проверят на тип данных и автоматически приводит к числу
value = 1 === "1";//* false
value = 1 != "1";//* false
value = 1 !== "1";//* true
//* У каждого символа есть числовое представление в ЮниКоде
value = 'a' > 'a';//* false
value = 'a' > 'A';//* true
value = 'a'.charCodeAt();//* 97
value = 'A'.charCodeAt();//* 65

//* Условия if , else 

if  ('Любое выражение, любой валидный код') //! true 
{
    //* actions
} else //! false
 {
    //* Some actions
}

valueOne = 10;

if (valueOne !== 10) {
    console.log('Right');
} else {
    console.log('Wrong');
}

valueTwo = 10; //* Проверяет на наличие переменной , если есть то true 'Some actions'

if (valueTwo) {
    console.log('Some actions');
}
//* Если значения нет то false 'empty'
valueThree = null;
if (valueTree) {
    console.log('Some actions');
} else {
    console.log('empty');
}

//* Логические операторы || - или / && - и / ! - не
valueFour = null;
if(!valueFour){
    console.log(valueFour);//* Нет значения, значит выполнить действие
}

//* Проверить, есть ли что-то в массиве .length
valueFive = [1]; 

if (valueFive.length) {
    console.log(valueFive);
} else {
    console.log('Array is empty');
}
//* Проветить я вляется ли массив массивом
valueSix = [1];

if (Array.isArray(valueSix)) {
    console.log(valueSix);
} else {
    console.log('Array is empty');
}

let user = {
    name: 'Sergey'
};

if (user.name) {
    console.log(user.name);
} else {
    console.log('No Name');
}

//* Логические операторы || - или(запинается на true) / && - и(запинается на false)

valueSeven = 1 || 0;
console.log(valueSeven); //* 1 

let age = 50;

if (age < 16 || age > 65) {
    console.log('Some actions');
} else {
    console.log('incorrect');
}
//* Оператор || будет искать true  и если найдет, записывает в переменную.
let serverNickname = 'Sergey';
let nickname = serverNickname || 'default nickname';

//* если в промежутке , то buy
productPrice = 10;
if (productPrice >= 5 && productPrice <=20 ) {
    console.log('buy'); 
} else {
    console.log('Not buy'); 
}

//* Оператор if else

valueEight = 9;

if (valueEight < 10 ) {
console.log('No');
} else if (valueEight >= 10 ) {
    console.log('Yes');
}else {
    console.log('Not');
}



