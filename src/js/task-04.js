/*Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать
значение счетчика на `1`.

- Создай переменную `counterValue` в которой будет хранится текущее значение
  счетчика.
- Создай функции `increment` и `decrement` для увеличения и уменьшения значения
  счетчика
- Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса*/


const btn = {
  value: document.querySelector('#value'),
  increment: document.querySelector('[data-action="increment"]'),
  decrement: document.querySelector('[data-action="decrement"]'),
}

let counterValue = 0;
const incrementRef = () => {
  counterValue += 1;

 btn.value.textContent = counterValue;
};

const decrementRef = () => {
  counterValue -= 1;

  btn.value.textContent = counterValue;
};

btn.increment.addEventListener("click", incrementRef);
btn.decrement.addEventListener("click", decrementRef);





