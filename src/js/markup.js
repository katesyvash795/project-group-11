import { getBestBooks} from './bookAPI';
import "../css/renderSelectCategory.css";
import "../css/homePage.css";

const homeContainer = document.querySelector(`.category-list-cont`);


export function onClickCategory(books) {
    getBestBooks(top-books)
      .then(response => {
        renderBooks(getMarkBestBooks(response));
      })
      .catch(console.log);
}



function renderBooks(mark) {

    homeContainer.innerHTML = mark;
}


function getMarkBestBooks(array) {

    const bestName = markLastWord(array[0].list_name);
    const title = `<h2 class="title-category-list">${bestName}</h2>`;
    const elements = array.map(book => {
        return `<li class="category-item" data-id="${book._id}">
        <img class="category-item-img" src="${book.book_image} "/>
        <p class="category-item-title">${book.title}</p>
        <p class="category-item-author">${book.author}</p>
        <button class="books-btn" type="button" data-id="${elements.list_name}">see more</button>
        </li>`;
    }).join("");
    return title + `<ul class="category-list">${elements}</ul>`;
}




function markLastWord(string) {
    const bestName = string.split(' ');
    const quantityWord = bestName.length;
    let categoryNameAddSpan = "";
    if (quantityWord > 1) {
        for (let i = 0; i <= quantityWord - 2; i += 1) {
            categoryNameAddSpan += " " + categoryName[i];
        }
        categoryNameAddSpan += " " + `<span class=last-word-catteg-item>${bestName[quantityWord - 1]}<span>`;
    } else {
        categoryNameAddSpan = `<span class=last-word-catteg-item>${bestName[0]}<span>`;
    }
    return categoryNameAddSpan;
}