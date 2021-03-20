//* Создать объект, который описывает ширину и высоту прямоугольника, а также может посчитать площадь фигуры: const rectangle = {width:..., height:..., getSquare:...};
const rectangle = {
    width: 101,
    height: 101,
    getSquare() {
        return this.width * this.height;
    }
};
const square = rectangle.getSquare();
console.log(rectangle.getSquare);
console.log(square); //* 10201

//* Создать объект, у которого будет цена товара и его скидка, а также два метода: для получения цены и для расчета цены с учетом скидки:
const price = {
    price: 10,
    discount: '15%',
    getPrice: function () {
        return this.price;
    },
    getPriceWithDiscount: function () {
        return this.price - (this.price / 100) * parseInt(this.discount);
    },
};

console.log(price.getPrice());
console.log(price.getPriceWithDiscount());

//* Создать объект, у которого будет поле высота и метод “увеличить высоту на один”. Метод должен возвращать новую высоту: object.height = 10; object.inc(); // придумать свое название для метода object.height; // 11;
const findHeight = {
    height: 3,
    find() {
        this.height += 37;
        return this.height;
    }
};

const findOurHieght = findHeight.find();

console.log(findHeight.find);
console.log(findOurHieght); //* 40

//*Создать объект “вычислитель”, у которого есть числовое свойство “значение” и методы “удвоить”, “прибавить один”, “отнять один”. Методы можно вызывать через точку, образуя цепочку методов:
const numerator = {
    value: 2,
    double() {
        this.value *= 2;
        return this;
    },
    plusOne() {
        this.value += 1;
        return this;
    },
    minusOne() {
        this.value -= 1;
        return this;
    },
};

const decision = numerator.double().plusOne().minusOne().double();
console.log(decision); //* 8

//* Создать объект с розничной ценой и количеством продуктов. Этот объект должен содержать метод для получения общей стоимости всех товаров (цена * количество продуктов)
const prod = {
    price: 100,
    counts: 50,
    getTotalPrice() {
        return this.price * this.counts;
    }
}

//* Создать объект из предыдущей задачи. Создать второй объект, который описывает количество деталей и цену за одну деталь. Для второго объекта нужно узнать общую стоимость всех деталей, но нельзя создавать новые функции и методы. Для этого “позаимствуйте” метод из предыдущего объекта.
const anotherProd = {
    price: 20,
    counts: 10,
}
prod.getTotalPrice.call(anotherProd);

//* Даны объект и функция:
let sizes = {
        width: 5,
        height: 10
    },

    getSquare = function () {
        return this.width * this.height
    };
//* Не изменяя функцию или объект, получить результат функции getSquare для объекта sizes // -> call

getSquare.call(sizes);

//* Измените функцию getElementHeight таким образом, чтобы можно было вызвать getElementHeight() и получить 25.
let element = {
    height: 25,
    getHeight: function () {
        return this.height;
    }
};

let getElementHeight = element.getHeight;
getElementHeight(); // undefined
//*
let element = {
    height: 25,
    getHeight: function () {
        return this.height;
    }
};

let getElementHeight = element.getHeight.bind(element);

getElementHeight();