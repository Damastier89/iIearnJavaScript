//* Number to string
let value;
let object = {};//* object - обьект
let arrey = [];//* arrey - массив

value = 10;//* 10 number
value = String(11); //* 11 string
value = String(10 * 5);//* 50 string
value = (30).toString();//*30 string  .toString() - Это метод 

//* Boolean to string

value = String(true);//* true string

//* Arrey to string

value = String([1, 2, 3]);//* 1,2,3, string

//* Object to string
value = String({name: 'Sergey'});//* [object Object] string

//* Не я вное преоюразование
value = 10 + '' + 10;//* конкатенация string. При сложении со строкой , любой тип данных становится string.
value = 30 * '5';//* 150 number 
value = 30 - '5';//* 25 number
value = 30 / '5';//* 6 number
value = true + 5;//* 6 number / true - 1 / null - 0 / false - 0 /
value = false + undefined;//* NaN 

//*String to numder

value = Number('20');//* 20 number
value = Number(null);//* 0 number
value = Number(false);//* 0 number
value = Number(true);//* 1 number
value = Number('false');//* NaN number
value = Number([1,2,3,4,5]);//* NaN number
value = parseInt('150');//* 150 number - функция для целых чисел
value = parseFloat('12,50');//* 12,50 number - функция для дробных чисел

//* BooLean

value = Boolean('Hello');//* true
value = Boolean('');//* false
value = Boolean(100);//* true
value = Boolean(undefined);//* false
value = Boolean(null);//* false
value = Boolean({});//* true
value = Boolean([]);//* true

console.log(value);
console.log(typeof value);


