import { getCategory } from './bookAPI';
import "../css/renderSelectCategory.css";
const contRef = document.querySelector(`.category-list-cont`);


export function onClickCategory(category) {
    getCategory(category).then(response => {

        renderCategory(getMarkCategory(response));

    }).catch(console.log);
}



function renderCategory(mark) {

    contRef.innerHTML = mark;
}


function getMarkCategory(array) {

    const categoryName = markLastWord(array[0].list_name);
    const title = `<h2 class="title-category-list">${categoryName}</h2>`;
    const elements = array.map(book => {
        return `<li class="category-item" data-id="${book._id}">
        <img class="category-item-img" src="${book.book_image} "/>
        <p class="category-item-title">${book.title}</p>
        <p class="category-item-author">${book.author}</p>
        </li>`
    }).join("");
    const result = `<div class="container select-category-cont">${title}<ul class="category-list">${elements}</ul></div>`
    return result;
}




function markLastWord(string) {
    const categoryName = string.split(' ');
    const quantityWord = categoryName.length;
    let categoryNameAddSpan = "";
    if (quantityWord > 1) {
        for (let i = 0; i <= quantityWord - 2; i += 1) {
            categoryNameAddSpan += " " + categoryName[i];
        }
        categoryNameAddSpan += " " + `<span class=last-word-catteg-item>${categoryName[quantityWord - 1]}<span>`;
    } else {
        categoryNameAddSpan = `<span class=last-word-catteg-item>${categoryName[0]}<span>`;
    }
    return categoryNameAddSpan;
}