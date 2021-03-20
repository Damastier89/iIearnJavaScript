//* Деструктурирующее присваивание – это специальный синтаксис, который позволяет нам «распаковать» массивы или объекты в кучу переменных, так как иногда они более удобны. Деструктуризация также прекрасно работает со сложными функциями, которые имеют много параметров, значений по умолчанию и так далее.

//* Новый оператор ... называется spread (распростанение, расширение) или rest (остаток) в зависимости от того, где и как он используется.

const user = {
    firstName: 'Sergey',
    lastName: 'Lancev',
    age: 30,
    info: {
        work: 'Atos',
        skills: ['html', 'css', 'js'],
    }
};

/* const {
    firstName,
    lastName,
    age = 25 //* Если данное значение записано в объекте, то присвоится имеено то хначение которое было в объекте. 
} = user; //* Мы вытянули отдельные свойства из обьекта user

console.log(firstName, lastName);
console.log(age);//* 30  */

//* Если мы хотим изменить имена свойств (через двоиточие пишем новое имя свойства)(С дефолтными значения тоже самое)
/* const {
    firstName: name,
    lastName,
    age: years = 25
} = user; */

/* console.log(name); //* Sergey
console.log(years); //* 30 */

//* Если есть вложенные объекты в объекте. Так же можно задавать дефолтные значения. 

/* const {
    info: {
        work,
        skills,
    },
} = user; */
/* console.log(work); //* Atos
console.log(skills); */ //* ["html", "css", "js"]

//* Деструктуризация массивов . Можно присваивать свойста при вызове , но если оно было обьявлено ранее, то присвоится оно

const colors = ['white', 'black', 'red', '#37F754'];
const [w, b, red, green = 'green'] = colors;
/* console.log(w, b, red, green); */ //* white black red #37F754

//* Можно вызывать не все свойства массив.
const names = ['Sergey', 'Maximus', 'Damastier'];
const [, , names3] = names;
/* console.log(names3); */ //* Damastier

//* Можно деструктурировать сложенные свойства в массиве.
const nestedArr = ['hello world', ['key', 'value'], ];
const [, [key, value]] = nestedArr;
/* console.log(key, value);  */ //* key value

//* Операторы other должен идти всегда в конце, чтобы забрать оттаток. 
const name = ['Sergey', 'Maximus', 'Damastier'];
const [name1, ...otherName] = name;
/* console.log(name1, otherName); */ //* Sergey (2) ["Maximus", "Damastier"]

//* Так же можно скопировать массив  и получить их в отдельной переменной , что бы они не были связаны.
const [...newName] = name;
/* const newName = [...name];  */ //* тоже что и на строке 65
/* console.log(newName);  */ //* (3) ["Sergey", "Maximus", "Damastier"]

//* Возможно склеить массивы

const colorNames = ['some value', ...colors, ...names];
/* console.log(colorNames); */ //* ["some value", "white", "black", "red", "#37F754", "Sergey", "Maximus", "Damastier"]

//* Копирование объектов

const newUser = {
    ...user,
    age: 35 //* сначало идет объект, затем свойство, которое мы хотим изменить.
};
/* console.log(newUser); */ //* {firstName: "Sergey", lastName: "Lancev", age: 35, info: {…}}

//* Смешанная деструктуризация
const {
    info: {
        skills: [html, css],
    }
} = newUser;
/* console.log(html, css); */ //* html css

//* Деструктуризация в рамках функций

function myPerson({
    lastName = '&', //* значение по умолчанию
    firstName = '&',
    age = '&',
    info: {
        skills
    } = {},
} = {}) //* <= чтобы не было ошибки нужно предать пустой объект {} при этом будет (undefined undefined undefined)
{
    /* console.log(lastName, firstName, age, skills); */
}

myPerson(newUser); //* Lancev Sergey 35 (3) ["html", "css", "js"]

//* Получить все аргументы функции
function foo(x, y, ...other) {
    console.log(arguments); //* Arguments(2) [1, 2, callee: ƒ, Symbol(Symbol.iterator): ƒ]
    const [...args] = arguments;
    console.log(args); //* (5) [1, 2, 3, 4, 5]
    console.log(other); //* [3, 4, 5]
}

foo(1, 2, 3, 4, 5);

const numbers = [2, 3];

function fooOne(x, y) {
    console.log(x, y); //* 2,3
}

fooOne(...numbers);