import {onClickCategory} from './renderSelectCategory';
import {getBookById} from './bookAPI';
const contRef = document.querySelector(`.category-list-cont`);
const closeBtn = document.querySelector('.modal-close');
const modalWindow = document.querySelector('.modal');


const refs = {
        modalImage: document.querySelector('.modal-image'),
        modalTitle: document.querySelector('.modal-title'),
        modalAuthor: document.querySelector('.modal-author'),
        modalDescription: document.querySelector('.modal-description'),
        modal1: document.querySelector('.modal-amazon-link'),
        modal2: document.querySelector('.modal-apple-link'),
        modal3: document.querySelector('.modal-shop-link'),
        modalButton: document.querySelector('.modal-button'),
        afterButton: document.querySelector('.after-button')
    }
    
const storageKey = 'shoppingList';

export function modalShow() {
  const refLi = document.querySelectorAll('.category-item');
  refLi.forEach(element => {
    element.addEventListener('click', elem => {
      clearModal();
      const elId = elem.currentTarget.dataset.id;
      getBookById(elId).then(resp => {
        refs.modalAuthor.textContent = resp.author;
        refs.modalTitle.textContent = resp.title;
        refs.modalDescription.textContent = resp.description;
        refs.modalImage.setAttribute('src', resp.book_image);
        refs.modal1.setAttribute('href', resp.buy_links[0].url);
        refs.modal2.setAttribute('href', resp.buy_links[1].url);
        refs.modal3.setAttribute('href', resp.buy_links[4].url);

                const shoppingList = JSON.parse(localStorage.getItem(storageKey)) || [];
        const bookIndex = shoppingList.findIndex(item => item.title === resp.title);

        if (bookIndex === -1) {
          refs.modalButton.textContent = 'Add to shopping list';
          refs.afterButton.textContent = '';
        } else {
          refs.modalButton.textContent = 'Remove from the shopping list';
          refs.afterButton.textContent =
            'Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".';
        }
      });

      openModal();
      document.addEventListener('keydown', onEscape);
    });
  });
}

function closeModal() {
modalWindow.classList.add('visually-hidden')
document.body.classList.remove('locked')
modalWindow.removeEventListener('click', backDropClick)
}

function openModal() {
    modalWindow.classList.remove('visually-hidden')
    document.body.classList.add('locked')
    modalWindow.addEventListener('click', backDropClick);
}

function backDropClick(e) {
    if (e.target === modalWindow) {
      closeModal();
    }
    
}

function onEscape(event) {
    if (event.code === 'Escape') {
       closeModal()
       document.removeEventListener('keydown', onEscape)
    }}

function clearModal() {
    refs.modalAuthor.textContent = '';
    refs.modalTitle.textContent = '';
    refs.modalDescription.textContent = '';
    refs.modalImage.setAttribute('src', '');
    refs.modal1.setAttribute('href', '');
    refs.modal2.setAttribute('href', '');
    refs.modal3.setAttribute('href', '');
  }


closeBtn.addEventListener('click', closeModal);
refs.modalButton.addEventListener('click', buttonChange);

function buttonChange() {
  const bookData = {
    author: refs.modalAuthor.textContent,
    title: refs.modalTitle.textContent,
    description: refs.modalDescription.textContent,
    book_image: refs.modalImage.getAttribute('src'),
    buy_links: [
      { url: refs.modal1.getAttribute('href') },
      { url: refs.modal2.getAttribute('href') },
      { url: refs.modal3.getAttribute('href') }
    ]
  };

  const shoppingList = JSON.parse(localStorage.getItem(storageKey)) || [];
  const bookIndex = shoppingList.findIndex(item => item.title === bookData.title);

  if (bookIndex === -1) {
    shoppingList.push(bookData);
    localStorage.setItem(storageKey, JSON.stringify(shoppingList));
    refs.modalButton.textContent = 'Remove from the shopping list';
    refs.afterButton.textContent =
      'Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".';
  } else {
    shoppingList.splice(bookIndex, 1);
    localStorage.setItem(storageKey, JSON.stringify(shoppingList));
    refs.modalButton.textContent = 'Add to shopping list';
    refs.afterButton.textContent = '';
  }
}