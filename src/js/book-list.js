
import { getCategotyList } from './bookAPI'

const list = document.querySelector('.book-list-ul');



function renderBookList() {
    getCategotyList().then(response => {
        list.insertAdjacentHTML('beforeend', createMarkup(response));
    }
    );
}

function createMarkup(list) {
    const result = list.map(element => {
        return ` <li class="book-list-item">
                     <a href="" class="book-list-link"><span>${element.list_name}</span></a>
                </li>`
    }).join('');
    console.log(result);
    return result;
}



renderBookList();


list.addEventListener('click', addClass);

function addClass(evt) {
    evt.preventDefault();
    if (evt.target.nodeName === "SPAN") {
        const removeEl = document.querySelector('.current');
        removeEl.classList.remove('current');
        const currentEl = evt.target;
        currentEl.classList.add('current');
    }

}


