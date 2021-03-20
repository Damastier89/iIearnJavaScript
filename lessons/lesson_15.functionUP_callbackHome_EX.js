//* Функция , первая функция принемает массив и колбэк(одна для всех вызовов) вторая функция(колбэк) обрабатывает каждый элемент массива(для каждого вызова свой callback)
function mainFunc(arr, fn) {
    let res = 'New value: ';

    for (let i = 0; i < arr.length; i++) {
        res += fn(arr[i]);
    }

    return res;
}

function condition(elem) {
    return elem[0].toUpperCase() + elem.slice(1);
}

console.log(mainFunc(['my', 'name', 'is', 'Trinity'], condition)); //* New value: MyNameIsTrinity

function conditionOne(elem) {
    return Number(elem) * 10 + ', ';
}

console.log(mainFunc([10, 20, 30], conditionOne)); //* New value: 100, 200, 300,

function conditionTwo(elem) {
    return `${elem.name} is ${elem.age}, `
}

console.log(mainFunc([{
    age: 45,
    name: 'Jhon'
}, {
    age: 20,
    name: 'Aaron'
}], conditionTwo)); //* New value: Jhon is 45, Aaron is 20, 

function conditionThree(elem) {
    return elem.split('').reverse().join('') + ', ';
}

console.log(mainFunc(['abs', '123'], conditionThree)); //* New value: sba, 321, 

//* Метод every() вызывает переданную функцию callback один раз для каждого элемента, присутствующего в массиве до тех пор, пока не найдет такой, для которого callback вернет ложное значение (значение, становящееся равным false при приведении его к типу Boolean ).
function every(arr, fn) {
    if (!Array.isArray(arr)) return new Error('The first argument must be array');
    if (!fn || typeof fn !== 'function') return new Error('The second argument must be function');

    for (let i = 0; i < arr.length; i++) {
        if (!fn(arr[i], i, arr)) {
            return false;
        }
    }

    return true;
}

console.log(every([1, 2], function (item) {
    return typeof item === 'number';
}));