function myHttpRequest({ method, url } = {}, callback) {
    try {
        const xhr = new XMLHttpRequest(); 
        xhr.open(method, url); 
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
    
}

myHttpRequest({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/posts',
}, (err, res) => {
    if (err) {
      console.log(err);
      return;  
    }
    console.log(res);
});

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
myHttp.post('https://jsonplaceholder.typicode.com/posts', {
    title: 'foo',
    body: 'bar',
    userId: 1,
},
{'Content-Type': 'application/json; charset=UTF-8', 'x-auth': 'njn3j2n4kj34'},
(err, res) => {
    console.log(err, res);
}
);