const BASE_URL = 'https://books-backend.p.goit.global';
const CATEGOTY_LIST_WAY = '/books/category-list';
const TOPBOOKS_WAY = '/books/top-books';
const CATEGORY_WAY = '/books/category';
const BYIDWAY = '/books/';

// Функція, що повертає массив з категоріями
export async function getCategotyList() {
  const categoryList = await fetch(`${BASE_URL}${CATEGOTY_LIST_WAY}`).then(
    resolve => resolve.json()
  );
  // console.log(categoryList);
  return categoryList;
}

// Функція, що повертає, массив об'єктів, які містять в собі назву категорії та массив 5-ти кращих книг.
export async function getBestBooks() {
  const topBooks = await fetch(`${BASE_URL}${TOPBOOKS_WAY}`).then(resolve =>
    resolve.json()
  );
  // console.log(topBooks);
  return topBooks;
}

// Функція, що повертає книги в зазначеній категорії.
export async function getCategory(categoryName) {
  const category = await fetch(
    `${BASE_URL}${CATEGORY_WAY}?category=${categoryName}`
  ).then(resolve => resolve.json());
  // console.log(category);
  return category;
}

// Функція, що повертає книгу по ID.
export async function getBookById(id) {
  const book = await fetch(`${BASE_URL}${BYIDWAY}/${id}`).then(resolve =>
    resolve.json()
  );
  // console.log(book);
  return book;
}
