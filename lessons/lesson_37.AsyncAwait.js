// Async/await Существует специальный синтаксис для работы с промисами, который называется «async/await». Он удивительно прост для понимания и использования. Начнём с ключевого слова async. Оно ставится перед функцией, вот так:
/* async function f() {return 1;}
  У слова async один простой смысл: эта функция всегда возвращает промис. Значения других типов оборачиваются в завершившийся успешно промис автоматически.
  Например, эта функция возвратит выполненный промис с результатом 1:
  async function f() {return 1;}
  f().then(alert); // 1 
Await
Синтаксис:
работает только внутри async–функций
let value = await promise;
Ключевое слово await заставит интерпретатор JavaScript ждать до тех пор, пока промис справа от await не выполнится. После чего оно вернёт его результат, и выполнение кода продолжится.*/

/* function getPost (id) {
    return Promise.resolve().then(()=>{
        const [userType, userId] = id.split('-');
            return fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
                	.then(response => response.json());
    });
} */

async function getPost(id) {
    try {
        const response = await fetch(
			`https://jsonplaceholder.typicode.com/posts/${id}`
			).then(res => res.json());
			
		// Это все вернет один и тот же результат.    
		/* const data = await response.json();
		return data; */
		/* return response.json(); */
		/* return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json()); */
		return response;
    } catch (err) {
		console.log(err);
		return Promise.reject(err);// если этого не сделать, мы не выпадим в catch
	}  
}

/* getPost(1)
.then(data => console.log(data))
.catch(err => console.log(err)); */

async function getAll (){
	const [res1, res2] = await Promise.all([getPost(1), getPost(2)]);
	console.log(res1, res2); 
}
getAll();