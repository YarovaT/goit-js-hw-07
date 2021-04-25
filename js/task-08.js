/*Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит
количество элементов в `input` и нажимает кнопку `Создать`, после чего
рендерится коллекция. При нажатии на кнопку `Очистить`, коллекция элементов
очищается.

Создай функцию `createBoxes(amount)`, которая принимает 1 параметр `amount` -
число. Функция создает столько `div`, сколько указано в `amount` и добавляет их
в `div#boxes`.

Каждый созданный div:

- Имеет случайный rgb цвет фона
- Размеры самого первого div - 30px на 30px
- Каждый следующий div после первого, должен быть шире и выше предыдущего на
  10px

Создай функцию `destroyBoxes()`, которая очищает `div#boxes`.*/

const refs = {
  createBtn: document.querySelector('[data-action="render"]'),
  cleanBtn: document.querySelector('[data-action="destroy"]'),
  inputRef: document.querySelector('#controls input'),
  container: document.querySelector('#boxes'),
}

refs.createBtn.addEventListener('click', getAmountBoxes);
refs.cleanBtn.addEventListener('click', removeBoxes);

function getAmountBoxes() {
  let amount = refs.inputRef.value;
  createBoxes(amount);
}

function createBoxes(amount) {
  const defaultSize = 30;
 
  for (let i = 0; i < amount; i+=1) {
    let size = defaultSize + i * 10;
    let boxEl = document.createElement('div');
    boxEl.style.cssText = `width: ${size}px; height: ${size}px; background: rgb( ${randomBgrColor()} , ${randomBgrColor()} , ${randomBgrColor()} )`;
   
    refs.container.append(boxEl);
  }
  
}


function randomBgrColor() {
  return Math.floor(Math.random() * 256);
}

function removeBoxes() {
  refs.container.innerHTML = '';
}
