// Fetch JavaScript может отправлять сетевые запросы на сервер и подгружать новую информацию по мере необходимости.Например, мы можем использовать сетевой запрос, чтобы:
/* 
Отправить заказ,
Загрузить информацию о пользователе,
Запросить последние обновления с сервера,
…и т.п. 
Для сетевых запросов из JavaScript есть широко известный термин «AJAX» (аббревиатура от Asynchronous JavaScript And XML). XML мы использовать не обязаны, просто термин старый, поэтому в нём есть это слово. Возможно, вы его уже где-то слышали. Есть несколько способов делать сетевые запросы и получать информацию с сервера.    Метод fetch() — современный и очень мощный, поэтому начнём с него. Он не поддерживается старыми (можно использовать полифил), но поддерживается всеми современными браузерами. Базовый синтаксис:
let promise = fetch(url, [options])
url – URL для отправки запроса.
options – дополнительные параметры: метод, body, headers, заголовки и так далее.
Без options это простой GET-запрос, скачивающий содержимое по адресу url. */

fetch('https://jsonplaceholder.typicode.com/posts') // fetch по умолчанию делает GET запрос
.then(response => {
    return response.json();// чтобы получить тело запроса (объект ответа от сервера и в нем будет набор свойств и методов для работы с ним)
})// .json() если получаем json, .text() если получаем текст.
.then(posts => console.log(posts))
.catch(err => console.log(err));

function getPost(id) {
    return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(post => resolve(post))
        .catch(err => reject(err));
    });
}

/* getPost(1)
.then(post => console.log(post))
.catch(err=> console.log(err)); */

// 2. тут это принемается как единица
function getPost2(id) {
    const [userType, userId] = id.split('-');// 3. далее методом split() разделаю строку по указанному разделителю('-') 4.при помощи [диструктуризации] разбив, забираем userType и userId. В userId будет хранится - 1
    return fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
        .then(response => response.json());
}

/* getPost2('user-1')// 1.передаётся в виде строки
.then(post => console.log(post))
.catch(err=> console.log(err)); */

function getPost3 (id) {
    return Promise.resolve().then(()=>{
        const [userType, userId] = id.split('-');
            return fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
                	.then(response => response.json());
    });
}

getPost3(1)
.then(post => console.log(post))
.catch(err=> console.log(err));// TypeError: id.split is not a function or its return value is not iterable at lesson_36.fetch.js:46