/*Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое
на правильное количество символов.*/

/*- Сколько символов должно быть в инпуте, указывается в его атрибуте
  `data-length`.
- Если введено подходящее количество, то `border` инпута становится зеленым,
  если неправильное - красным.

Для добавления стилей, используй CSS-классы `valid` и `invalid`.*/

const inputContent = document.getElementById('validation-input');

const contentLength = parseInt(inputContent.dataset.length);


const countOfSymbols = ()=> {
    if (inputContent.value.length === contentLength) {
    inputContent.classList.add('valid');
    inputContent.classList.remove('invalid');
  }
    else {
      inputContent.classList.add('invalid');
      inputContent.classList.remove('valid');
  }
}

inputContent.addEventListener('blur', countOfSymbols);




