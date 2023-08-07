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
        modal3: document.querySelector('.modal-shop-link')
    }
    
export function modalShow() {
const refLi = document.querySelectorAll('.category-item');

refLi.forEach(element => {
    element.addEventListener('click', elem => {
        const elId = elem.currentTarget.dataset.id;
    getBookById(elId).then(resp => {
        // console.log(resp)
        refs.modalAuthor.textContent = resp.author;
        refs.modalTitle.textContent = resp.title;
        refs.modalDescription.textContent = resp.description;
        refs.modalImage.setAttribute('src', resp.book_image);
        refs.modal1.setAttribute('href', resp.buy_links[0].url);
        refs.modal2.setAttribute('href', resp.buy_links[1].url);
        refs.modal3.setAttribute('href', resp.buy_links[4].url);
    })
    console.log(refs.modalAuthor.textContent);
    openModal()
    document.addEventListener('keydown', onEscape)
function onEscape(event) {
 if (event.code === 'Escape') {
    closeModal()
    document.removeEventListener('keydown', onEscape)
 }}});
})}

closeBtn.addEventListener('click', closeModal)

function closeModal() {
modalWindow.classList.add('visually-hidden')
document.body.classList.remove('locked')
}

function openModal() {
    modalWindow.classList.remove('visually-hidden')
    document.body.classList.add('locked')
}