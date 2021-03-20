// Event Loop
console.log(1);
console.log(2);
// Запрос в очереди callback
setTimeout(() => {
    console.log(3);
        setTimeout(() => {
            console.log(5);
    }, 0);
}, 0);
console.log(4); // 1, 2, 4, a, b, 3, 5

function a () {
    console.log('a');
}

function b () {
    console.log('b');
}

a();
b();