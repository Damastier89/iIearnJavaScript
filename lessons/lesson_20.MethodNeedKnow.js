//* Methods object 
//* Copy (Поверхносное и глубокое)
let obj1 = {
    name: 'Sergey',
    info: {
        skills: ['html', 'css', 'javaScript'],
    },
};
let obj2 = {
    name: 'Maximus',
    age: 20,
};



/* let newOgj = obj1;  */ //* Можно, но при изменение newOgj изменить и obj1, нам это не нужно.

//* Метод Object.assign() используется для копирования значений всех собственных перечисляемых свойств из одного или более исходных объектов в целевой объект. После копирования он возвращает целевой объект.
//* Первый аргумент target(объект в котором мы хотим копировать) Второй sors(любое количество объектов из которых мы хотим копоровть)(Поверхностное копирование)
let newOgjOne = Object.assign({}, obj1);
console.log(newOgjOne); //* {name: "Sergey"}

let newOgjOne = Object.assign({}, obj1, obj2);
console.log(newOgjOne); //* {name: "Sergey", age: 20} 

let newOgjOne = Object.assign(obj1, obj2);
console.log(newOgjOne); //* {name: "Sergey", age: 20}
console.log(obj1); //* {name: "Sergey", age: 20}

let newOgjOne = Object.assign(obj1, obj2);
console.log(newOgjOne); //*{name: "Maximus", age: 20}
console.log(obj1); //*{name: "Maximus", age: 20}
//! Свойства из obj2 заменят свойства из obj1!

let newOgjOne = Object.assign({}, obj1, obj2);
console.log(newOgjOne); //*{name: "Maximus", age: 20}
console.log(obj1); //*{name: "Sergey"} 

let newOgj = Object.assign({}, obj2, obj1);
console.log(newOgj); //*{name: "Sergey", age: 20}
console.log(obj1); //*{name: "Sergey"} 
//! Положение обьектов важно!

//* Глубокое копировние с помощью json
//* Метод json() , определен на миксине Body, который включён в объектах Request и Response, принимает и читает тело Response stream. Возвращает promise (обещание), который, когда ответ будет получен, вызовет коллбэк с результатом парсинга тела ответа в JSON объект. Кроме своих двух методов он не содержит никакой интересной функциональности.
let newOgj = Object.assign({}, obj2, obj1);
newOgj = Object.assign({}, obj1);
console.log(newOgj.info === obj1.info); //! true

console.log(JSON.stringify(obj1)); //* {"name":"Sergey","info":{"skills":["html","css","javaScript"]}}
let objJson = JSON.stringify(obj1); //* загнал в Json формат...
newOgj = JSON.parse(objJson); //* Снова привратил в обьект
//* Более короткая запись :
newOgj = JSON.parse(JSON.stringify(obj1));
console.log(newOgj); //* {name: "Sergey", info: {…}}
console.log(newOgj.info === obj1.info); //! false
//* Таким образом мы сделали глубокое копирвание.

//* Метод JSON.stringify() преобразует значение JavaScript в строку JSON, возможно с заменой значений, если указана функция замены, или с включением только определённых свойств, если указан массив замены.

//* Метод Object.keys() возвращает массив из собственных перечисляемых свойств переданного объекта, в том же порядке, в котором они бы обходились циклом for...in (разница между циклом и методом в том, что цикл перечисляет свойства и из цепочки прототипов).
let keys = Object.keys(obj2);
console.log(keys); //*  ["name", "age"] передает ключи объекта.

//* Метод Object.values() возвращает массив значений перечисляемых свойств объекта в том же порядке что и цикл for... in .Разница между циклом и методом в том, что цикл перечисляет свойства и из цепочки прототипов.
let values = Object.values(obj2);
console.log(values); //* ["Maximus", 20] передает значение объекта.

//* Object.entries() метод возвращает массив собственных перечисляемых свойств указанного объекта в формате [key, value], в том же порядке, что и в цикле for...in (разница в том, что for-in также перечисляет свойства из цепочки прототипов). Порядок элементов в массиве который возвращается Object.entries() не зависит от того как обьект обьявлен. Если существует нужда в определенном порядке, то  массив должен быть отсортирован до вызова метода, например Object.entries(obj).sort((a, b) => a[0] - b[0]);.
let entries = Object.entries(obj2);
console.log(entries); //* ["name", "Maximus"] ["age", 20]

//* Метод Object.fromEntries() преобразует список пар ключ-значение в объект.
let fromEntries = Object.fromEntries([
    ['a', 'value'],
    ['b', 'b_value'],
]);
console.log(fromEntries); //* {a: "value", b: "b_value"}