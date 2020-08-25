"use strict";

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];


const listIngredientsRef = document.querySelector('#ingredients');

const ingredientListItem = ingredients.map(ingredient => {

    const listItemRef = document.createElement('li');
    listItemRef.textContent = ingredient;
    return listItemRef
})

listIngredientsRef.append(...ingredientListItem);




