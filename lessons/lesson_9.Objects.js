 //*Объект - такой тип данных, который может сочетать в себе несколько значений (примитивных или составных
 //*Если у нас есть несколько переменных, связанных одним смыслом, мы их помещаем внутрь объекта:
 //*Объект - это всегда пара ключ: значение, помещенные внутрь фигурных скобок {}, несколько пар разделяются запятыми:
 const user = {
    firstName:'Sergey',
    age: 30,
    isAdmin: true,
    email: 'test@test.ru',
    'user-address': {
        city: 'Kaluga'
    },
    skills: ['html','css','js']
 };
//* let obj = {name: ‘Katniss’, age: 16}, obj2 = {}, obj3 = {};
//* Получить (прочитать) свойство объекта можно двумя способами:
//*с помощью точки - объект.имяСвойства: obj.name -‘Katniss’
//*с помощью квадратных скобок и имени ключа в кавычках: obj[‘name’] - ‘Katniss’
let value;
let pro = 'email';

value = user.firstName;
value = user['isAdmin'];
value = user['user-address'];
value = user['user-address'].city;
value = user['user-address']['city'];
value = user[pro];//* ?????

user.firstName = 'Damastier'; //* Перезапишет свойство в объекте

user.info = 'Some info';//* Добавить новые свойства в объект

user['user-address'].city = 'Moscow'; //* Изменит свойства вложенного объекта
user['user-address'].country = 'Obninsk'; //* Создаст свойство во вложеном объекте


console.log(value);
console.log(user);

