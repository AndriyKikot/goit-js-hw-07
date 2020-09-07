"use strict";

// Напиши скрипт, который реагирует на изменение значения input#font-size-control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

inputRef.addEventListener('input', handleInputChange);

inputRef.setAttribute('min', '10');

function handleInputChange() {
    spanRef.style.fontSize = `${event.target.value}px`;
};