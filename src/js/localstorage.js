const localStorageBtn = document.querySelector('.local-storage');

localStorageBtn.addEventListener('click', handleraddLs);

const BOOK_LS_KEY = 'book';

function handleraddLs() {
  if (!evt.target.classList.contains('js-add')) {
    return;
  }
  const books = JSON.parse(localStorage.getItem(BOOK_LS_KEY)) ?? [];
  const book = evt.target.closest('js-product');
  const bookId = Number(book.dataset.id);
  const currenBook = books.find(({ id }) => id === bookId);
  book.push(currenBook);
  localStorage.setItem(BOOK_LS_KEY, JSON.stringify(books));
}
