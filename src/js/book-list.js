
import getCategotyList from '.js/bookAPI.js'

const list = document.querySelector('.book-list-ul');

// function createMarkup (list) {
//     return list 
//     .map(({})) => {
//         return ` <li class="book-list-item">
//                      <a href="" class="book-list-link"><span class="text current">${}</span></a>
//                 </li>`
//     }
//     .join('');
// }
// const markup = createMarkup(getCategotyLis());
// list.insertAdjacentHTML = ('beforeend', markup);


const item = list.querySelectorAll('.book-list-item');


list.addEventListener('click', addClass);

function addClass (evt) {
    evt.preventDefault();
    if(evt.target.nodeName === "SPAN") {
        const removeEl = document.querySelector('.current');
        removeEl.classList.remove('current');
        const currentEl = evt.target;
        currentEl.classList.add('current');
    }
    

    

}


