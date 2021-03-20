// css variables
window.getComputedStyle(document.documentElement).getPropertyValue('--box-bg-black');// black
window.getComputedStyle(document.body).getPropertyValue('--box-bg-black');// black
// Метод Window.getComputedStyle() возвращает объект, содержащий значения всех CSS-свойств элемента, полученных после применения всех активных таблиц стилей, и завершения базовых вычислений значений, которые они могут содержать. Некоторые CSS-свойства доступны через API, предоставляемые объектом, или индексацию по именам CSS-свойств.
document.body.style.setProperty("--box-bg-green","red");
// Интерфейс CSSStyleDeclaration.setProperty()метода устанавливает новое значение для свойства объекта объявления стиля CSS.
document.querySelector(".box").style.setProperty('--box-bg-green', 'yellow');// изменение свойств css