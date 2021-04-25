// *Напиши скрипт, который выполнит следующие операции.
// *Посчитает и выведет в консоль количество категорий в `ul#categories`, то есть
// *элементов `li.item`. Получится `'В списке 3 категории.'`.
// *Для каждого элемента `li.item` в списке `ul#categories`, найдет и выведет в
// *консоль текст заголовка элемента (тега h2) и количество элементов в категории
// *всех вложенных в него элементов `li`).
// *Например для первой категории получится:
// *- Категория: Животные
// *- Количество элементов: 4

const listRef = document.querySelector('#categories');
// console.log(listRef);
const listItemsRef = listRef.querySelectorAll('li.item');
// console.log(listItemsRef);
console.log(`В списке ${listItemsRef.length} категории.`);

const countItemsRef = (items) => {
    items.forEach(item => {
        const titleRef = item.querySelector('h2');
        console.log(`Категория: ${titleRef.textContent}`);
        const itemRef = item.querySelectorAll('li');
        console.log(`Количество элементов: ${itemRef.length}`);
    })
};

countItemsRef(listItemsRef);



