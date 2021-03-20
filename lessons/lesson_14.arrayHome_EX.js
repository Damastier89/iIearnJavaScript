//* Функция которая принемает число n и возвращает массив, заполненный числами от 1 до n
function getArray(number) {
    const array = [];

    for (let i = 1; i <= number; i++) {
        array.push(i);
    }
 
    return array;
}

console.log(getArray(10));

//* Функция, которая принемает массив и возвращает новый массив с дублированными элементами из первого массива
function doubleArray(arr) {
    return arr.concat(arr);
}

console.log(doubleArray([1, 2, 3, ]));

//* Функция которая принемает произвольное(любое) число массивов и удаляет из каждого массива первый элемент, затем  возвращает массив из оставщихся значений.
function changeCollection() {
    const arr = [];

    for (let i = 0; i < arguments.length; i++) {
        if (Array.isArray(arguments[i])) {
            const item = arguments[i].slice();
            item.shift();
            arr.push(item);
        }
    }

    return arr;
}

console.log(changeCollection([1, 2, 3, 4, 5, ]));

//* Функция принемает массив пользователей,  поле которое хочу проверить и значение на которое хочу проверять указанне поле. Проверяет что все аргументы переданны. Если что-то не переданно, возвращает ощибку 'errore message'. Возвращает новый массив с пользователями соответствующий указанным параметрам.
const users = [{
        "_id": "5e36b779dc76fe3db02adc32",
        "balance": "$1,955.65",
        "picture": "http://placehold.it/32x32",
        "age": 33,
        "name": "Berg Zimmerman",
        "gender": "male"
    },
    {
        "_id": "5e36b779d117774176f90e0b",
        "balance": "$3,776.14",
        "picture": "http://placehold.it/32x32",
        "age": 37,
        "name": "Deann Winters",
        "gender": "female"
    },
    {
        "_id": "5e36b779daf6e455ec54cf45",
        "balance": "$3,424.84",
        "picture": "http://placehold.it/32x32",
        "age": 36,
        "name": "Kari Waters",
        "gender": "female"
    },
    {
        "_id": "5e36b899daf6e915ec54cf45",
        "balance": "$5,424.84",
        "picture": "http://placehold.it/32x32",
        "age": 36,
        "name": "Kari Waters",
        "gender": "female"
    }
];


function filterUsers(arr, item, value) {
    if (!Array.isArray(arr)) return new Error('The first argument must be an array');
    if (typeof item !== "string" || item === '') return new Error('The item must be a valid string');
    if (value === undefined || value === null) return new Error('The value must be a valid value');

    const res = [];

    for (i = 0; i < arr.length; i++) {
        if (arr[i][item] === value) {
            res.push(arr[i])
        }
    }

    return res;
}

console.log(filterUsers(users, "age", 36));

 
