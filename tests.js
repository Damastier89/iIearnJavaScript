const title = document.querySelector('h1');

//! Создание и добавление элемента

const span = document.createElement('span'); //* В HTML-документах создает элемент c тем тегом, что указан в аргументе или HTMLUnknownElement, если имя тега не распознаётся.(Не добавляется на страницу, существуеи внутри JS)
span.textContent = ' Span created by createdElement';
span.classList.add("myClass");
title.appendChild(span);
/* div.appendChild(span);  */ //* DOM узлы могут быть только в одном экземпляре.

const fragment = document.createDocumentFragment(); //* Создает новый пустой DocumentFragment. DOM - узел, .
const colors = ['red', 'yellow', 'orange'];
colors.forEach((color) => {
    const item = document.createElement('div');
    item.classList.add(`color`); //* (`${color}`)
    item.style.background = color;
    item.style.width = "1024 px";
    item.textContent = color;
    fragment.appendChild(item);
});

document.body.appendChild(fragment);

//* Удаление элементов
/* title.remove(); */ //* Метод Node.remove() удаляет узел из дерева DOM
/* title.parentElement.removeChild(title); */ //* удаляет узел из дерева DOM

//! Slider
let images = ['/img/Haski-shhenki.jpg', '/img/field_image_383831793.jpg', '/img/61cb3f8b904c44605c00a81d54cf2e33.jpg'];
let num = 0;

function prev() {
    let slider = document.getElementById('slider');
    num++;
    if (num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}

function next() {
    let slider = document.getElementById('slider');
    num--;
    if (num > 0) {
        num = images.length - 1;
    }
    slider.src = images[num];
}


//! Обьявление даты
let today = new Date();
let year = today.getFullYear();

let el = document.querySelector('footer');
el.innerHTML = '<p>Моя собственность &copy;' + year + '</p>';

//! События

const btn = document.querySelector('button');
const link = document.querySelector('a');

//* Функцию можно высывать как внутри так и снаружи
function clickHandler(e) {
    console.log(this);
    e.preventDefault(); //* Метод preventDefault () интерфейса Event сообщает User agent, что если событие не обрабатывается явно, его действие по умолчанию не должно выполняться так, как обычно. Событие продолжает распространяться как обычно, до тех пор, пока один из его обработчиков не вызывает методы stopPropagation () или stopImmediatePropagation (), любой из которых сразу же прекращает распространение.
    console.log('click');
}
link.addEventListener('click', clickHandler);


/* btn.addEventListener('click', function (e) {
	console.log(this);
	console.log(e);
}); */ //* Метод EventTarget.addEventListener() регистрирует определенный обработчик события, вызванного на EventTarget. e - event

/* btn.addEventListener('click', e => {
	console.log(this);
	console.log(e);
}); */

//* Делегирование события

const events = document.querySelector('.events');

btn.addEventListener('click', (e) => {
    const div = document.createElement('div');
    div.textContent = Math.random();
    const nesteBtn = document.createElement('button');
    nesteBtn.textContent = 'Hello';

    div.appendChild(nesteBtn);
    events.appendChild(div);
});

events.addEventListener('click', e => {
    console.dir(e.target);
    if (e.target.tagName === 'BUTTON')
        console.log('button clicked');
});


//! Surfacing and Sinking Events
/* const btn = document.querySelector('.btn');
const wrap = document.querySelector('.wrap');

btn.addEventListener('click', e => {
    console.log('click btn');
}); */

const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(Math.random()), 3000);
});

console.log(promise);
promise.then();// Первый аргумент метода .then – функция, которая выполняется, когда промис переходит в состояние «выполнен успешно», и получает результат. Второй аргумент .then – функция, которая выполняется, когда промис переходит в состояние «выполнен с ошибкой», и получает ошибку.
promise.then(x => {console.log(x); return x;}).then(i => {console.log(i);})
.then(z => {console.log(z);})// 0.2248787657341611 0.2248787657341611 undefined(z no return)
.catch(err => console.log(err)); 

 