// Cross-origin resource sharing (CORS; с англ. — «совместное использование ресурсов между разными источниками») — технология современных браузеров, которая позволяет предоставить веб-страниц доступ к ресурсам другого домена.


function getGmail (callback) {
    const xhr = new XMLHttpRequest();  
    xhr.open('GET', 'http://gmail.com'); 
    xhr.addEventListener('load', () => {
        console.log(xhr.responseText); 
    }); 
    xhr.addEventListener('error', () => {
        console.log('error');
    }); 
    
    xhr.send();
}
getGmail();
// Request URL: https://jsonplaceholder.typicode.com/posts
// Request Method: POST


// access-control-allow-credentials: true
// access-control-allow-origin: http://127.0.0.1:5502

