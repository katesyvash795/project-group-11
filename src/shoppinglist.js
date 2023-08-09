import './js/scroll-up';
import './js/support';
import './js/header';
import './js/theme-switch';

const goToCartButton = document.querySelector(".js-go-to-cart");
const refJsLIst =document.querySelector(".js-list");
const container=document.querySelector(".js-list");
const storageKey = 'shoppingList';
const products = JSON.parse(localStorage.getItem(storageKey))||[];
function createMarkup(arr) {
    return arr.map(({ author, book_image, buy_links, description, title }) => `
    <li data-id="${title}" class="js-product shopping-list-item">
        <img src="${book_image}" alt="${title}" width="116" height="165" class="shop-img"/> 
        <div class="shop-item-div">
            <div class="top-item-div">
                <h2 class="shopping-list-title">${title}</h2>
                <button class="js-remove" data-id="${title}">
                    <svg width="22" height="22" class="shop-icons">
                        <use href="../images/icons.svg#icon-trash"></use>
                    </svg>
                </button>
            </div>
            <p class="shopping-list-text">${limitWords(description, 4)}</p>
            <div class="author-icons">
                <p class="shopping-list-author">${author}</p>
                <div class="book-links">
                    ${createBookLinks(buy_links)}
                </div>
            </div>
        </div>
    </li>
`).join("");
}

function createBookLinks(buy_links) {
    return buy_links.map(link => `<a href="${link.url}" target="_blank"> <img src="${link.icon}" alt="Link Icon" class="link-icon"></a>`).join("");
}
console.log(createMarkup(products));
if (localStorage.getItem('shoppingList') === null) {
    // Если данных нет, выводим сообщение "Книг нет"
    const hiddenElement = document.querySelector('.is-hidden');
    hiddenElement.classList.remove('is-hidden');
} 
else {
    // Если данные уже есть в локальном хранилище, используем их
    const markup = createMarkup(products);
    container.insertAdjacentHTML('beforeend',markup);
}

// Отримати список усіх кнопок "прибрати з кошика"
var removeButtons = document.querySelectorAll(".js-remove");

// Функція для видалення об'єкта
function removeProduct(event) {
  var liElement = event.target.closest(".js-product");
  if (liElement) {
    liElement.remove();
    localStorage.removeItem('shoppingList');
    console.log('Данные удалены из локального хранилища.');
    updateLocalStorage();
     // Оновити локальне сховище після видалення
     if(!document.querySelector(".shopping-list-item")){
        refJsLIst.innerHTML="This page is empty, add some books and proceed to order.";
     }
  }
}

// Оновити локальне сховище
function updateLocalStorage() {
  var productIds = [];

  removeButtons.forEach(function (button) {
    var id = button.getAttribute("data-id");
    productIds.push(id);
  });

  localStorage.setItem("selectedProducts", JSON.stringify(productIds));
console.log(localStorage);
if (productIds.length === 0) {
    const messageElement = document.querySelector('.message');
    messageElement.classList.remove('is-hidden');
  }
}

window.addEventListener("beforeunload", function () {
    // localStorage.setItem(PRODUCT_LS_KEY, null);
    localStorage.setItem(storageKey);
}
);




// Додати обробник події для кожної кнопки "прибрати з кошика"
removeButtons.forEach(function (button) {
  button.addEventListener("click", removeProduct);
});
function limitWords(text, limit) {
    const words = text.split(" ");
    if (words.length <= limit) {
        return text;
    } else {
        return words.slice(0, limit).join(" ") + " ...";
    }
}
