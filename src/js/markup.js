import { getBestBooks } from './bookAPI';
import '../css/renderSelectCategory.css';
import '../css/homePage.css';

const homeContainer = document.querySelector(`.category-list-cont`);

// const contRef = document.querySelector(`.category-list-cont`);

export function onClickCategory() {
  getBestBooks()
    .then(response => {
      renderBooks(getMarkBestBooks(response));
    })
    .catch(console.log);
}

function renderBooks(mark) {
  homeContainer.innerHTML = mark;
}

// function getMarkBestBooks(array) {
//   const bestBookName = markLastWord(array[0].list_name);
  
//   const title = `<h2 class="title-category-list">${bestBookName}</h2>`;
//   const elements = array
//     .map(book => {
//       return `<li class="category-item" data-id="${book._id}">
//         <img class="category-item-img" src="${book.book_image} "/>
//         <p class="category-item-title">${book.title}</p>
//         <p class="category-item-author">${book.author}</p>
//              <button class="books-btn" type="button" data-id="${book.list-name}">see more</button>
//         </li>`;
//     })
//     .join('');
//   return title + `<ul class="category-list">${elements}</ul>`;
// }

 

function getMarkBestBooks(array) {
  const bestBookName = markLastWord(array[0].list_name);

  const title = `<h2 class="title-category-list">${bestBookName}</h2>`;
  const elements = array
    .map(book => {
      return `  <ul class="books__container">
         <li class="category-item" data-id="${book._id
        }">
        <img class="category-item-img" src="${book.book_image} "/>
        <p class="category-item-title">${book.title}</p>
         <p class="category-item-author">${book.author}</p>
              <button class="books-btn" type="button" data-id="${book.list - name
        }">see more</button>
         </li>`; 
      
   
    })
    .join('')
  //   return title + `<ul class="category-list">${elements}</ul>`;
}

function markLastWord(string) {
  const categoryName = string.split(' ');
  const quantityWord = categoryName.length;
  let categoryNameAddSpan = '';
  if (quantityWord > 1) {
    for (let i = 0; i <= quantityWord - 2; i += 1) {
      categoryNameAddSpan += ' ' + categoryName[i];
    }
    categoryNameAddSpan +=
      ' ' +
      `<span class=last-word-catteg-item>${
        bestBookName[quantityWord - 1]
      }<span>`;
  } else {
    categoryNameAddSpan = `<span class=last-word-catteg-item>${bestBookName[0]}<span>`;
  }
  return categoryNameAddSpan;
}
