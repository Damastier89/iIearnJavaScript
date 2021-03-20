//* ES5
const firstName = 'Sergey';
const lastName = 'Lancev';
const age = 30;

let str;

str = 'Hello my name is ' + firstName + ' ' + lastName;
str = '<ul>' +
    '<li>First name:' + firstName + '</li>' +
    '<li>Last name:' + lastName + '</li>' +
    '<li>age:' + age + '</li>' +
      '</ul>'; 

console.log(str);

//* ES6 - Шаблонные строки

str = `
    <ul>
        <li>First name: ${ firstName }</li>
        <li>Last name: ${ lastName }</li>
        <li>Age: ${ age }</li>
        <li>Math.random: ${ Math.random() }</li>
        <li>5 * 5: ${ 5 * 5 }</li>
    </ul> 

`;


document.body.innerHTML = string;