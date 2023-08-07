
const list = document.querySelector('.book-list-ul');
const item = list.querySelectorAll('.book-list-item');


console.log(list);
console.log(item);


list.addEventListener('click', addClass);

function addClass (evt) {
    evt.preventDefault();
    const removeEl = document.querySelector('.current');
    removeEl.classList.remove('current');
    const currentEl = evt.target;
    currentEl.classList.add('current');

    console.log(currentEl);

    

}
