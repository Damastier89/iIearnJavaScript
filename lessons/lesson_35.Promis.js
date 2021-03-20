// Part One
// Promise – это специальный объект, который содержит своё состояние. Вначале pending («ожидание»), затем – одно из: fulfilled («выполнено успешно») или rejected («выполнено с ошибкой»).Promise (по англ. promise, будем называть такой объект «промис») – это специальный объект в JavaScript, который связывает «создающий» и «потребляющий» коды вместе.«Создающий» код может выполняться сколько потребуется, чтобы получить результат, а промис делает результат доступным для кода, который подписан на него, когда результат готов.

const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(Math.random()), 3000);
});

/* console.log(promise); */
promise.then();// Первый аргумент метода .then – функция, которая выполняется, когда промис переходит в состояние «выполнен успешно», и получает результат. Второй аргумент .then – функция, которая выполняется, когда промис переходит в состояние «выполнен с ошибкой», и получает ошибку.
promise.then(x => {console.log(x); return x;}).then(i => {console.log(i);})
.then(z => {console.log(z);})// 0.2248787657341611 0.2248787657341611 undefined(z no return)
.catch(err => console.log(err));// Если мы хотели бы только обработать ошибку, то можно использовать null в качестве первого аргумента: .then(null, errorHandlingFunction). Или можно воспользоваться методом .catch(errorHandlingFunction), который сделает тоже самое.

// По аналогии с блоком finally из обычного try {...} catch {...}, у промисов также есть метод finally. Вызов .finally(f) похож на .then(f, f), в том смысле, что f выполнится в любом случае, когда промис завершится: успешно или с ошибкой. finally хорошо подходит для очистки, например остановки индикатора загрузки, его ведь нужно остановить вне зависимости от результата.
//Part Two

function http() {
    return {
        get(url, callback) {
        try {
            const xhr = new XMLHttpRequest(); 
            xhr.open('GET', url); 
            xhr.addEventListener('load', () => {
                if (Math.floor(xhr.status / 100) !== 2) {
                    callback(`Error. Status code: ${xhr.status}`, xhr);
                        return;
            }
            const response = JSON.parse(xhr.responseText);
            callback(null , response); 
        }); 
            xhr.addEventListener('error', () => {
                callback(`Error. Status code: ${xhr.status}`, xhr);
        }); 
        
            xhr.send();
        } catch (error) {
            callback(error);
        }
    },
        post(url, body, headers, callback) {
            try {
                const xhr = new XMLHttpRequest(); 
                xhr.open('POST', url); 
                xhr.addEventListener('load', () => {
                    if (Math.floor(xhr.status / 100) !== 2) {
                        callback(`Error. Status code: ${xhr.status}`, xhr);
                            return;
                }
                const response = JSON.parse(xhr.responseText);
                callback(null , response); 
            }); 
                xhr.addEventListener('error', () => {
                    callback(`Error. Status code: ${xhr.status}`, xhr);
			}); 
			
				if(headers) {
					Object.entries(headers).forEach(([key, value]) => {
						xhr.setRequestHeader(key, value);
					});
				}
            
                xhr.send(JSON.stringify(body));
            } catch (error) {
                callback(error);
            }
        },
    };
}

const myHttp = http();

//CallBack Hell
myHttp.get(
    `https://jsonplaceholder.typicode.com/posts`, 
    (err, res) => {
        if(err){
            console.log('error', err);
            return;
        }
        myHttp.get(
            `https://jsonplaceholder.typicode.com/comments?postId=1`,
            (err, res) => {
                if(err){
                    console.log('error', err);
                    return;
                }
                myHttp.get(
                    `https://jsonplaceholder.typicode.com/users/1`,
                    (err, res) => {
                        if(err){
                            console.log('error', err);
                            return;
                        }
                        /* console.log('the end'); */
                    } 
                );
            } 
        ); 
    }
);

function getPost(id) {
    return new Promise((resolve, reject) =>{
		myHttp.get(`https://jsonplaceholder.typicode.com/posts/${id}`, 
		(err, res) =>{
            if (err) {
				reject(err);
			}
			resolve(res);
        });
    });
}
function getPostComments(post) {
    const { id } = post;
	return new Promise((resolve, reject) =>{
		myHttp.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`, 
		(err, res) =>{
            if (err) {
				reject(err);
			}
			resolve({ post, comments: res});
        });
    });
}
function getUserCreatedPost(data) {
    const {post: {userId} } = data;
	return new Promise((resolve, reject) =>{
		myHttp.get(`https://jsonplaceholder.typicode.com/users/${userId}`, 
		(err, res) =>{
            if (err) {
				reject(err);
			}
			resolve({...data, user: res});
        });
    });
}
// В цепочке then вызываем нужные нам асинхронные функции. В каждом then мы имеем результат предыдущего действия.
/* getPost(70)
.then(post => getPostComments(post))
.then(data => getUserCreatedPost(data))
.then(fullData => console.log(fullData))
.catch(err => console.log(err))
.finally(); */// finally - выполняется в любом случае.

// Promise All
function getPost2(id) {
    return new Promise((resolve, reject) =>{
		myHttp.get(`https://jsonplaceholder.typicode.com/posts/${id}`, 
		(err, res) =>{
            if (err) {
				reject(err);
			}
			resolve(res);
        });
    });
}
function getPostComments2(id) {
	return new Promise((resolve, reject) =>{
		myHttp.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`, 
		(err, res) =>{
            if (err) {
				reject(err);
			}
			resolve(res);
        });
    });
}
function getUserCreatedPost2(userId) {
	return new Promise((resolve, reject) =>{
		myHttp.get(`https://jsonplaceholder.typicode.com/users/${userId}`, 
		(err, res) =>{
            if (err) {
				reject(err);
			}
			resolve(res);
        });
    });
}

Promise.all([
   getPost2(1),
   getPostComments2(1),
   getUserCreatedPost2(1) 
]).then(([post, comments, user]) => console.log(post, comments, user))
.catch(err => console.log(err));

