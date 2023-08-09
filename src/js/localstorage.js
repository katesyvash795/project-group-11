const addToShoppingList = document.querySelector('.modal-button')
const removeFromShoppingList = document.querySelector('.modal-button')

addToShoppingList = addEventListener('click', addToShoppingList)
removeFromShoppingList = addEventListener('click', removeFromShoppingList)

export function addToShoppingList(bookData) {

    const storageKey = 'shoppingList';
    let shoppingList = JSON.parse(localStorage.getItem(storageKey))  [];
  
  const bookIndex = shoppingList.findIndex(
        item => item.title === bookData.title
      );
   
    if (bookIndex === -1) {
        shoppingList.push(bookData);
        localStorage.setItem(storageKey, JSON.stringify(shoppingList));
      }
    }
  
  export function removeFromShoppingList(bookTitle) {
  const storageKey = 'shoppingList';
  let shoppingList = JSON.parse(localStorage.getItem(storageKey))  [];
 const bookIndex = shoppingList.findIndex(
  item => item.title === bookTitle
  );
      if (bookIndex !== -1) {
  shoppingList.splice(bookIndex, 1);
  localStorage.setItem(storageKey, JSON.stringify(shoppingList));
  }
   }