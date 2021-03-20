// Объектно-ориентированное программирование (ООП) — это шаблон проектирования программного обеспечения, который позволяет решать задачи с точки зрения объектов и их взаимодействий. ООП обычно реализуется с помощью классов или прототипов. Большинство объектно-ориентированных языков (Java, C++, Ruby, Python и др.) используют наследование на основе классов. JavaScript реализует ООП через прототипное наследование.
// Объе́ктно-ориенти́рованное программи́рование (ООП) — методология программирования, основанная на представлении программы в виде совокупности объектов, каждый из которых является экземпляром определённого класса, а классы образуют иерархию наследования.

const sergey = {
    name: 'Sergey',
    age: 31
};

// Функции-конструкторы являются обычными функциями. Но есть два соглашения:
/* Имя функции-конструктора должно начинаться с большой буквы.
Функция-конструктор должна вызываться при помощи оператора "new". */
/////////////////////////////////////////////////////// ES5
const str = new String('Hello world');
//console.log(str);

function Product(brand, price, discount) {
    // 1. Создается новый объект
    // 2. На этот обьект устанавливается ссылка this
    // 3. Функция возвращает новый оъект.
    this.brand = brand;
    this.price = price;
    this.discount = discount;
    /*  this.getPriceWithDiscounr = function() {
		return this.price * (100 - this.discount) / 100;
	}; */
}
const apple = new Product('apple', 100, 15);
const samsung = new Product('samsung', 200, 20);
//console.log(apple); Product {brand: "apple", price: 100, discount: 15, getPriceWithDiscounr: ƒ}
//console.log(samsung); Product {brand: "samsung", price: 200, discount: 20, getPriceWithDiscounr: ƒ}

// Class - Это некий собственный тип данныйх, который имеет набор свойств и методов для работы с экземплярами этого класса. Экземпляром класса считается любой обьект, поражденный от этого класса.
// Оператор instanceof позволяет проверить, к какому классу принадлежит объект, с учётом наследования.

// Prototipe - свойство объектов, которое содержит свойство и методы своих родителей и родителей родителей. Prototipe это обьект содержащий все теже свойства и методы. Он ест у любого объекта. 

// Запись в протопип 
Product.prototype.getPriceWithDiscounr = function () {
    return this.price * (100 - this.discount) / 100;
};

Product.prototype.setPrice = function (newPrice) {
    this.price = newPrice;
};

console.log(apple);
console.log(samsung);

//////////////////////////////////////////////////// Наследовае
// Наследование (англ. inheritance) — концепция объектно-ориентированного программирования, согласно которой абстрактный тип данных может наследовать данные и функциональность некоторого существующего типа, способствуя повторному использованию компонентов программного обеспечения.
// Метод Object.create() создаёт новый объект с указанным прототипом и свойствами.

const protoForObj = {
    sayHello() {
        return "Hello World";
    }
};

const obj = Object.create(protoForObj, {
    firstName: {
        value: 'Sergey'
    }
});

function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

User.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}+`;
};
User.prototype.sayHello = function () {
    return `Hello ${this.firstName} ${this.lastName}`;
};

// Customer
// JavaScript метод call() позволяет вызывать (выполнять) функцию как метод объекта, устанавливая ее контекст исполнения (this) в указанное значение, передавая при этом необходимые аргументы
// Метод apply() вызывает функцию с указанным значением this и аргументами, предоставленными в виде массива

const user = new User('Sergey', 'Lantcev');

function Customer(firstName, lastName, membership) {
    User.apply(this, arguments); // Функциональное наследование

    this.membership = membership; // Наполняем данный класс своими свойствами
}

Customer.prototype = Object.create(User.prototype); // Указываем с помощью метода Object.create класс от которого хотим наследоваться.
Customer.prototype.constructor = Customer; //При прототипном наследовании теряется сонктруктор, его нужно возврощать! Свои методы обьевляем после двух строчек.

Customer.prototype.getMembership = function () {
    return this.membership.toUpperCase();
}; // Создаем свои методы

const customer = new Customer('Sergey', 'Lantcev', 'basic');

//////////////////////////////////////////// ES6
// class - constructor необходимо обьявлять если наш класс принемает какие-то аргументы
const methodName = 'setNewPrice';
class ProductES {
    constructor(brand, price, discount) {
        this._brand = brand;
        this.price = price;
        this.discount = discount;
    }
    // методы обьявляются друг за другом
    getPriceWithDiscounr() {
        return this.price * (100 - this.discount) / 100;
    }

    get brand() {
        return this._brand;
    }

    set brand(name) {
        this._brand = name;
    }

    // вычисляемое свойство(метод)
    [methodName](newPrice) {
        this.price = newPrice;
    }
    setPrice(newPrice) {
        this.price = newPrice;
    }
    // Статические свойства и методы - Мы также можем присвоить метод самой функции-классу, а не её "prototype". Такие методы называются статическими. В классе такие методы обозначаются ключевым словом static. Метод доступен только на самом классе, а не на его экземплярах.
    static plus(x, y) {
        return x + y;
    }
}

const newProduct = new ProductES('Apple', 100, 15);

//////////////////////////////////////// Наследование ES6

class UserES {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(firstName, lastName) {
        return `${this.firstName} ${this.lastName}`;
    }
}

class CustomerES extends UserES {
    constructor(firstName, lastName, membership) {
        // для того чтобы унаследовать методы и свойства родительского класса (UserES), нужно вызвать super и передать туда те аргументы которы принемает родитель(UserES).
        super(firstName, lastName);
        // После этого можно определять свои методы.
        this.membership = membership;
    }

    getFullName() {
        // вызвали метод родителя , чтобы получить его фунционал
        const parentRes = super.getFullName();
        return `${parentRes}, membership: ${this.membership}`;
    }
}

const customerEs = new CustomerES('Sergey', 'Lantcev', 'basic');