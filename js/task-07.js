/*Напиши скрипт, который реагирует на изменение значения `input#font-size-control`
(событие input) и изменяет инлайн-стиль `span#text` обновляя свойство
`font-size`. В результате при перетаскивании ползунка будет меняться размер
текста.*/

const inputEvent = document.querySelector('#font-size-control');
// console.dir(inputEvent);
const textStyle = document.querySelector('#text');
// console.dir(textStyle);

inputEvent.addEventListener('input', changeTextSize);

function changeTextSize() {    
    textStyle.style.fontSize = inputEvent.value + "px";
}
