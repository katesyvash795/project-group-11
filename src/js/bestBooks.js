import { getBestBooks } from './bookAPI';
import { markLastWord, onClickCategory } from './renderSelectCategory';
const homeContainer = document.querySelector(`.category-list-cont`);


function renderBooks(mark) {
  homeContainer.innerHTML = mark;
}

function renderBookCard(book) {
  const { list_name, books } = book;

  const title = `<h3 class="best-title-category-list">${list_name}</h3>`;
  const elements = books
    .map(book => {
      return `
        <li class="best-book-item" data-id="${book._id}">
          <img class="best-book-item-img" src="${book.book_image}"/>
          <h2 class="best-book-item-title">${book.title}</h2>
          <p class="best-book-item-author">${book.author}</p>
        </li>
      `;
    })
    .join('');

  const seeMoreButton = `<button class="seemore-btn" type="button" data-id="${list_name}">See more</button>`;
  const result = `<li class="best-category-item">${title}<ul class="best-book-list">${elements}</ul>${seeMoreButton}</li>`;
  return result;
}

renderCategory();

function renderCategory() {
  
  getBestBooks()
    .then(response => {
      // loader.style.display = 'block';
      const markup = `<div class="container best-category-cont"><h2 class="best-title-section title-category-list">
      ${markLastWord("Best Sellers Books")}</h2><ul class="best-category-list">${response.map(renderBookCard).join('')}</ul></div>`;
      renderBooks(markup);
      loader.style.display = 'none';
    })
    .catch(error => {
      console.log('Помилка при отриманні даних з сервера:', error);
    });
}


homeContainer.addEventListener('click', event => {
  if (event.target.nodeName === "BUTTON") {
    onClickCategory(event.target.dataset.id);

  }
})