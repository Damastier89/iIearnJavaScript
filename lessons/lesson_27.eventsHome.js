// Chapter One
// 1. По нажатию на кнопку "btn-msg" должен появиться алерт с тем текстом который находится в атрибуте data-text у кнопки.
const btn = document.getElementById('btn-msg');
    btn.addEventListener('click', (e) => {
    //   alert(e.target.dataset.text);
    // или если элемент один можно обратится к нему
    //   alert(btn.dataset.text);
    // так же внутри обработчика события через this мы имеем доступ к элементу на который повешено событие
    //   alert(this.dataset.text);
    // или через currentTarget
        alert(e.currentTarget.dataset.text);
    });

// 2. При наведении указателя мыши на "btn-msg", кнопка становится красной; когда указатель мыши покидает кнопку, она становится прежнего цвета. Цвет менять можно через добавление класса.   
const btn = document.getElementById('btn-msg');
    // У событий mouseover и mouseout есть аналоги mouseenter/mouseleave
    btn.addEventListener('mouseover', (e) => {
      btn.classList.add('bg-red');
    });
    btn.addEventListener('mouseout', (e) => {
      btn.classList.remove('bg-red');
    });

// 3. При нажатии на любой узел документа показать в элементе с id=tag имя тега нажатого элемента.     
const tagTextContainer = document.getElementById('tag');
        document.body.addEventListener('click', (event) => {
        tagTextContainer.textContent = `Tag: ${event.target.nodeName}`;
    });

// 4. При нажатии на кнопку btn-generate добавлять в список ul элемент списка Li с текстом Item + порядковый номер Li по списку, т.е Item 3, Item 4 и т.д
const generateBtn = document.getElementById('btn-generate');
const list = document.querySelector('ul');

function generateNewItem(e) {
  // получаем текущее количество элементов в списке
  const num = list.children.length + 1;
  const text = `Item ${num}`;
  const li = document.createElement('li');
  li.textContent = text;

  list.appendChild(li);
}

generateBtn.addEventListener('click', generateNewItem);   

// Chapter Two
// 1. Реализовать примитивный дропдаун. Изначально все dropdown-menu скрыты через класс .d-none. При клике на dropdown-item должен отображаться блок dropdown-menu который вложен именно в тот dropdown-item на котором произошел клик. При повторном клике на этот же dropdown-item блок dropdown-menu должен закрыться. При клике на любой другой dropdown-item уже открытый dropdown-menu должен закрываться а на тот который кликнули открываться.

const dropdownItems = document.querySelectorAll('.dropdown-item');
    // В данной переменной мы будем хранить текущее открытое меню
    let currentOpenedMenu = null;

    function toggleDropdownMenu(e) {
      // получаем блок меню внутри .dropdown-item
      const menu = e.currentTarget.querySelector('.dropdown-menu');
      // метод toggle возвращает булевое значение, если клас удален то вернет false а если добавлен то true. Это значение мы сохраняем в переменную
      const isAdded = menu.classList.toggle('d-none');
      // если в currentOpenedMenu уже есть блок и он не равен текущем menu то мы его скрываем
      if (currentOpenedMenu && currentOpenedMenu !== menu) {
        currentOpenedMenu.classList.add('d-none');
      }
      // Если класс d-none был удален то значет меню видимо и мы его сохраняем в переменную currentOpenedMenu
      if (!isAdded) {
        currentOpenedMenu = menu;
      }
    }

    dropdownItems.forEach(d => d.addEventListener('click', toggleDropdownMenu));

// Chapter three
// 1. При наведении на любой из блоков с классом .box все его дочерние элементы должны поменять свой фон на один из списка. ВАЖНО, только дочерние относительно блока на который навели мышь. Вот массив (список) рандомных цветов ['red', 'blue', 'olive', 'orange', 'pink', 'yellow', 'green', 'gray', 'aqua', 'brown']; 
//2. Возращаете фон обратно когда пользователь уводит мышку с блока.
//3. Добавление фона из первой части задания сделать с задержкой в 200мс. Т.е каждый последующий блок должен изменить свой фон за 200мс позже предыдущего. Например если первый блок поменял через 200мс то следующий должен поменять через 400 и т.д.    
function setRandomColor(el) {
  const colors = ['red', 'blue', 'olive', 'orange', 'pink', 'yellow', 'green', 'gray', 'aqua', 'brown'];
  // Выбираем произвольный цвет из массива
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  el.style.background = randomColor;
}

function resetColor(el) {
  el.style.background = '';
}

function onBoxHover(e) {
  // Создаем массив элементов которые будут менять фон.
  let elements = [e.currentTarget];
  let currentEl = e.currentTarget;
  // Проходимся циклом по всем дочерним элементам до самого последнего
  while (currentEl) {
    elements = [...elements, ...currentEl.children];
    currentEl = currentEl.children[currentEl.children.length - 1];
  }
  // Перебираем сформированный массив и устанавливаем на каждый элемент цвет в таймауте
  elements.forEach((el, index) => setTimeout(setRandomColor, 200 * (index + 1), el));
}

function onMouseLeave(e) {
  resetColor(e.currentTarget);
}

document.querySelectorAll('.box').forEach(box => box.addEventListener('mouseenter', onBoxHover));
document.querySelectorAll('.box').forEach(box => box.addEventListener('mouseleave', onMouseLeave));
