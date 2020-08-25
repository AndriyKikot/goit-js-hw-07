"use strict";

// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories,
// то есть элементов li.item.Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories,
// найдет и выведет в консоль текст заголовка элемента(тега h2)
// и количество элементов в категории(всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

console.group('Task-1');

const itemCategoriesRef = document.querySelectorAll('.item');

console.log(`В списке ${itemCategoriesRef.length} категории.`);

const categoriesListItemsRef = itemCategoriesRef.forEach(element => {
    console.log(
        `Категория: ${element.querySelector('h2').textContent}
Количество элементов: ${element.querySelectorAll('li').length}`)
});

console.groupEnd();