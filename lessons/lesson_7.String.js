//*String
const firstName = 'Sergey';
const lastName = 'Lancev';
const age = 30;
const str = 'Hello my name is Sergey';

let value;

value = firstName + lastName;//* SergeyLancev
value = firstName + ' ' + lastName;//*Sergey Lancev
value = value + ' i am ' + age;//* Sergey Lancev i am 30
value +=' i am ' + age;//* Sergey Lancev i am 30 i am 30

value = firstName.length;//* Свойство - длина строки
value = firstName[2];//* Индекс
value = lastName[lastName.length -1];//* V получить последний символ

value = firstName.toUpperCase();
value = firstName.concat(' Damastier',' ', lastName);//* Sergey Damastier Lancev

value = firstName.indexOf('s');//* -1 не найденый результат
value = firstName.indexOf('S');//* Индекс нахождения 

value = str.includes('Sergey');//* true

value = str.slice(0 , 4);//* обрезать строку, со стартовое значение и по необходимое(последний индекс не включается)
value = str.slice(5);//* Обрезать с 5го индекса и до конца строки.
value = str.slice(0 , -3);//* Обрезать с начала и минус три символа с конца.

value = str.replace('Sergey', 'Damastier');//* Hello my name is Damastier

console.log(value);



