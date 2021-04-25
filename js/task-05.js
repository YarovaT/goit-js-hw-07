/*Напиши скрипт который, при наборе текста в инпуте `input#name-input` (событие
input), подставляет его текущее значение в `span#name-output`. Если инпут
пустой, в спане должна отображаться строка `'незнакомец'`.*/

const inputEvent = document.querySelector('#name-input');
// console.dir(inputEvent);
const nameInput = document.querySelector('#name-output');
// console.log(nameInput.textContent);

inputEvent.addEventListener('input', onInputName);

function onInputName(name) {

    if (inputEvent.value === '') {
        nameInput.textContent ='незнакомец';
    }
    else (nameInput.textContent = name.currentTarget.value);  
   
}


