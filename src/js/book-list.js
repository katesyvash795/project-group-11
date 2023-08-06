const itemBook = document.querySelector('.book-list-item');
const linkBook = document.querySelector('.book-list-link');

linkBook.addEventListener('click', addClass);

function addClass (evt) {
    evt.preventDefault();
    if(!evt.classList.contains(current)){
        linkBook.classList.add(current);
        itemBook.classList.add(current);
    }
    

}

console.log('ok');