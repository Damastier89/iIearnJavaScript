/* export */ const config = {
  apiUrl: 'demo.com',
};

/* export */ function myFunction() {
  console.log('module1, myFunction');
}

export{ config, myFunction }; // экспорт по именам переменных и функций

const user = {
  name: 'Sergey',
  age: 31
};

export {user as u}; // экспорт с заданными иминами
/* export { config as conf, myFunction as foo }; экспорт с заданными иминами*/

const data = {
  name: 'Sergey'
};
// функция служит защитой, что бы не было на прямую доступа к данным в этом модуле 
export function getData () {
  return data;
}

const symbol = Symbol();// уникальный символ(его не видно)
// за счет замыкания и уникального символа обеспечивается безопасность и сокрытие тех или иных свойств класса.
export default class User{
  constructor(firstName){
    this[symbol] = firstName;
  }
  getFirstName() {
    return this[symbol];
  }
}