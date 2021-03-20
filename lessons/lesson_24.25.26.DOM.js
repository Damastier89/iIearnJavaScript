const div = document.querySelector('div'); //* Document метод querySelector() возвращает первый элемент (Element) документа, который соответствует указанному селектору или группе селекторов. Если совпадений не найдено, возвращает значение null.
const titles = document.querySelectorAll('h1'); //* Метод querySelectorAll() Document возвращает статический (не динамический) NodeList, содержащий все найденные элементы документа, которые соответствуют указанному селектору.
const h1 = document.getElementsByTagName('h1'); //* Element.getElementsByTagName() метод возвращает живую коллекцию элементов HTMLCollection , учитывая имя тэга. Поиск осуществляется в поддереве указанного элемента, в результат поиска не попадает сам элемент, в поддереве которого осуществлялся поиск. Возвращает живой список, который автоматически обновляется при изменении DOM. Поэтому не нужно вызывать метод Element.getElementsByTagName() несколько раз с одними и теми же аргументами, содержимое списка обновляется автоматически.
// console.dir(h1);
// console.log(titles);
// console.log(Array.from(titles));
// console.log(Array.prototype.slice.call(titles));
// console.log([...titles]);

//! lesson 25 Работа с атрибутами элементов
// console.log(div.parentElement);//* Свойство Node.parentElement только для чтения, возвращает родителя узла DOM Element, или null если узел не имеет родителя, или его родитель не DOM Element.(Возврящает прямого родителя)
// console.log(div.parentNode);//* Возвращает родителя определенного элемента DOM дерева.

const link = div.querySelector('.link');
// console.log(link.parentElement);
// console.log(link.closest('.content'));//* Метод Element.closest() возвращает ближайший родительский элемент (или сам элемент), который соответствует заданному CSS-селектору или null, если таковых элементов вообще нет.

div.classList.add('article', 'custom'); //*Свойство classList возвращает псевдомассив DOMTokenList, содержащий все классы элемента.(add - добавляет класс(ы))
div.classList.remove('article'); //* удалить класс(ы)
div.classList.contains('custom'); //* поиск класса у элемента
div.classList.toggle("toggle"); //* позволяет переключать классы, если его нет , то будет добавлен, если есть , удалён
// console.dir(link.href);

div.setAttribute('id', 'myId'); //* устанавливает значение атрибута
div.removeAttribute("id"); //* удаляет атрибут
div.getAttribute("id"); //* получает значение атрибута
div.hasAttribute("id"); //* проверяет наличие атрибута

div.dataset //* Свойство HTMLElement.dataset предоставляет доступ как для чтения, так и для изменения всех пользовательских дата-атрибутов custom data attributes (data-*) , установленных у элемента.

//! lesson 26 Манипуляция DOM элементами

const title = document.querySelector('h1');
title.innerHTML = '<span>JS</span>';  //* Свойство интерфейса Element innerHTML устанавливает или получает HTML или XML разметку дочерних элементов. (Удаляет ссылки - пользоваться аккуратно)
title.textContent = 'New Titles'; //* Позволяет задавать или получать текстовое содержимое элемента и его потомков.
title.appendChild(); //* Node.appendChild() добавляет узел в конец списка дочерних элементов указанного родительского узла. Если данный дочерний элемент является ссылкой на существующий узел в документе, то функция appendChild() перемещает его из текущей позиции в новую позицию (нет необходимости удалять узел из родительского узла перед добавлением его к какому-либо другому узлу).
title.insertAdjacentHTML('beforebegin', "<h2> beforebeginTitlesH2 </h2>"); //* insertAdjacentHTML() разбирает указанный текст как HTML или XML и вставляет полученные узлы (nodes) в DOM дерево в указанную позицию. Данная функция не переписывает имеющиеся элементы, что предотвращает дополнительную сериализацию и поэтому работает быстрее, чем манипуляции с innerHTML.
title.insertAdjacentElement();

//* Создание и добавление элемента

const span = document.createElement('span'); //* В HTML-документах создает элемент c тем тегом, что указан в аргументе или HTMLUnknownElement, если имя тега не распознаётся.(Не добавляется на страницу, существуеи внутри JS)
span.textContent = ' Span created by createdElement';
span.classList.add("myClass");
title.appendChild(span);
/* div.appendChild(span);  */ //* DOM узлы могут быть только в одном экземпляре.

const fragment = document.createDocumentFragment(); //* Создает новый пустой DocumentFragment. DOM - узел, .
const colors = ['red', 'yellow', 'orange'];
colors.forEach((color) => {
    const item = document.createElement('div');
    item.classList.add(`bg-${color}`);
    item.style.background = color;
    item.textContent = color;
    fragment.appendChild(item);
});

document.body.appendChild(fragment);

//* Удаление элементов
title.remove(); //* Метод Node.remove() удаляет узел из дерева DOM
title.parentElement.removeChild(title); //* удаляет узел из дерева DOM