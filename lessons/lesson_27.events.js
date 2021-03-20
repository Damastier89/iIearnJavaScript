//* Событие – это сигнал от браузера о том, что что-то произошло. Все DOM-узлы подают такие сигналы (хотя события бывают и не только в DOM).Вот список самых часто используемых DOM-событий, пока просто для ознакомления:

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