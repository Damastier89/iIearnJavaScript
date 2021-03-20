let itemOne = 1;
let itemTwo = 0;

if (itemOne > 0) {
    itemTwo = itemOne;
} else {
    itemTwo += 1;
}
//* Тернарный оператор - ?
//* выражение ? действие если true : действие если false;

itemTwo = itemOne > 0 ? itemTwo = itemOne : itemTwo += 1;
//* Пример с else if
let c = 0;
c = c === 0 ? 1 : c < 0 ? 'less then zero': c * 10;
console.log(c);

//*  switch case , заведомо известные переменные, мы определяем конкретные значения
let color = 'red';

switch (color) {
    case 'yellow':
        console.log('Color is yellow');
        break;
    case 'red':
        console.log('Color is red');
        break;
    default:
        console.log('Default');       
}
//* Если код дублируется, то можно склеить case
let colorOne = 'red';

switch (colorOne) {
    case 'yellow':
    case 'red':
        console.log('Color is red || yellow');
        break;
    default:
        console.log('Default');       
}

