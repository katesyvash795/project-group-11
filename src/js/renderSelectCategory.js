import { getCategory } from './bookAPI';
import "../css/renderSelectCategory.css";
const contRef = document.querySelector(`.category-list`);


export function onClickCategory(category) {
    getCategory(category).then(response => {

        renderCategory(getMarkCategory(response));

    }).catch(console.log);
}



function renderCategory(mark) {

    contRef.innerHTML = mark;
}


function getMarkCategory(array) {
    return array.map(book => {
        return `<li class="category-item" data-id="${book._id}">
        <img class="category-item-img" src="${book.book_image} "/>
        <p class="category-item-title">${book.title}</p>
        <p class="category-item-author">${book.author}</p>
        </li>`
    }).join("");
}

