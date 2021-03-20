//1 Зная структуру html, с помощью изученных методов получить (в консоль):
/* 1. head
2. body
3. все дочерние элементы body и вывести их в консоль.
4. первый div и все его дочерние узлы
а) вывести все дочерние узлы в консоль
б) вывести в консоль все дочерние узлы, кроме первого и последнего
Для навигации по DOM использовать методы, которые возвращают только элементы */

console.log(document.body);
console.log(document.body.children);
console.log(document.body.firstElementChild);
console.log(document.body.firstElementChild.children);

let div = document.body.firstElementChild;
let filter = [...div.children].filter(p => p !== div.firstElementChild && p !== div.lastElementChild);
console.log(filter);

// 2 Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:
// 1
const span = document.querySelector('span');
const spanParent = document.querySelector('.parent-1');
function isParents (parent, child) {
  return parent === child.parentElement;
}
console.log(isParents(spanParent, span));// true
// 2
function isParent(parent, child) {
    let isParent = false;
    let currentParent = child.parentElement;

    while(currentParent) {
      isParent = currentParent === parent;
      if (isParent) {
        currentParent = null;
      }else {
        currentParent = currentParent.parentElement;
      }
    }
    return isParent;
  }
  console.log(isParent(spanParent, span));

//3 Получить список всех ссылок, которые не находятся внутри списка ul.
let filter = [...document.links].filter(a => !a.closest('ul'));
console.log(filter);

//4 Найти элемент, который находится перед и после списка ul.
let ul = document.querySelector('ul');
let prev = ul.previousElementSibling;
let next = ul.nextElementSibling;


// Манипуляция дом элементами
// HomeWork №1
// 1. Найти параграф и получить его текстовое содержимое (только текст!)
const p = document.querySelector('p');
console.log(p.textContent);

// 2. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0).
function getNodeInfo(node) {
if (!(node instanceof Element)) return; // Оператор instanceof позволяет проверить, к какому классу принадлежит объект, с учётом наследования.Такая проверка может потребоваться во многих случаях. Здесь мы используем её для создания полиморфной функции, которая интерпретирует аргументы по-разному в зависимости от их типа.
  return {
    nodeType: node.nodeType,
    agName: node.tagName,
    childNodes: node.childNodes.length
  };
}

const info = getNodeInfo(p);
console.log(info);

// 3. Получить массив, который состоит из текстового содержимого ссылок внутри списка: getTextFromUl(ul) —-> ["Link1", "Link2", "Link3"]
const list = document.querySelector('ul');
function getTextFromUl(ul) {
  if (!(ul instanceof HTMLElement)) return;
    const [...links] = ul.querySelectorAll('a') || [];
        return links.map(a => a.textContent);
}

console.log(getTextFromUl(list));

// 4. В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться). Конечный результат: -text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-
const [...pChildNodes] = document.querySelector('p').childNodes;
pChildNodes.forEach(child => {
if (child.nodeType === 3) {
child.textContent = '-text-';
}
});

// HomeWork #2
// 1. Найти в коде список ul и добавить класс “list”
const ul = document.querySelector('ul');
ul.classList.add('list');

// 2. Найти в коде ссылку, находящуюся после списка ul, и добавить id=link
const link = document.querySelector('ul ~ a');
link.id = 'link';
console.log(link);

// 3. На li через один (начиная с самого первого) установить класс “item”
const [...allLi] = document.querySelectorAll('li');
  allLi.forEach((li, index) => {
    if (!(index % 2)) {
      i.classList.add('item');
  }
});

// 4. На все ссылки в примере установить класс “custom-link”
const [...links] = document.links;
links.forEach(link => link.classList.add('custom-link'));

// HomeWork #3
// 1. Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li: Вручную номер li не ставить оно должно подставляться в зависимости от кол-ва лишек в списке.
const list = document.querySelector('ul');
    // Текущее количество элементов в списке
    const currentCounts = list.children.length;
    // Количество новых элементов
    const newLiCounts = 3;

    for (let i = 0; i < newLiCounts; i++) {
      let li = document.createElement('li');
      li.classList.add('new-item');
      li.textContent = `item ${currentCounts + i + 1}`;
      list.appendChild(li);
    }
 
// 2. В каждую ссылку, которая находятся внутри списка ul добавить по тегу strong (в каждую ссылку один - strong).
const [...links] = document.querySelectorAll('ul a');
links.forEach(link => link.insertAdjacentHTML('beforeend', '<strong>Strong</strong>'));  

// 3. В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами). В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement.
const img = document.createElement('img');
      img.setAttribute('src', 'https://via.placeholder.com/150/92c952');
      img.setAttribute('alt', 'some image');
      document.body.insertAdjacentElement('afterbegin', img);

// 4. Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент установить класс green
const mark = document.querySelector('mark');
      mark.insertAdjacentText('beforeend', 'green');
      mark.classList.add('green');
 
// 5. Отсортировать li внутри списка в обратном порядке (по тексту внутри)
const list = document.querySelector('ul');
    // Сортируем массив элементов по текстовому содержимому
const listItems = [...list.children].sort((prev, next) => {
      return prev.textContent > next.textContent ? -1 : 1;
    });
    // Очищаем текущее содержимое списка
list.innerHTML = '';
    // Генерируем новое содержимое из отсортированного массива элементов
listItems.forEach((item) => list.appendChild(item));      