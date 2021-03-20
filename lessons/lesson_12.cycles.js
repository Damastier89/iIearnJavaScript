//* while , do while , for , for of , for in.
//* Итерация - щаг цикла

//* while(пока) - допускаются любые выражения в скобка, до тех пор пока они не станут false.
let i = 0; 
while( i < 10 ) {
    console.log(i);
    i++;
} //* 0123456789

let ii = 0; 
while( ii++ < 10 ) {  //* Инкримент , увеличение на этой же строке.
    console.log(ii);
} //* 12345678910

//* do while (делай пока) - сначала выполнит действие , а потом идет проверка условия

let iii = 10;
do {
    console.log('action');
} while ( iii < 0);

//* for 
//* инициализация|условие|шаг
//* 1 - инициализация(единоразово)
//* 2 - проверка условия
//* 3 - выполняется тело
//* 4 - итератор 
for (let i = 0; i < 10; i++) {
    console.log(i);
}

let str = 'Hello';
let res = '';

for (let i = 0; i < str.length; i++) {
    console.log(str[i]); //* hello
}
for (let i = 0; i < str.length; i++) {
    console.log(str[i] + '!'); //* h!e!l!l!o!
}
for (let i = 0; i < str.length; i++) {
     res += str[i] + '*';
}
console.log(res); //* H*e*l*l*o*

let colors = ['black', 'red', 'yellow', 'blue', 'pink'];

for (let i = 0; i < colors.length; i++ ) {
    console.log(colors[i]);//* 'black', 'red', 'yellow', 'blue', 'pink'
    colors[i] = colors[i].toUpperCase();
}
console.log(colors); //* [ 'BLACK', 'RED', 'YELLOW', 'BLUE', 'PINK' ]

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue; //* пропускает итерацию 012346789
    }
    console.log(i);
}
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; //* прерывает итерацию 01234
    }
    console.log(i);
}

const users = [
    {
        name: 'Sergey',
        age: 30
    },
    {
        name: 'Anna',
        age: 24
    },
    {
        name: 'Natalia',
        age: 19
    },{
        name: 'Svetlana',
        age: 24
    },
    {
        name: 'Olga',
        age: 27
    }
];

const usersObj = {};

for (let i = 0; i < users.length; i++) {
    console.log(users[i].age);//* 30,24,19,24,27
    usersObj[users[i].name] = users[i].age;
}
console.log(usersObj);//* { Sergey: 30, Anna: 24, Natalia: 19, Svetlana: 24, Olga: 27 }
console.log(usersObj['Sergey']); //* 30

//* for of , for in 
//* Пройдется по всем ключам объекта, пока они незакончатся. Можно перебирать массивы, объекты и т.д.
const user = {
    name: 'Sergey',
    age: 30
};
//* название переменной произвольное
for (let key in user) {
    console.log(key);//* name, age
    console.log(user[key]);//* name Sergey age 30   
}

//* for of - для удобного перебора массивов

const userFbi = [
    {
        name: 'Sergey',
        age: 30
    },
    {
        name: 'Anna',
        age: 24
    },
    {
        name: 'Natalia',
        age: 19
    },{
        name: 'Svetlana',
        age: 24
    },
    {
        name: 'Olga',
        age: 27
    }
];

for (let value of userFbi) {
    console.log(value); //* { name: 'Sergey', age: 30 }{ name: 'Anna', age: 24 }{ name: 'Natalia', age: 19 }{ name: 'Svetlana', age: 24 }{ name: 'Olga', age: 27 }
}