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
    
export function modalShow() {
const refLi = document.querySelectorAll('.category-item');
refLi.forEach(element => {
    element.addEventListener('click', elem => {
        clearModal()
        const elId = elem.currentTarget.dataset.id;
    getBookById(elId).then(resp => {
        refs.modalAuthor.textContent = resp.author;
        refs.modalTitle.textContent = resp.title;
        refs.modalDescription.textContent = resp.description;
        refs.modalImage.setAttribute('src', resp.book_image);
        refs.modal1.setAttribute('href', resp.buy_links[0].url);
        refs.modal2.setAttribute('href', resp.buy_links[1].url);
        refs.modal3.setAttribute('href', resp.buy_links[4].url);
    })
    openModal()
    document.addEventListener('keydown', onEscape)
});
})}

function closeModal() {
modalWindow.classList.add('visually-hidden')
document.body.classList.remove('locked')

}

function openModal() {
    modalWindow.classList.remove('visually-hidden')
    document.body.classList.add('locked')
}

function backDropClick(e) {
    if (e.target === modalWindow) {
      closeModal();
    }
    modalWindow.removeEventListener('click', backDropClick)
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

modalWindow.addEventListener('click', backDropClick);
closeBtn.addEventListener('click', closeModal);
refs.modalButton.addEventListener('click', buttonChange);

  function buttonChange() {
    if (refs.modalButton.textContent === 'Add to shopping list') {
        refs.modalButton.textContent = 'Remove from the shopping list';
        refs.afterButton.textContent = 'Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".'
    } else {refs.modalButton.textContent = 'Add to shopping list';
    refs.afterButton.textContent = ''}
  }