// Инкопсуляция - представляет собой сокрытие состояния объекта от прямого доступа из вне. По умолчанию все свойства объектов являются публичными, общедоступными, и мы к ним можем обратиться из любого места программы. Также может означать скрытие внутренней реализации от других компонентов. Например, доступ к скрытой переменной может предоставляться не напрямую, а с помощью методов для чтения (геттер) и изменения (сеттер) её значения.

/* const user = {
    name:'Sergey',
    getName() {
        return this.name;
    },
    setName(name) {
       this.name = name; 
    } 
}; */

/* function User(name){
    let userName = name;

    return {
        getName() {
            return userName;
        },
        setName(name) {
           userName = name; 
        }  
    };
}

const sergey = new User('Sergey'); */

/* function User(name){
    let userName = name;
// Object.freeze Предотвращает добавление в него новых свойств; предотвращает удаление существующих свойств; и предотвращает изменение существующих свойств или их перечисляемость, конфигурируемость или возможность записи.
    return Object.freeze ({
        getName() {
            return userName;
        },
        setName(name) {
           userName = name; 
        }  
    });
}

const sergey = new User('Sergey'); */

function User(name){
//Символ (анг. Symbol) — это уникальный и неизменяемый тип данных, который может быть использован как идентификатор для свойств объектов. Символьный объект (анг. symbol object) — это объект-обёртка (англ. wrapper) для примитивного символьного типа.    
    const symbol = Symbol();
    return {
        [symbol]: name,
        getName() {
            return this[symbol];
        },
        setName(name) {
            this[symbol] = name; 
        }  
    };
}

const sergey = new User('Sergey'); 

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