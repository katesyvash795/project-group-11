
const list = document.querySelector('.book-list-ul');
const item = list.querySelectorAll('.book-list-item');





list.addEventListener('click', addClass);

function addClass (evt) {
    evt.preventDefault();
    if(!evt.target.tagName === "LI") {
        return
    }
    const removeEl = document.querySelector('.current');
    removeEl.classList.remove('current');
    const currentEl = evt.target;
    currentEl.classList.add('current');

    

}
