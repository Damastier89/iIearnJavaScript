const users = [{
        _id: "5cdce6ce338171bb473d2855",
        index: 0,
        isActive: false,
        balance: 2397.64,
        age: 39,
        name: "Lucile Finley",
        gender: "female",
        company: "ZOXY",
        email: "lucilefinley@zoxy.com",
        phone: "+1 (842) 566-3328",
        registered: "2015-07-12T09:39:03 -03:00"
    },
    {
        _id: "5cdce6ce0aa8d071fa4f4cc5",
        index: 1,
        isActive: true,
        balance: 2608.48,
        age: 33,
        name: "Woodward Grimes",
        gender: "male",
        company: "FORTEAN",
        email: "woodwardgrimes@fortean.com",
        phone: "+1 (960) 436-3138",
        registered: "2014-09-08T03:24:39 -03:00"
    },
    {
        _id: "5cdce6ce103de120d32d6fe4",
        index: 2,
        isActive: true,
        balance: 1699.99,
        age: 25,
        name: "Robinson Coleman",
        gender: "male",
        company: "GENMOM",
        email: "robinsoncoleman@genmom.com",
        phone: "+1 (852) 543-3171",
        registered: "2019-04-23T08:24:58 -03:00"
    },
    {
        _id: "5cdce6cebada7a418d8ccb3d",
        index: 3,
        isActive: true,
        balance: 2621.84,
        age: 25,
        name: "Austin Benton",
        gender: "male",
        company: "ZILIDIUM",
        email: "austinbenton@zilidium.com",
        phone: "+1 (977) 573-2627",
        registered: "2016-08-02T10:08:24 -03:00"
    },
    {
        _id: "5cdce6ced81fe99596d9cef5",
        index: 4,
        isActive: true,
        balance: 1297.31,
        age: 37,
        name: "Casandra Stout",
        gender: "female",
        company: "ANACHO",
        email: "casandrastout@anacho.com",
        phone: "+1 (929) 465-3804",
        registered: "2018-04-14T11:27:26 -03:00"
    },
    {
        _id: "5cdce6ce6c3ae6c4d6f39e88",
        index: 5,
        isActive: false,
        balance: 2165.49,
        age: 20,
        name: "Valencia Carrillo",
        gender: "male",
        company: "XEREX",
        email: "valenciacarrillo@xerex.com",
        phone: "+1 (977) 522-3378",
        registered: "2014-02-14T11:45:27 -02:00"
    }
];

//* forEach (похож  на цикл for) Метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве.(callBack - функция обратного вызова)
//* Указываем что перебрать user, id , array, можно вызывать что-то конкретно.
users.forEach((user, i, arr) => {
    /* console.log(user, i, arr); */
});
//* Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.
//* Фильтр вернет новый массив основываясь на результате вызова callback. Если результат вызова callback будет true, то этот элемент попадет в выборку и войдет в новый массив. Если будет false , то элемент не попадет в массив.
const userLess30 = users.filter(user => user.age < 30);
/* console.log(userLess30); */
const activeUser = users.filter(user => user.isActive === true);
/* console.log(activeUser); */

//* Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.
const usersName = users.map(user => user.name);
/* console.log(usersName); */
const usersNameAge = users.map(user => ({
    name: user.name,
    age: user.age
}));
/* console.log(usersNameAge); */

//* Метод reduce() применяет функцию к аккумулятору и каждому значению массива (слева-направо), сводя его к одному значению. (Превый аргумент это callback, а второй элемент это стартовое значение. Если оно не переданно, то стартовым значением будет считаться первый элемент массива)(в данном случае 0, в которое мы будем плюсовать баланс). Сам callback принемает несколько параметров(acc - переменная в которой будет храниться результат предыдущей итерации.)(Далее идет user)
const totalBalance = users.reduce((acc, user) => (acc += user.balance), 0);
/* console.log(totalBalance);  */ //* 12790.75
//* Сформировать из массива объект объетов.
const userObj = users.reduce((acc, user) => {
    acc[user._id] = user;
    return acc;
}, {});
/* console.log(userObj); */

//* Метод some() проверяет, удовлетворяет ли хоть какой-нибудь элемент массива условию, заданному в передаваемой функции.
//* Метод every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.
const isMale = users.some((user) => user.gender === 'male');
/* console.log(isMale); */
//* true да, есть один мужчина
const isAllMale = users.every((user) => user.gender === 'male');
/* console.log(isAllMale); */
//* false нет, есть и женщины
const isAll18 = users.every((user) => user.age > 18);
/* console.log(isAll18); */
//* true да, всем пользователям больше 18

//*Метод find() возвращает значение первого найденного в массиве элемента, которое удовлетворяет условию переданному в callback функции.  В противном случае возвращается undefined.
const user = users.find(user => user.name === 'Valencia Carrillo');
/* console.log(user); */

//* Метод sort() позволяет отсортировать массив путём преобразования его элементов в строки и сравнения этих строк в порядке следования кодовых символов Unicode (сортирует массив по алфавиту). ... Элементы массива, которые не содержат элементов ("дыры") будут отсортированы после элементов, которые содержат значение
const strArr = ['Sergey', 'Olga', 'Svetlana', 'Irina', 'Kira'];
strArr.sort();
/* console.log(strArr); */ //* ["Irina", "Kira", "Olga", "Sergey", "Svetlana"]

const numArr = [10, 23, 56, 32, 21, 73];
numArr.sort();
/* console.log(numArr); */ //* [10, 21, 23, 32, 56, 73]
//* Чтобы сорт сортировал правильно нужно вернуть одно из трех значений, цифру больше нуля, цифру меньше нуля, либо ноль. Ноль значит не чего не сортировать.
const numberArr = [10, 23, 81, 32, 21, 73];
numberArr.sort((prev, next) => prev - next);
/* console.log(numberArr); */
//* Сортировка объектов массива по возрасту
users.sort((prevUser, nextUser) => prevUser.age - nextUser.age);
console.log(users);