// AJAX (аббревиатура от «Asynchronous Javascript And Xml») – технология обращения к серверу без перезагрузки страницы.
// GET запрос
function getPosts (callback) {
    const xhr = new XMLHttpRequest(); //XMLHttpRequest – это встроенный в браузер объект, который даёт возможность делать HTTP-запросы к серверу без перезагрузки страницы. Несмотря на наличие слова «XML» в названии, XMLHttpRequest может работать с любыми данными, а не только с XML. Мы можем загружать/скачивать файлы, отслеживать прогресс и многое другое.
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts'); // Запрос на указанный адрес.
    xhr.addEventListener('load', () => {
        const response = JSON.parse(xhr.responseText);// Преобразуем ответ от сервера в полноценный массив.
        callback(response); 
    }); // Мы подписались на событие загрузки и получения данных от сервера.
    xhr.addEventListener('error', () => {
        console.log('error');
    }); // Обработка ошибок. Отработает если общение с сервером прошло не удачно. 404.
    
    xhr.send();// Для отправки запроса
}
// POST Запрос
function createPost (body, callback) {
    const xhr = new XMLHttpRequest(); 
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts'); 
    xhr.addEventListener('load', () => {
        const response = JSON.parse(xhr.responseText);
        callback(response); 
    }); 

    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8'); 

    xhr.addEventListener('error', () => {
        console.log('error');
    }); 
    
    xhr.send(JSON.stringify(body));
}

const btnGetPost = document.querySelector('.btn-get-post');
const btnAddPost = document.querySelector('.btn-add-post');
const ajaxRes = document.querySelector('.ajax-response');

function cardTemplate (post) {
    const card = document.createElement('div');
    card.classList.add('card');
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    const title = document.createElement('h5');
    title.classList.add('card-title');
    title.textContent = post.title;
    const article = document.createElement('p');       
    article.classList.add('card-text');
    article.textContent = post.body;
    cardBody.appendChild(title);
    cardBody.appendChild(article);
    card.appendChild(cardBody);
    return card;
}

function renderPosts (response) {
	const fragment = document.createDocumentFragment();
        response.forEach(post => {
            const card = cardTemplate(post);
			fragment.appendChild(card);   
		});
		ajaxRes.appendChild(fragment);
}

btnGetPost.addEventListener('click', e => {
    getPosts(renderPosts);
});

btnAddPost.addEventListener('click', e => {
    const newPost = {
        title: 'foo',
        body: 'bar',
        userId: 1,
    };
    createPost(newPost, response => {
        const card = cardTemplate(response);
        ajaxRes.insertAdjacentElement('beforebegin', card);
    });
});

