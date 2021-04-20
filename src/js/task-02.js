/*Напиши скрипт, который для каждого элемента массива `ingredients` создаст
отдельный `li`, после чего вставит все `li` за одну операцию в список
`ul.ingredients`. Для создания DOM-узлов используй `document.createElement()`.*/


const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsContainerRef = document.querySelector('#ingredients');

const makeListIngredients = ingredients => {
  return ingredients.map(ingredient => {
    const itemRef = document.createElement('li');
    itemRef.textContent = ingredient;
    
    return itemRef;
  });
};

const elements = makeListIngredients(ingredients);
ingredientsContainerRef.append(...elements);