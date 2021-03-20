const btn = document.querySelector('.btn');
const wrap = document.querySelector('.wrap');

// Всплытие события
btn.addEventListener('click', event => {
    event.stopPropagation(); // Прекращает дальнейшую передачу текущего события.
    console.log('click btn');
});

wrap.addEventListener('click', e => {
    console.log('click wrap');
});

document.body.addEventListener('click', e => {
    console.log('click body');
});

// Погружение события
wrap.addEventListener('click', e => {
    console.log('click wrap');
},{capture: true});

document.body.addEventListener('click', e => {
    console.log('click body');
},{capture: true});


