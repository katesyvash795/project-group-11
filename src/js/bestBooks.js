import { getBestBooks } from './bookAPI';
const homeContainer = document.querySelector(`.category-list-cont`);

function renderBooks(mark) {
  homeContainer.innerHTML = mark;
}

function renderBookCard(book) {
  const { list_name, books } = book;

  const title = `<h2 class="title-category-list">${list_name}</h2>`;
  const elements = books
    .map(book => {
      return `
        <li class="category-item" data-id="${book._id}">
          <img class="category-item-img" src="${book.book_image}"/>
          <h2 class="category-item-title">${book.title}</h2>
          <p class="category-item-author">${book.author}</p>
        </li>
      `;
    })
    .join('');

    const seeMoreButton = `<button class="books-btn" type="button" data-id="${list_name}">See more</button>`;

  return title + `<ul class="category-list">${elements}</ul>` + seeMoreButton;
}

renderCategory();

function renderCategory() {
  getBestBooks()
    .then(response => {
      const markup = response.map(renderBookCard).join('');
      renderBooks(markup);
    })
    .catch(error => {
      console.log('Помилка при отриманні даних з сервера:', error);
    });
}