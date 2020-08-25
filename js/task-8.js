"use strict";

// Напиши скрипт создания и очистки коллекции элементов.Пользователь вводит количество элементов в input
// и нажимает кнопку Создать, после чего рендерится коллекция.При нажатии на кнопку Очистить,
// коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const renderBtnRef = document.querySelector("[data-action = render]");
const destroyBtnRef = document.querySelector("[data-action = destroy]");
const boxesRef = document.getElementById("boxes");

renderBtnRef.addEventListener("click", renderAmountHandler);
destroyBtnRef.addEventListener("click", destroyCollectionHandler);

function createBoxes(amount) {
    const newDiv = document.createDocumentFragment();

    for (let i = 0; i < amount; i++) {
        let boxSize = 30;
        const size = boxSize + i * 10;
        const box = createDiv(size);
        newDiv.appendChild(box);
    }
    boxesRef.appendChild(newDiv);
}

const createDiv = (size) => {
    const div = document.createElement("div");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = randomColorHandler();

    return div;
};

function randomColorHandler() {
    const color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    return "#" + color;
}

function renderAmountHandler() {
    const amount = document.querySelector("#controls input").value;
    createBoxes(amount);
}

function destroyCollectionHandler() {
    boxesRef.innerHTML = "";
}

