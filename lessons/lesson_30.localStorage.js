//Объекты веб-хранилища localStorage и sessionStorage позволяют хранить пары ключ/значение в браузере.Что в них важно – данные, которые в них записаны, сохраняются после обновления страницы (в случае sessionStorage) и даже после перезапуска браузера (при использовании localStorage).

// Добавить или получить значение
localStorage.setItem('myItem', 'myValue');

// Получить значения
localStorage.getItem('myItem');

// Добавить значение в localStorage (обьект) по дефолту принимаются строки или числа.
const user = { name: 'Sergey'};
localStorage.setItem('user', JSON.stringify(user));
const userFromLS = JSON.parse(localStorage.getItem(user));// null

// Удаление элемента
localStorage.removeItem('user');

// Очистить весь localStorage
localStorage.clear();

console.log();